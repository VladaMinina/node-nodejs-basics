import {parentPort} from 'worker_threads'

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    parentPort.on('message', (message) => {
        try{
            const computationResult = nthFibonacci(message);
            parentPort.postMessage({status: 'resolved', data: computationResult});
            process.exit(0);
        } catch(error) {
            parentPort.postMessage({status: 'error', data: null});
        }
    })
};

sendResult();