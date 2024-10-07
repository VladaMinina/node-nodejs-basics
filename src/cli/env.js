const parseEnv = () => {
    // Write your code here 
    const args = process.argv.slice(2);// Skip the first two arguments (node executable and script path)
    let resultSet = [];

    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].replace('--', '');
        const propValue = args[i + 1];
        resultSet.push(`${propName} is ${propValue}`);
    }
    console.log(resultSet.join(', '));
};

parseEnv();