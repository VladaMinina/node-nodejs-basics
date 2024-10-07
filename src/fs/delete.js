import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const fileToDelete = path.join(__dirname, 'fileToRemove.txt');

    try{
        await fs.access(fileToDelete);

        await fs.unlink(fileToDelete);
        console.log('Success operation');
    } catch(error) {
        if (error.code !== 'ENOENT') {
            throw new Error ("Operation failed: ", error);
        } else {
            throw new Error (error);
        }
    }
    // Write your code here 
};

await remove();