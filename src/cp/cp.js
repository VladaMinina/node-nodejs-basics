import { spawn } from 'child_process';

const testArguments = ['arg_test_1', 'arg_test_2']; 

const spawnChildProcess = async (args) => {
    // Write your code here
    const childProcess = spawn('node', ['./files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('error', (error) => {
        console.error('Child process error', error);
    });

    childProcess.on('exit', (code) => {
        if(code !== 0) {
            console.error(`Error exiting child process ${code}`);
        }
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(testArguments);
