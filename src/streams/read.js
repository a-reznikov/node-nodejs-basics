import { getPathToFile } from '../utils/getPathToFile.js';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const pathToFile = getPathToFile(import.meta.url, 'fileToRead.txt');

const read = async () => {
    try {
        const stream = createReadStream(pathToFile, 'utf-8');
        await pipeline(stream, process.stdout);
    } catch (error) {
        throw error;
    }
};

await read();