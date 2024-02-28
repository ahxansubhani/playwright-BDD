import { Given } from "@cucumber/cucumber";
import LeftNavigatioPage from "../../pages/platform/leftNavigationPage";
import { baseInstance } from "../../helpers/BaseClass";


const leftNavigationPage: LeftNavigatioPage = new LeftNavigatioPage(baseInstance);

Given ("User is on {string} Page", async function (page: string) {
	await leftNavigationPage.navigateTo(page);
});