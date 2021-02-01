'use strict';
const fs = require('fs');

fs.open(__dirname + '/test.txt', 'r', '0666', function (err, fd) {
    console.log(fd);
});