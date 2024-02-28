import { BaseClass } from "../../helpers/BaseClass";
import { elements } from "../../xpath/platform/leftNavigationElements";

export default class LeftNavigatioPage {
	baseInstance: BaseClass;
	reports = [];
	reportData = [];
	dashboardFileName = "";

	constructor(baseInstance: BaseClass) {
		this.baseInstance = baseInstance;
	}


	async navigateTo(destination) {
		switch(destination.toLowerCase()) {
			case "settings":
				await this.baseInstance.clickElement(elements.leftNavigation.settingsBtn, "Settings button");
				break;
			case "users":
				await this.baseInstance.openURL("https://account.dev.exiqtive.com/users");
				break;	
			default:
				throw new Error("Invalid destination provided");
		}
	}

	async logoIsDisplayed() {
		return await this.baseInstance.isDisplayed(elements.header.logo);
	}
}
