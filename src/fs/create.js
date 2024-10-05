import { appendFile } from 'node:fs/promises';
import { getPathToFile } from '../utils/getPathToFile.js';

const create = async () => {
    const pathToFile = getPathToFile(import.meta.url, 'fresh.txt');

    try {
        await appendFile(pathToFile, 'I am fresh and young', { flag: 'wx' });
        console.log('=== File was successfully created! ===');
    } catch {
        throw new Error('FS operation failed!');
    }
};

await create();