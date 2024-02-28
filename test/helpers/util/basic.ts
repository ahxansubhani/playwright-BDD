/**
 * This method converts truthy string values to boolean value
 *
 * @format
 * @param str
 * @returns boolean equivalent of the string
 */

export function stringToBoolean(str: string): boolean {
	const truthyValues = ["true", "1", "yes", "on"];
	return truthyValues.includes(str.toLowerCase());
}

/**
 * This method is used to format strings for xpaths
 * @param input Word or phrase
 * @returns string with first letter of each word capitalized
 */
export function capitalizeFirstCharAllWords(input: string): string {
	return input.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * This method is used to format strings for xpaths
 * @param input Word or phrase
 * @returns string with first letter of first word capitalized
 */
export function capitalizeFirstChar(input: string): string {
	return input.charAt(0).toUpperCase() + input.slice(1);
}

/**
 * Get datetime method
 * @returns date and time in YYYY-MM-DD HH:MM:SS format
 */
export function getDateTime(): string {
	const date = new Date();
	const dateStr = date.toISOString().split("T")[0];
	const timeStr = date.toTimeString().split(" ")[0];
	return dateStr + " " + timeStr;
}

/**
 * Get datetime method
 * @returns date and time in YYYY-MM-DD HH:MM:SS format
 */
export function getDateTimeWithAddedMinutes(minutesToAdd: number): string {
	const date = new Date();
	date.setMinutes(date.getMinutes() + minutesToAdd);

	const dateStr = date.toISOString().split("T")[0];
	const timeStr = date.toTimeString().split(" ")[0];
	return dateStr + " " + timeStr;
}

/**
 * Get date method
 * @returns date in YYYY-MM-DD format
 */
export function getDate(): string {
	const date = new Date();
	const dateStr = date.toISOString().split("T")[0];
	return dateStr;
}

/**
 * This method is used to get the digits from a string discarding everything else
 * @param inputString
 * @returns string with only digits
 */
export function getDigitsFromString(inputString: string): string {
	// Use a regular expression to match digits (\d) and join them into a string
	const digits = inputString.match(/\d/g);
	if (digits) {
		return digits.join("");
	}
	return "";
}

/**
 * This method is used to get the digits from a string discarding everything else
 * @param inputString
 * @returns string with only digits
 */
export function getCurrentTimezone(): string {
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	return timeZone;
}
