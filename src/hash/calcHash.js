import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

const calculateHash = async () => {
    // Write your code here
    const piplineAsync = promisify(pipeline);
    const file = './files/fileToCalculateHashFor.txt';

    const readStream = createReadStream(file);
    const hash = createHash('sha256');

    try {
        await piplineAsync(
            readStream,
            hash.setEncoding('hex')
        )
        console.log('Hash that was created: ', hash.read());
    } catch (error) {
        console.error('Errorr:', error);
    }
};

await calculateHash();