import pdfLoader from "./pdfLoader.js";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const pdfChunking = async () => {

  // Load all docs
  const allRawDocs = await pdfLoader();

  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });
  
   const chunkedDocs = await textSplitter.splitDocuments(allRawDocs);

  console.log("Total chunks created:", chunkedDocs.length);

  //Return chunks for next step embeddings
  return chunkedDocs;
};
export default pdfChunking;