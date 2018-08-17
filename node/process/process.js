/**
 * prosess 对象是一个全局变量，它提供当前node.js进程的有关信息，以及控制当前Node.js进程。因为是全局变量，所以无需使用require()
 * process.cwd()方法返回node.js进程当前工作目录，__dirname返回当前文件的根目录
 * 
 * process.env属性返回一个而包含用户环境信息的对象
 * 1.查看环境变量NODE_ENV echo $NODE_ENV
 * 2.添加环境变量 export NODE_ENV=production
 * 3.环境变量追加值 export PATH = $PATH:
 * 4.删除环境变量 unset NODE_ENV
 * 5.显示所有的环境变量 env
 */
// console.error(process.cwd(), __dirname)

const exec = require('child_process').exec
exec('ls -al', function(err, stdout, stderr){
    console.log(stdout)
    console.log(stderr)
})

exec('ls process.js', function(err, stdout, stderr){
    console.log(stdout)
    console.log(stderr)
})
