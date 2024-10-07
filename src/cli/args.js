const parseArgs = () => {
    // Write your code here 
    const envVars = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`);

    console.log(envVars.join('; '));
    console.log('Finished successfully');
};

parseArgs();