import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import path from "path";
import { fileURLToPath } from "url";

const pdfLoader = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pdfFiles = [
    path.join(__dirname, "../uploads/class-9-science.pdf"),
    path.join(__dirname, "../uploads/NCERT-Class-10-Science.pdf"),
  ];

  let allDocs = [];

  for (const filePath of pdfFiles) {
    const loader = new PDFLoader(filePath);
    const docs = await loader.load();
    allDocs = allDocs.concat(docs);
  }
  return allDocs;
//   console.log(allDocs.length)
};


export default pdfLoader;