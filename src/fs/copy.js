import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const sourceDir = path.join(__dirname, 'files');
    const destDir = path.join(__dirname, 'files_copy');

    try {
        await fs.access(sourceDir);

        try {
            await fs.access(destDir);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code === 'ENOENT') {
                console.log("Destination doesn't exist, proceeding to copy.");
            } else {
                throw err;
            }
        }

        await fs.mkdir(destDir);
        const files = await fs.readdir(sourceDir);

        await Promise.all(files.map(async (file) => {
            const sourceFilePath = path.join(sourceDir, file);
            const destFilePath = path.join(destDir, file);

            const stat = await fs.stat(sourceFilePath);

            if (stat.isDirectory()) {
                await fs.mkdir(destFilePath, { recursive: true });
            } else {
                await fs.copyFile(sourceFilePath, destFilePath);
            }
        }));

        console.log('Directory copied successfully!');
    } catch (error) {
        console.error('Error:', error.message);
    }
};

await copy();
