import { cp } from 'node:fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const source = resolve(__dirname, 'files');
    const destination = resolve(__dirname, 'files_copy');
    try {
        await cp(source, destination, {
            recursive: true,
            errorOnExist: true,
            force: false,
        });
        console.log('=== Directory was successfully copied! ===');
    } catch {
        const error = new Error('Error: FS operation failed!');
        console.error(error.message);
    }
};

await copy();
