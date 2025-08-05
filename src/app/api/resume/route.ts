import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * GET handler for the /api/data endpoint.
 * This function reads a local JSON file and returns its content.
 *
 * @param {NextRequest} request - The incoming Next.js request object.
 * @returns {NextResponse} A JSON response containing the file's data.
 */
export async function GET(request: NextRequest) {
  try {
    // Determine the path to the JSON file.
    // process.cwd() gets the current working directory.
    // We assume the route file is in `app/api/data/route.ts` and the data.json is in the same directory.
    const filePath = "public/data/resume_dev.json";
    
    // Read the file content as a string.
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');

    // Parse the JSON string into a JavaScript object.
    const jsonData = JSON.parse(fileContent);

    // Return the JSON data using NextResponse.
    return NextResponse.json(jsonData, { status: 200 });

  } catch (error: any) {
    // If the file is not found or parsing fails, return an error.
    console.error('Error reading JSON file:', error);

    // Provide a more specific error message based on the error type.
    const errorMessage = error.code === 'ENOENT'
      ? 'File not found. Make sure app/api/data/data.json exists.'
      : 'Error processing file.';

    return NextResponse.json(
      { error: errorMessage, details: error.message },
      { status: 500 }
    );
  }
}
