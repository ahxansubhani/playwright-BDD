import { When, Then, DataTable, Given } from "@cucumber/cucumber";
import { Base, baseInstance } from "../../helpers/BaseClass";
import * as assert from "assert";
import { verifyCSVFileContent } from "../../helpers/util/excel_csv";
import { getEmailMessageSubject } from "../../helpers/util/mailtrap";
import { addedUserData } from "./settingsSteps";


When("Take screenshot", async function () {
	await baseInstance.takeScreenshot();
});

When("Wait for {int} seconds", async function (seconds: number) {
	await baseInstance.wait(seconds);
});

Given("Set user as {string}", async function (user: string) {
	baseInstance.user = user;
});


When("Verify contents of {string} file", async function (flieName: string, dataTable: DataTable) {
	const contentList = dataTable.rows().slice(0);
	const fileType = flieName.split(".")[1];
	switch (fileType) {
		case "csv":
			for (const data of contentList) {
				await verifyCSVFileContent(flieName, data[0]);
			}
			break;
		case "xlsx":
			// assert(await baseInstance.verifyExcelFileContent(flieName, contentList), "File content is not correct");
			break;
		case "pdf":
			// assert(await baseInstance.verifyExcelFileContent(flieName, contentList), "File content is not correct");
			break;
		default:
			throw "Please specify 'csv' or 'xlsx' file";
	}
});

When("User clicks back button", async function () {
	await baseInstance.goBackButton();
});

Then ("Verify Set your Password email", async function (){
	const actualSubject = await getEmailMessageSubject(addedUserData.email);
	const expectedSubject = "Set your password";
	assert(
		actualSubject.toLowerCase() == expectedSubject.toLowerCase(), "Expected: " + expectedSubject +
		" Actual: "+actualSubject
	);
});