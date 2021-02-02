// class EventLoop {
//     constructor() {
//         this.activeHandle = 1;
//         this.activeReqs = 0;
//         this.stopFlag = false;
//         // 定时器最小二叉堆
//         this.timeHeap = null;
//     }

//     run() {
//         console.log((this.activeHandle || this.activeReqs) && this.stopFlag === false)
//         while ((this.activeHandle || this.activeReqs) && this.stopFlag === false) {
//             console.log('loop');
//         }
//     }

// }

// const uv =  new EventLoop();
// uv.run()





'use strict';

const fs = require('fs');

new Promise((resolve, reject) => {
    fs.open('1.js', 'r', '0666', (err, fd) => {
        if (!err) {
            resolve(fd)
        } else {
            console.log(err)
        }
    })
}).then((fd) => {
    console.log(fd);
})






















