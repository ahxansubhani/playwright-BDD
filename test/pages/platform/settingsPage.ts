import { BaseClass } from "../../helpers/BaseClass";
import { elements } from "../../xpath/platform/settingPageElements";

export default class SettingsPage {
	baseInstance: BaseClass;
	reports = [];
	reportData = [];
	dashboardFileName = "";

	constructor(baseInstance: BaseClass) {
		this.baseInstance = baseInstance;
	}

	async navigateToTab(destination: string) {
		switch(destination.toLowerCase()) {
			case "users":
				await this.baseInstance.clickElement(elements.tabMenu.usersTab, "Users Tab");
				break;
			default:
				throw new Error("Invalid tab menu provided");
		}
	}

	async logoIsDisplayed() {
		return await this.baseInstance.isDisplayed(elements.header.settingsHeading);
	}

	async clickOnAddUserButton() {
		await this.baseInstance.clickElement(elements.users.addUserBtn, "Add user button");
	}

	async enterEmail(email: string) {
		await this.baseInstance.enterText(
			elements.users.addUserModal.emailInput, email, "Email input",
		);
	}

	async clickOnNext(){
		await this.baseInstance.clickElement(elements.users.addUserModal.nextBtn, "Next button");
	}
	async clickOnConfirm(){
		await this.baseInstance.clickElement(elements.users.addUserModal.confirmBtn, "Confirm button");
	}

	async enterFirstName(firstName: string) {
		await this.baseInstance.enterText(
			elements.users.addUserModal.firstNameInput, firstName, "First Name input",
		);
	}
	
	async enterLastName(lastName: string) {
		await this.baseInstance.enterText(
			elements.users.addUserModal.lastNameInput, lastName, "Last Name input",
		);
	}

	async selectAccessLevel(access: string) {
		// Check if access name is provided
		if (!access) {
			access = "apps user";
		}
		switch (access.toLowerCase()) {
			case "apps user":
				await this.baseInstance.clickElement(elements.users.addUserModal.appsUserRadio, "Apps user Radio");

				break;
			case "co-owner":
				await this.baseInstance.clickElement(elements.users.addUserModal.coownerRadio, "Co-Owner user Radio");
				break;
			default:
				throw new Error(`Invalid access level provided: ${access} please provide apps-user or co-owner`);
		}
	}

	async selectApp(table: string[][]){
		for (const row of table) {
			await this.baseInstance.checkCheckbox(elements.users.addUserModal.appsCheckbox(row[0]));
		}
	}
}
