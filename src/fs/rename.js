import fs, { stat } from 'node:fs/promises';
import { getPathToFile } from '../utils/getPathToFile.js';

const rename = async () => {
    const pathToWrongFile = getPathToFile(import.meta.url, 'wrongFilename.txt');
    const pathToProperFile = getPathToFile(import.meta.url, 'properFilename.md');
    const FsError = new Error('FS operation failed!');

    try {
        await stat(pathToProperFile);
        throw FsError;
    } catch {
        try {
            await fs.rename(pathToWrongFile, pathToProperFile);
            console.log('=== File was successfully renamed! ===');
        } catch {
            throw FsError;
        }
    }
};

await rename();