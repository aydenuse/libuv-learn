'use strict';

const fs = require('fs');

fs.open('test.txt', 'r', '0666', function (err, fd) {
    console.log(fd)
    fs.readdir('/dev/fd', function (err, list) {
        if (err) throw err;
        console.log(1, fs.readdirSync('/dev/fd').length);
        fs.readdir('/dev/fd', function (err, list) {
            if (err) throw err;
            console.log(1, fs.readdirSync('/dev/fd').length);
        });
    });
    console.log(2, fs.readdirSync('/dev/fd').length);
    console.log(3, fs.readdirSync('/dev/fd').length);

});

