import * as dotenv from "dotenv";

export const setEnvFile = (env: string) => {
	dotenv.config({
		override: true,
		path: `test/helpers/environment/.env.${env}`,
	});
};
