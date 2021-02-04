'use strict';

const EventEmitter = require('events')
class ConcurrentExecutor {

    constructor(concurrency) {
        this.pool = [];
        this.done = 0;
        this.working = 0;
        this.concurrency = concurrency;
        this.event = new EventEmitter();
        this.event.on('done', () => {
            this.done++;
            this.working--;
            this.run()
            this.printf();
        })
    }

    async run() {
        if (this.working === this.concurrency) {
            return;
        }
        if (this.pool.length) {
            const job = this.pool.shift(); // 任务池中取一个任务
            this.working++;
            await job(); // 执行完成一个任务
            this.event.emit('done');
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
const reqMock = () => new Promise(res =>
    setTimeout(() => res(), Math.random().toFixed(3) * 3000, res))

// for (let i = 0; i < 100; i++) {
//     concurrentExecutor.add(reqMock);
// }

setInterval(() => {
    concurrentExecutor.add(reqMock);
}, 200)