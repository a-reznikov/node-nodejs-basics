import { getPathToFile } from '../utils/getPathToFile.js';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';

const pathToArchive = getPathToFile(import.meta.url, 'archive.gz');
const pathToFile = getPathToFile(import.meta.url, 'fileToCompress.txt');

const decompress = async () => {
    try {
        await pipeline(
            createReadStream(pathToArchive),
            createGunzip(),
            createWriteStream(pathToFile, 'utf-8'),
        );
        console.log('Successfully unarchive!');
    } catch (error) {
        throw error;
    }
};

await decompress();