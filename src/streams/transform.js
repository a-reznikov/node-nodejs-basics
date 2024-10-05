import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';
import { EOL } from 'node:os';

const transform = async () => {
    try {
        const transformStream = new Transform({
            transform(chunk, encoding, callback) {
                callback(null, `${String(chunk).trim().split('').reverse().join('')}${EOL}`);
            },
        });
        await pipeline(process.stdin, transformStream, process.stdout);
    } catch (error) {
        throw error;
    }
};

await transform();