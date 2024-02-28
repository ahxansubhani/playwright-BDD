module.exports = {
	singleQuote: false, // Use double quotes for strings
	trailingComma: "all", // Add trailing commas (optional)
	semi: true, // Add semicolons (optional)
	tabWidth: 2,
	useTabs: true,

	overrides: [
		{
			files: "*.js", // Include JavaScript files
			options: {
				// Your specific configuration for JavaScript files
				// In this case, adding a space before and after functions
				parser: "typescript",
				semi: true,
				tabWidth: 2,
				printWidth: 120,
				singleQuote: false, // Use double quotes for strings
				trailingComma: "all",
				useTabs: true,
			},
		},
		{
			files: "*.ts", // Include TypeScript files
			options: {
				// Your specific configuration for TypeScript files
				// In this case, adding a space before and after functions
				parser: "typescript",
				semi: true,
				tabWidth: 2,
				printWidth: 120,
				singleQuote: false, // Use double quotes for strings
				trailingComma: "all",
				useTabs: true,
			},
		},
	],
};
