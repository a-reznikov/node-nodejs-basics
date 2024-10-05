import { getPathToFile } from '../utils/getPathToFile.js';
import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const pathToFile = getPathToFile(import.meta.url, 'script.js');

    const subprocess = spawn('node', [pathToFile, ...args]);
    process.stdin.on('data', (data) => subprocess.stdin.write(data));
    subprocess.stdout.on('data', (data) => {
        console.log(data.toString());
    });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
