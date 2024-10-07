import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsynch = promisify(pipeline);

const decompress = async () => {
    // Write your code here 
    const outputFile = './files/fileToCompress.txt';
    const inputFile = './files/archive.gz';

    const gunzip = createGunzip();
    const readStream = createReadStream(inputFile);
    const writeSrteam = createWriteStream(outputFile);

    try {
        await pipelineAsynch(
            readStream,
            gunzip,
            writeSrteam
        )
        console.log("Data decompressed successfully");
    } catch (error) {
        throw error;
    }
};

await decompress();