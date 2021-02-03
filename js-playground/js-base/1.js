'use strict';
const EventEmitter = require('events')

class ConcurrentExecutor {

    constructor(concurrency) {
        this.done = 0;
        this.pool = [];
        this.working = 0;
        this.concurrency = concurrency;
        this.event = new EventEmitter();
        this.event.on('done', () => {
            this.done++;
            this.working--;
            this.run();
        })
    }

    async run() {
        if (this.working === this.concurrency) {
            return;
        }
        if (this.pool.length) {
            const job = this.pool.shift();
            this.working++;
            await job();
            this.event.emit('done');
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

const concurrentExecutor = new ConcurrentExecutor(4)

const reqMock = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, Math.random().toFixed(3) * 5000, resolve)
    })
}

setInterval(() => {
    concurrentExecutor.add(reqMock);
}, 1000)