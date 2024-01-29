import { getPathToFile } from '../utils/getPathToFile.js';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const pathToFile = getPathToFile(import.meta.url, 'fileToWrite.txt')

const write = async () => {
    try {
        const stream = createWriteStream(pathToFile, 'utf-8');
        await pipeline(process.stdin, stream);
    } catch (error) {
        throw error;
    }
};

await write();