import { unlink } from 'node:fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';


const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    try {
        await unlink(resolve(__dirname, 'files/fileToRemove.txt'));
        console.log('=== File was successfully deleted! ===');
    } catch {
        throw new Error('FS operation failed!');
    }
};

await remove();