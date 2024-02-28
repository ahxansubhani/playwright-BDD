import { When, DataTable } from "@cucumber/cucumber";
import SettingsPage from "../../pages/platform/settingsPage";
import { baseInstance } from "../../helpers/BaseClass";
import { generateRandomUserData, UserData } from "../../helpers/util/random";

const settingsPage: SettingsPage = new SettingsPage(baseInstance);

const addedUserData: UserData = generateRandomUserData(); 

When ("User opens {string} tab", async function (tab: string) {
	await settingsPage.navigateToTab(tab);
});

When ("User clicks on add user button",async () => {
	await  settingsPage.clickOnAddUserButton();
});

When ("User enters email in email field",async () => {

	await  settingsPage.enterEmail(addedUserData.email);
});

When ("User enters {string} in email field",async function (email:string) {
	await  settingsPage.enterEmail(email);
});

When ("User clicks on next button",async () => {
	await  settingsPage.clickOnNext();
});

When ("User clicks on confirm button",async () => {
	await  settingsPage.clickOnConfirm();
});

When ("User enters firstname in firstname field",async () => {
	await  settingsPage.enterFirstName(addedUserData.firstName);
});

When ("User enters {string} in firstname field",async function (fName: string) {
	await  settingsPage.enterFirstName(fName);
});

When ("User enters lastname in lastname field",async () => {
	await  settingsPage.enterLastName(addedUserData.lastName);
});


When ("User enters {string} in lastname field",async function(lName:string) {
	await  settingsPage.enterLastName(lName);
});

When ("User selects {string} access", async function (access: string) {
	await  settingsPage.selectAccessLevel(access);
});

When ("User selects the apps for access", async function (dataTable: DataTable) {
	const table = dataTable.rows().slice(0);
	await  settingsPage.selectApp(table);
});

export {addedUserData};

