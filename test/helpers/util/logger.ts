import { transports, format } from "winston";

export function options(scenarioName: string) {
	return {
		transports: [
			new transports.File({
				filename: `test-results/logs/${scenarioName}_log.log`,
				level: "info",
				format: format.combine(
					format.timestamp({ format: "DD-MMM-YYYY HH:mm:ss" }),
					format.align(),
					format.printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`),
				),
			}),
		],
	};
}
