import * as fsPromises from "fs/promises";
import * as path from "path";

const USERS_JSON_PATH = path.join(__dirname, "../testData/users.json");

interface User {
	username: string;
	password: string;
	firstname: string;
	lastname: string;
	email: string;
}

/**
 * Reads the JSON file and returns the parsed content.
 */
async function readJsonFile(filePath: string) {
	try {
		const content = await fsPromises.readFile(filePath, "utf8");
		return JSON.parse(content);
	} catch (error) {
		console.error("Error reading JSON file:", error);
		throw error;
	}
}

/**
 * Retrieves user details based on the provided username.
 */
export async function getUserDetails(user: string): Promise<User> {
	if (user === undefined) {
		throw new Error("User is undefined, please specify a user");
	}
	const users = await readJsonFile(USERS_JSON_PATH);
	return users[user] || null;
}
