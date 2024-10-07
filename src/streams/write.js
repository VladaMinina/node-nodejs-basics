import { createWriteStream } from 'fs';
import { pipeline } from 'stream';

const write = async () => {
    // Write your code here 
    const file = './files/fileToWrite.txt'
    const writableStream = createWriteStream(file);

    pipeline(
        process.stdin,
        writableStream,
        (error) => {
            if(error) {
                throw error;
            } else {
                console.log("Data wrinnen to file successfully");
            }
        }
    )
};

await write();