import { appendFile } from 'node:fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    try {
        await appendFile(resolve(__dirname, 'files/fresh.txt'), 'I am fresh and young', { flag: 'wx' });
        console.log('=== File was successfully created! ===');
    } catch {
        const error = new Error('Error: FS operation failed!');
        console.error(error.message);
    }
};

await create();