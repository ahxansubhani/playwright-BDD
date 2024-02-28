import axios from "axios";
import * as fs from "fs-extra";
import { Base, baseInstance } from "../BaseClass";

export async function downloadFileUsingURL(url: string, fileName: string) {
	try {
		const response = await axios.get(url, { responseType: "stream" });

		const writer = fs.createWriteStream(baseInstance.downloadPath + fileName);

		await response.data.pipe(writer);

		await new Promise<void>((resolve, reject) => {
			writer.on("finish", resolve);
			writer.on("error", reject);
		});

		Base.logger.info("File downloaded at " + baseInstance.downloadPath + fileName);
	} catch (error) {
		Base.logger.error("Error downloading file:", error);
	}
}
