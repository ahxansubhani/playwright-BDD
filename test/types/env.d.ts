export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BROWSER: "chrome" | "firefox" | "webkit";
			ENV: "DEV" | "PROD";
			BASEURL: string;
			ADMIN: string;
			MFA_AUTH_SECRET_KEY: string;
			APP_VERSION: string;
			HEADLESS: boolean;
		}
	}
}
