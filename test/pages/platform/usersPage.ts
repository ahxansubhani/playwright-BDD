import { BaseClass } from "../../helpers/BaseClass";
import { elements } from "../../xpath/platform/usersPageElements";

export default class UsersPage {
	baseInstance: BaseClass;
	reports = [];
	reportData = [];
	dashboardFileName = "";

	constructor(baseInstance: BaseClass) {
		this.baseInstance = baseInstance;
	}

	async enterSearchKeyword(keyword: string) {
		await this.baseInstance.enterText(
			elements.searchInput, keyword, "Search input",
		);
	}

	async getFullNameText(){
		return await this.baseInstance.getText(elements.usersTableFirstRow.fullName);
	}
}
