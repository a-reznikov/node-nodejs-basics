import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';
import { Worker, workerData } from 'node:worker_threads';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = resolve(__dirname, 'worker.js');
const processes = cpus();
let incrementalNumber = 10;


const performCalculations = async () => {
    const results = await Promise.allSettled(processes.map(() => {
        return new Promise((res, rej) => {
            const worker = new Worker(pathToFile, {
                workerData: incrementalNumber++,
            })

            worker.on('message', (result) => res(result));
            worker.on('error', (result) => rej(result));
        })
    }))

    const statuses = results.map(({ status, value }) => {
        const isSuccess = status === 'fulfilled' ? true : false;

        return { status: isSuccess ? "resolved" : 'error', value: isSuccess ? value : null };
    })

    console.log(statuses);
};

await performCalculations();