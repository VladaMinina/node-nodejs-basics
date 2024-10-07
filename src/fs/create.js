import fs from 'fs/promises';
import path from 'path';

const create = async () => {
    const dirPath = path.join('/Users/pavelminin/Public/node_course/node-nodejs-basics/src', 'fs');
    const filePath = path.join(dirPath, 'fresh.txt');
    const writeContent = 'I am fresh and young';

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {

            console.log("File doesn't exist, so...let's create!");

            try {
                await fs.access(dirPath);
            } catch (dirError) {
                if (dirError.code === 'ENOENT') {
                    console.error('Error: Directory does not exist.');
                    return;
                }
            }

            try {
                await fs.writeFile(filePath, writeContent);
                console.log('File created and content written in the file successfully!');
            } catch (writeError) {
                console.error('Error writing to file:', writeError);
            }
        } else {
            console.error("Any other errors or file exists:", error.message);
        }
    }
};

await create();
