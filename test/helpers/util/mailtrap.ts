import { MailtrapClient } from "mailtrap";

// Function to initialize Mailtrap client
async function initializeMailtrap(): Promise<MailtrapClient> {
	const TOKEN = process.env.MAILTRAP_TOKEN;
	const TEST_INBOX_ID = process.env.MAILTRAP_INBOX ? parseInt(process.env.MAILTRAP_INBOX) : undefined;
	const ACCOUNT_ID = process.env.MAILTRAP_ACCOUNT_ID ? parseInt(process.env.MAILTRAP_ACCOUNT_ID) : undefined;
	return new MailtrapClient({ token: TOKEN, testInboxId: TEST_INBOX_ID, accountId: ACCOUNT_ID });
}

// Function to initialize Mailtrap projects client
async function getProjects() {
	const client = await initializeMailtrap();
	return client.testing.projects;
}

// Function to initialize Mailtrap inboxes client
async function getInboxes() {
	const client = await initializeMailtrap();
	return client.testing.inboxes;
}

// Function to get the list of inboxes
async function getInboxesList() {
	const inboxes = await getInboxes();
	return inboxes.getList();
}

async function getFirstInboxId(): Promise<number> {
	const inboxes = await getInboxesList();
	if (inboxes.length > 0) {
		return inboxes[0].id;
	}
	return undefined; // Return undefined if there are no inboxes
}

export async function cleanInbox() {
	const client = await initializeMailtrap();
	const firstInboxId = await getFirstInboxId();
	return client.testing.inboxes.cleanInbox(firstInboxId);
}


async function getMessages() {
	const client = await initializeMailtrap();
	return client.testing.messages;
}

async function getFirstInboxMessages() {
	const firstInboxId = await getFirstInboxId();
	const messages = await getMessages();
	return await messages.get(firstInboxId);
}

async function getMessageId(email: string) {
	const messages = await getFirstInboxMessages();
	const message = messages.find(message => message.to_email === email);
	if (message) {
		return message.id;
	} else {
		throw new Error(`Message with email "${email}" not found.`);
	}
}

export async function getEmailMessageSubject(email: string) {
	const message = await getMessageId(email);
	const client = await initializeMailtrap();
	const firstInboxId = await getFirstInboxId();
	const messageHeader = await client.testing.messages.getMailHeaders(firstInboxId,message);
	return messageHeader.headers.subject;	
}
