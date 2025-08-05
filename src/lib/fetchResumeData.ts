import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';

export default async function fetchResumeData(fileName: string = 'resume_dev') {     
  try {
    // Get the path to the resume-data.json file.
    const filePath = path.join('./public/data', `${fileName}.json`);
    // Read the file content.
    const fileContents = await fs.readFile(filePath, 'utf-8');
    // Parse the JSON data.
    return(JSON.parse(fileContents));
  } catch (error) {
    console.error("Failed to load resume data:", error);
    // If the file is not found or invalid, we can show a 404 page.
    notFound();
  }
}