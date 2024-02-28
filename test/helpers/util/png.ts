import { createWorker } from "tesseract.js";
import { Base } from "../BaseClass";

/**
 * @param imagePath full path to the image
 * @returns extracted text from the image
 */
export async function extractTextFromImage(imagePath: string): Promise<string> {
	try {
		const worker = await createWorker("eng");
		const ret = await worker.recognize(imagePath);
		Base.logger.info(ret.data.text);
		await worker.terminate();
		return ret.data.text;
	} catch (error) {
		console.error("Error extracting text from the image:", error);
		throw error;
	}
}
