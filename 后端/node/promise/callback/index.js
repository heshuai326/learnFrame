const fs = require('fs')

// callback 兼容 promise
function promisify(orginFn) {
    return function(...args) {
        return new Promise((reject, resolve) => {
            const cb = (err, data) => err ? reject(err):resolve(data)
            orginFn.call(this, ...args, cb)
        })
    }  
}
  

  let readFilePromisify = promisify(fs.readFile);

readFilePromisify('./index.js', 'utf8')
.then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.error(err);
});



// 第三方库
// node util库中已经实现
// const { promisify } = require('util')
// let readFilePromisify = promisify(fs.readFile)

// readFilePromisify('./index.js', 'utf8')
// .then( (data) => {
//     console.log(data);
// }).catch( (err) => {
//     console.error(err);
// });

// bluebird
// import { promisify } from 'bluebird'
// let readFilePromisify = promisify(fa.readFile)