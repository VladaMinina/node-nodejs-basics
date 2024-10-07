import { createReadStream } from 'fs';
import { pipeline } from 'stream';

const read = async () => {
    const fileToRead = './files/fileToRead.txt';
    const readStream = createReadStream(fileToRead, { encoding: 'utf8' });

    pipeline(
        readStream,
        process.stdout,
        (error) => {
            if (error) {
                console.error('Error reading file: ', error);
            } else {
                console.log('File read successfully!');
            }
        }
    )
    // Write your code here 
};

await read();