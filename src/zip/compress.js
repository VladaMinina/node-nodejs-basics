import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsynch = promisify(pipeline);

const compress = async () => {
    // Write your code here 
    const inputFile = './files/fileToCompress.txt';
    const outputFile = './files/archive.gz';

    const gzip = createGzip();
    const readStream = createReadStream(inputFile);
    const writeSrteam = createWriteStream(outputFile);

    try{
        await pipelineAsynch(readStream,
        gzip, 
        writeSrteam);
        console.log('Compressed successfully');
    } catch(error) {
        throw error;
    }
};

await compress();