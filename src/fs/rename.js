import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    // Write your code here 
    const wrongFileName = path.join(__dirname, 'wrongFilename.txt');
    const properFileName = path.join(__dirname, 'properFilename.md');

    try{
        await fs.access(wrongFileName);

        try {
            await fs.access(properFileName);
            throw new Error("FS operation failed");
        } catch(error) {
            if(error.code !== 'ENOENT') {
                throw new Error(error);
            }
        }

        await fs.rename(wrongFileName, properFileName);
        console.log("File renamed succssfully!");
    } catch (error) {
        throw error;
    }
};

await rename();