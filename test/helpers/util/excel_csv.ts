import * as ExcelJS from "exceljs";
import { Base, baseInstance } from "../BaseClass";

export async function readExcel(fileName: string, sheetNumber: number) {
	const workbook = new ExcelJS.Workbook();
	try {
		await workbook.xlsx.readFile(baseInstance.downloadPath + fileName);
		return workbook.getWorksheet(sheetNumber);
	} catch (error) {
		Base.logger.error("Error reading excel file : " + error);
	}
}

export async function readCSV(fileName: string, sheetNumber: number) {
	const workbook = new ExcelJS.Workbook();
	try {
		await workbook.csv.readFile(baseInstance.downloadPath + fileName);
		return workbook.getWorksheet(sheetNumber);
	} catch (error) {
		Base.logger.error("Error reading excel file : " + error);
	}
}

export async function verifyCSVFileContent(fileName: string, searchString: string) {
	const worksheet = await readCSV(fileName, 1);
	try {
		// Loop through rows and columns to search for the string
		for (let rowIndex = 1; rowIndex <= worksheet.rowCount; rowIndex++) {
			const row = worksheet.getRow(rowIndex);

			for (let colIndex = 1; colIndex <= worksheet.columnCount; colIndex++) {
				const cell = row.getCell(colIndex);

				if (cell.value === searchString) {
					return true; // String found
				}
			}
		}

		return false; // String not found
	} catch (error) {
		Base.logger.error("Error detecting string in CSV:", error);
		return false;
	}
}
