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

const reqMock = () => new Promise(res =>
    setTimeout(() => res(), 1000, res))


class ConcurrentExecutor {
    constructor(concurrency) {
        this.done = 0;
        this.pool = [];
        this.working = 0;
        this.concurrency = concurrency;
        this.event = new EventEmitter();
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


// const promise = require('bluebird');
// const test = async () => {
//     const result = await promise.map([
//         1000,
//         1000,
//         1000,
//         5000,
//         1000
//     ], async (i) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(i)
//                 resolve(i)
//             }, i, i)
//         }).then(() => {
//             return i
//         })
//     }, { concurrency: 2 })
// }

// test()
