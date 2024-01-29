import { getPathToFile } from '../utils/getPathToFile.js';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const pathToFile = getPathToFile(import.meta.url, 'fileToCompress.txt');
const pathToArchive = getPathToFile(import.meta.url, 'archive.gz');

const compress = async () => {
    try {
        await pipeline(
            createReadStream(pathToFile, 'utf-8'),
            createGzip(),
            createWriteStream(pathToArchive, 'utf-8'),
        );
        console.log('Successfully archived!');
    } catch (error) {
        throw error;
    }
};

await compress();