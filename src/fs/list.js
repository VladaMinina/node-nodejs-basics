import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const folderToList = path.join(__dirname, 'files');

    try{
        await fs.access(folderToList);

        const files = await fs.readdir(folderToList);

        await Promise.all(files.map(async (file) => {
            console.log(file);
        }))
    } catch(error) {
        if(error.code === 'ENOENT') {
            throw new Error("FS operation failed");
        } else {
            throw error;
        }
    }
    // Write your code here 
};

await list();