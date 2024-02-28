module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:playwright/recommended",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ["*.ts"],
			parserOptions: {
				sourceType: "script",
				project: "./tsconfig.json",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json",
	},
	plugins: ["@typescript-eslint", "prettier"],
	ignorePatterns: [".eslintrc.js"],
	rules: {
		indent: ["error", "tab", { SwitchCase: 1 }],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-multiple-empty-lines": [2, { max: 2 }],
		"@typescript-eslint/no-floating-promises": "error",
		camelcase: ["error", { properties: "always" }],
	},
	root: true,
};
