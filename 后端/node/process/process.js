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


/**
 * child_process(子进程)
 * spawn: 用于异步的衍生子进程，且不会阻塞时间循环
 * exec: 衍生一个shell并在shell上运行命令
 * fork: 衍生一个新的node进程，并通过IPC通讯通道来调用指定得模块，该通道允许父进程与子进程之间相互发送信息
 */

const util = require('util');
// const{ spawn, exec }= require('child_process');


// exec
// exec('ls -al', function(err, stdout, stderr){
//     console.log(`exec数据${stdout}`);
//     console.log(stderr)
// })

// exec('cat process.js', function(err, stdout, stderr){
//     console.log(stdout)
//     console.log(stderr)
// })


// spawn
// const  ls = spawn('ls')
// ls.stdout.on('data', (data) => {
//     console.log(`spawn数据${data}`)
// })


// promisify: 可以将一般回调转换为promise

const exec = util.promisify(require('child_process').exec);

async function run() {
    const { stdout, stderr } = await exec('node --version');
    console.log('stdout', stdout);
}

run()