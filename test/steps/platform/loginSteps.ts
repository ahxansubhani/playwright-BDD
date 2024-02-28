import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../../pages/platform/loginPage";
import { baseInstance } from "../../helpers/BaseClass";

const loginPage: LoginPage = new LoginPage(baseInstance);

Given("User navigates to application url", async function () {
	await loginPage.openApplicationUrl();
});

When("User enters username in username field", async function () {
	await loginPage.enterEmail();
});

When("User enters password in password field", async function () {
	await loginPage.enterPassword();
});

When("User clicks on login button", async function () {
	await loginPage.clickLoginButton();
});


Then("Fail", async function () {
	throw new Error("This step intentionally fails");
});