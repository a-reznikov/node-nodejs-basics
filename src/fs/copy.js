import { mkdir, readdir, copyFile, stat } from 'node:fs/promises';
import { dirname, resolve, join } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const source = resolve(__dirname, 'files');
    const destination = resolve(__dirname, 'files_copy');

    try {
        const objInDir = await readdir(source);
        await mkdir(destination);
        await Promise.all(objInDir.map((obj) => {
            copyFile(join(source, obj), join(destination, obj));
        }))
        console.log('=== Directory was successfully copied! ===');
    } catch (error) {
        throw new Error('FS operation failed!');
    }
};

await copy();
