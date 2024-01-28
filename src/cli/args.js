const parseArgs = () => {
    const parsed = process.argv.reduce((acc, elem, index, array) => {
        const value = array[index + 1];
        if (elem.startsWith('--') && value) {
            acc.push(`${elem.slice(2)} is ${value}`);
        }

        return acc;
    }, []).join(', ');

    console.log(parsed);
};

parseArgs();