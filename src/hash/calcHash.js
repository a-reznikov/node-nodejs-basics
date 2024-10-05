import { getPathToFile } from '../utils/getPathToFile.js';
import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto'

const pathToFile = getPathToFile(import.meta.url, 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    try {
        const stream = createReadStream(pathToFile);
        const hash = createHash('sha256');
        await pipeline(stream, hash);
        console.log(hash.digest('hex'));
    } catch (error) {
        throw error;
    }
};

await calculateHash();