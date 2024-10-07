import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';

const numOfCores = os.cpus().length;

const createWorkerThread = (data) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(path.resolve('./worker.js'));

        worker.postMessage(data);

        worker.on('message', (result) => {
            resolve(result);
        });

        worker.on('error', () => {
            resolve({status: 'error', data: null});
        });

        worker.on('exit', (code) => {
            if(code !== 0){
                resolve({status: 'error', data: null});
            }
        })
        
    })
}

const performCalculations = async () => {
    // Write your code here
    //it allows listen for messages from the main thread
    const promisesSet = [];

    for(let i = 0; i < numOfCores; ++i){
        promisesSet.push(createWorkerThread(i + 10));
    }

    const result = await Promise.all(promisesSet);
    console.log(result);
};

await performCalculations();