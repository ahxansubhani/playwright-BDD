import * as fs from "fs-extra";

async function setupFolders() {
	try {
		await fs.ensureDir("test-results");
		await fs.emptyDir("test-results");

		// Check if the "downloads" folder exists and is empty
		const downloadsPath = "test-results/downloads";
		const downloadsExists = await fs.pathExists(downloadsPath);
		if (!downloadsExists) {
			await fs.ensureDir(downloadsPath);
		}
		console.log("Folder structure is set up.");
	} catch (error) {
		console.error("Error setting up folders:", error);
	}
}

// Call the function to set up the folders
setupFolders().catch((error) => {
	console.error("Error:", error);
});
