// 'use strict';

// const kDone = Symbol('kDone');
// const kRun = Symbol('kRun');
// /**
//  * A very simple job queue with adjustable concurrency. Adapted from
//  * https://github.com/STRML/async-limiter
//  */
// class Limiter {
//     /**
//      * Creates a new `Limiter`.
//      *
//      * @param {Number} concurrency The maximum number of jobs allowed to run
//      *     concurrently
//      */
//     constructor(concurrency) {
//         this[kDone] = () => {
//             this.pending--;
//             this[kRun]();
//         };
//         this.concurrency = concurrency || Infinity;
//         this.jobs = [];
//         // 正在执行的任务个数，开始执行是加一，执行完减一
//         this.pending = 0;
//     }

//     /**
//      * Adds a job to the queue.
//      *
//      * @public
//      */
//     // 追加一个任务。然后尝试开始执行
//     add(job) {
//         this.jobs.push(job);
//         this[kRun]();
//     }

//     /**
//      * Removes a job from the queue and runs it if possible.
//      *
//      * @private
//      */
//     [kRun]() {
//         // 达到并发量，返回
//         console.log(this.pending, this.concurrency)
//         if (this.pending === this.concurrency) return;
//         // 取出一个任务执行，通过this[kDone]或者add驱动下一个任务
//         if (this.jobs.length) {
//             const job = this.jobs.shift();
//             console.log(this.jobs)
//             this.pending++;
//             job(this[kDone]);
//         }
//     }
// }


// const limiter = new Limiter(5);

const EventEmitter = require('events')

const req = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 1000, resolve)
    })

}

class ConcurrentExecutor {
    constructor(concurrency) {
        // 已完成任务数
        this.done = 0;
        // 任务池
        this.pool = [];
        // 运行中任务数
        this.working = 0;
        // 最大并发数
        this.concurrency = concurrency;
        this.event = new EventEmitter();
        // 任务完成监听器
        this.event.on('done', () => {
            this.printf();
            this.done++;
            this.working--;
            this.run()
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
            // 触发完成事件
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


for (let i = 0; i < 100; i++) {
    concurrentExecutor.add(req);
}

