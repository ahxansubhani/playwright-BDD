import * as fs from "fs";
import * as JSZip from "jszip";
import * as sax from "sax";

export async function extractTextFromPPTX(filepath, _mode = "text"): Promise<string> {
	let pptxFileBuffer;
	try {
		pptxFileBuffer = fs.readFileSync(filepath);
	} catch (err) {
		console.log(err);
		return "";
	}
	const slideXMLArray = await getSlideXML(pptxFileBuffer);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const text = await parseSlideXML(slideXMLArray, (_mode = "text"));
	return text;
}

async function getSlideXML(fileBuffer) {
	const slideXMLArray = [];
	const zip = await new JSZip().loadAsync(fileBuffer);
	// filter out the slide XML files
	const slideFiles = Object.keys(zip.files).filter((filename) => filename.match(/slide\d+\.xml$/));
	for (let i = 0; i < slideFiles.length; i++) {
		const slideFile = slideFiles[i];
		const slideXML = await zip.files[slideFile].async("string");
		slideXMLArray.push(slideXML);
	}
	return slideXMLArray;
}

async function parseSlideXML(slideXMLArray: string[], _mode: "text" = "text"): Promise<string> {
	let text = "";

	for (let i = 0; i < slideXMLArray.length; i++) {
		const slideXML = slideXMLArray[i];
		const parser = sax.parser(true);
		const slideNum = "Slide " + i;
		let slideText = "";

		if (_mode === "text") {
			slideText += "\n---\n" + slideNum + "\n";
		}

		parser.onopentag = (node) => {
			if (node.name === "a:p") {
				slideText += "\n";
			}
		};

		parser.ontext = function (t) {
			if (t.trim()) {
				slideText += t;
			}
		};

		parser.write(slideXML.toString()).close();
		text += slideText;
	}

	return text;
}
