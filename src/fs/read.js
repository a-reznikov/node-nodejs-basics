import { readFile } from 'node:fs/promises';
import { getPathToFile } from '../utils/getPathToFile.js';

const read = async () => {
    const pathToFile = getPathToFile(import.meta.url, 'fileToRead.txt');

    try {
        const contents = await readFile(pathToFile, { encoding: 'utf8' });
        console.log(contents);
    } catch {
        throw new Error('FS operation failed!');
    }
};

await read();