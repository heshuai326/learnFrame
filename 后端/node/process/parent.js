const child_process = require('child_process')
const child = child_process.fork('./child.js')

child.on('message', function(m){
    console.log('来自子进程的消息', m)
})

child.send({ from: '父进程消息'})