function onOpen() {
	SpreadsheetApp.getUi()
		.createMenu("GLOSSARY EDITOR")
		.addItem("OPEN EDITOR", "openDialog")
		.addToUi();
}

function openDialog() {
	const html = HtmlService.createHtmlOutputFromFile("Dialog")
		.setWidth(800)
		.setHeight(500);
	SpreadsheetApp.getUi().showModalDialog(html, "Dictionary Editor");
}

function findWords(query) {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	const data = sheet.getDataRange().getValues();
	const words = query.trim().toLowerCase().split(/\s+/); // Split by spaces, trim, and lowercase
	const results = [];

	for (let i = 0; i < data.length; i++) {
		const pl = data[i][0]?.toString().toLowerCase() || "";
		const ua = data[i][1]?.toString().toLowerCase() || "";

		// Check if all words are present in either PL or UA columns (partially allowed)
		const matches = words.every(
			(word) => pl.includes(word) || ua.includes(word)
		);

		if (matches) {
			results.push({
				rowIndex: i + 1,
				pl: data[i][0],
				ua: data[i][1],
			});
		}
	}
	return results;
}

function deleteRow(rowIndex) {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	sheet.deleteRow(rowIndex);
}

function updateRow(rowIndex, pl, ua) {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	sheet.getRange(rowIndex, 1).setValue(pl);
	sheet.getRange(rowIndex, 2).setValue(ua);
}

// Function to add a new row with the pair of words
function addNewPair(pl, ua) {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

	// Add new row to the sheet with Polish and Ukrainian words
	sheet.appendRow([pl, ua]);
}
