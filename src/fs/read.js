import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        await fs.access(filePath);

        const context = await fs.readFile(filePath, 'utf8');
        console.log(context);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else {
            throw error;
        }
    }
};

await read();