import { Transform, pipeline } from 'stream';

const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const reversed = chunk.toString().split('').reverse().join('');
        callback(null, reversed);
    }
})

const transform = async () => {
    // Write your code here 
    console.log('Please enter text to reverse (press Ctrl+D to end input on Unix/Linux/MacOS, or Ctrl+Z followed by Enter on Windows):');

    pipeline(
        process.stdin,
        reverseTransform,
        process.stdout,
        (error) => {
            if (error) {
                throw error
            } else {
                console.log("Operation done successfully");
            }
        }
    )
};

await transform();