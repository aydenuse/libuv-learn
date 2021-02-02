const fs = require('fs')
const app = require('express')();

fs.open('test.txt', 'a', '0666', (err, fd) => {
    console.log(`当前打开的文件描述符为 ${fd}，打开文件描述符：共${fs.readdirSync('/dev/fd').length} 个`); // 32 个
})

app.get('/', function (req, res) {
    fs.open('test.txt', 'a', '0666', (err, fd) => {
        console.log(`当前打开的文件描述符为 ${fd}，打开文件描述符：共${fs.readdirSync('/dev/fd').length} 个`);
    })
})

const server = app.listen(8081, () => {
    console.log(`listening in ${server.address().port}`)
})
