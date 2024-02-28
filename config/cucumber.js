/* eslint-disable no-undef */
module.exports = {
	default: {
		tags: process.env.npm_config_TAGS || "",
		formatOptions: {
			snippetInterface: "async-await",
		},
		paths: ["test/features/"],
		glue: "test/steps/",
		dryRun: false,
		require: ["test/steps/*/*.ts", "test/helpers/hooks.ts"],
		requireModule: ["ts-node/register"],
		format: [
			"progress-bar",
			"json:test-results/cucumber-report.json",
			"html:cucumber-report.html",
			"rerun:@rerun.txt",
		],
		parallel: 4,
	},
	rerun: {
		formatOptions: {
			snippetInterface: "async-await",
		},
		glue: "test/steps/",
		dryRun: false,
		require: ["test/steps/*/*.ts", "test/helpers/hooks.ts"],
		requireModule: ["ts-node/register"],
		format: ["progress-bar", "json:test-results/cucumber-report.json", "rerun:@rerun.txt"],
		parallel: 2,
	},
};
