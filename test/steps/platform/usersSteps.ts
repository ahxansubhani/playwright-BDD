import { Then, When } from "@cucumber/cucumber";
import UsersPage from "../../pages/platform/usersPage";
import { baseInstance } from "../../helpers/BaseClass";
import { addedUserData } from "./settingsSteps";
import * as assert from "assert";


const userspage: UsersPage = new UsersPage(baseInstance);


When ("User search for full name in search field", async function () {
	const fullName = `${addedUserData.firstName} ${addedUserData.lastName}`;
	await userspage.enterSearchKeyword(fullName);
});

When ("User search for {string} in search field", async function (keyword: string) {
	await userspage.enterSearchKeyword(keyword);
});

Then ("Verify user full name on Users Page", async function () {
	const expectedFullName = `${addedUserData.firstName} ${addedUserData.lastName}`;
	const actualFullName = await userspage.getFullNameText();
	assert(
		expectedFullName.toLowerCase() == actualFullName.toLowerCase(), "Expected: " + expectedFullName +
		" Actual: "+actualFullName
	);
});

Then ("Verify user full Name {string} on Users Page", async function (fullname:string) {
	const actualFullName = await userspage.getFullNameText();
	assert(
		fullname.toLowerCase() == actualFullName.toLowerCase(), "Expected: " + fullname +
		" Actual: "+actualFullName
	);
});
