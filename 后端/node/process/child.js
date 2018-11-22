process.on('message', function(m){
    console.log('；来自父进程的消息', m)
})

const exec = require('child_process').exec
exec('ls process.js', function(err, stdout, stderr){
    console.log(stdout)
    console.log(stderr)
    process.send({stdout:stdout, stderr: stderr })
})
