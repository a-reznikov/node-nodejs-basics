import { readdir } from 'node:fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const source = resolve(__dirname, 'files');

    try {
        const objInDir = await readdir(source);
        objInDir.forEach((obj) => {
            console.log(obj);
        });
    } catch {
        throw new Error('FS operation failed!');
    }
};

await list();