import fs, { stat } from 'node:fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const wrongFile = resolve(__dirname, 'files/wrongFilename.txt');
    const properFile = resolve(__dirname, 'files/properFilename.md');
    const FsError = new Error('FS operation failed!');

    try {
        await stat(properFile);
        throw FsError;
    } catch {
        try {
            await fs.rename(wrongFile, properFile);
            console.log('=== File was successfully renamed! ===');
        } catch {
            throw FsError;
        }
    }
};

await rename();