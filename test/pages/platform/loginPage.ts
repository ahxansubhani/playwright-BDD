import { BaseClass } from "../../helpers/BaseClass";
import { getUserDetails } from "../../helpers/jsonHelper";
import { elements } from "../../xpath/platform/loginPageElements";

export default class LoginPage {
	baseInstance: BaseClass;

	constructor(baseInstance: BaseClass) {
		this.baseInstance = baseInstance;
	}

	async openApplicationUrl() {
		await this.baseInstance.openURL(process.env.BASEURL);
	}

	async clickLoginButton() {
		await this.baseInstance.clickElement(elements.signInBtn, "Login button");
		await this.baseInstance.waitForPageToLoad();
	}

	async enterEmail() {
		await this.baseInstance.enterText(
			elements.usernameInput,
			(await getUserDetails(this.baseInstance.user)).email,
			"Email input",
		);
	}

	async enterPassword() {
		await this.baseInstance.enterText(
			elements.passwordInput,
			(await getUserDetails(this.baseInstance.user)).password,
			"Password input",
		);
	}
}