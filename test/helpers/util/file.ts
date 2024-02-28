import * as fs from "fs";
import { Extract } from "unzipper";
import { Base } from "../BaseClass";

/**
 * @param zipFilePath full path to the zip file
 * @param extractTo full path to the folder where zip file needs to be extracted
 */
export async function extractZip(zipFilePath: string, extractTo: string): Promise<void> {
	return new Promise((resolve, reject) => {
		try {
			const readStream = fs.createReadStream(zipFilePath);
			const extractStream = readStream.pipe(Extract({ path: extractTo }));

			extractStream.on("error", (err) => {
				Base.logger.error("Error during ZIP extraction:", err);
				reject(err);
			});

			extractStream.on("close", () => {
				resolve();
			});
		} catch (error) {
			Base.logger.error("Error during setup:", error);
			reject(error);
		}
	});
}

/**
 * @param folderPath full path to the folder
 * @returns file names in folder
 */
export function getFileNamesFromFolder(folderPath: string): string[] {
	try {
		// Read the content of the directory
		const files = fs.readdirSync(folderPath);
		return files;
	} catch (error) {
		console.error("Error reading folder:", error);
		return [];
	}
}
