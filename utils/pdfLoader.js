const fs = require("fs");
const pdfjsLib = require("pdfjs-dist/build/pdf.js");

async function loadPDFText(path) {
  const data = new Uint8Array(fs.readFileSync(path));
  const pdf = await pdfjsLib.getDocument({ data }).promise;
  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map(item => item.str).join(" ") + "\n";
  }
  return text;
}

module.exports = { loadPDFText };