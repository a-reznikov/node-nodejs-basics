import { unlink } from 'node:fs/promises';
import { getPathToFile } from '../utils/getPathToFile.js';

const remove = async () => {
    const pathToFile = getPathToFile(import.meta.url, 'fileToRemove.txt');

    try {
        await unlink(pathToFile);
        console.log('=== File was successfully deleted! ===');
    } catch {
        throw new Error('FS operation failed!');
    }
};

await remove();