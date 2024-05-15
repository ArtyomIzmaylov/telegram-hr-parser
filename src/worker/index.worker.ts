const {Worker} = require('worker_threads')
const path = require("path");
const pathToWorker = path.join(__dirname, 'messageFetcher.worker.js' )

function runService(workerData : any) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(pathToWorker, { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code : any) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
}


export async function run(chatName : string) : Promise<any>  {
    return await runService({chatName: chatName})
}






