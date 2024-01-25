import { mkdir, readdir, copyFile, stat } from 'node:fs/promises';
import { dirname, resolve, join } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const source = resolve(__dirname, 'files');
    const destination = resolve(__dirname, 'files_copy');
    const FsError = new Error('FS operation failed!');
    const flagNotFile = 'ENOENT';
    try {
        await stat(destination);
        throw FsError;
    } catch (error) {
        if (error.code === flagNotFile) {
            try {
                const objInDir = await readdir(source);
                await mkdir(destination, { recursive: true });
                objInDir.forEach(async (obj) => {
                    await copyFile(join(source, obj), join(destination, obj));
                })
                console.log('=== Directory was successfully copied! ===');
            } catch (error) {
                throw FsError;
            }
        } else {
            throw FsError;
        }
    }
};

await copy();
