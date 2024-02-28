import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";
import { stringToBoolean } from "./util/basic";

/**
 * Launch options for initializing browser
 */
const options: LaunchOptions = {
	...(process.env.npm_config_HEADLESS != null
		? { headless: stringToBoolean(process.env.npm_config_HEADLESS) }
		: { headless: false }),
};

/**
 * This method is used to create browser instance.
 * Browser type is set in from test/helpers/environment/env.d.ts
 * @returns Browser
 */
export const invokeBrowser = () => {
	const browserType = process.env.npm_config_BROWSER || "chrome";
	switch (browserType) {
		case "chrome":
			return chromium.launch(options);

		case "firefox":
			return firefox.launch(options);
		case "webkit":
			return webkit.launch(options);
		default:
			throw new Error("Unknown browser");
	}
};
