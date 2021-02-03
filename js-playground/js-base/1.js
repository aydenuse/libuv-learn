const EventEmitter = require('events');

const req = async () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 1000, resolve)
    })


class ConcurrentExecutor {
    constructor(concurrency) {
        this.pool = [];
        this.done = 0;
        this.working = 0;
        this.concurrency = concurrency;
    }

    async run() {
        if (this.working === this.concurrency) {
            return;
        }
        if (this.pool.length) {
            const job = this.pool.shift();
            this.working++;
            await job();
            this.done++;
            this.working--;
            this.printf();
        }
    }

    add(job) {
        this.pool.push(job);
        this.run();

    }

    printf() {
        console.log(`当前任务池:${this.pool.length}, 最大并发数:${this.concurrency}, 运行中:${this.working}, 已完成:${this.done}`);
    }
}


const concurrentExecutor = new ConcurrentExecutor(5)


for (let i = 0; i < 100; i++) {
    concurrentExecutor.add(req);
}
