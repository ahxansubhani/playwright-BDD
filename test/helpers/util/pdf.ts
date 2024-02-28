import * as fs from "fs";
import * as pdf from "pdf-parse";

/**
 * @param pdfFilePath full path to the pdf file
 * @returns extracted text from the pdf file
 */
export async function extractTextFromPDF(pdfFilePath: string): Promise<string> {
	try {
		const dataBuffer = fs.readFileSync(pdfFilePath);
		const data = await pdf(dataBuffer);
		const text = data.text;
		return text;
	} catch (error) {
		console.error("Error extracting text from PDF:", error);
		throw error;
	}
}
