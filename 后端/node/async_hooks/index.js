/**
 * aysnc_hooks: 提供一组API用来跟踪应用中的异步支援
 * 
 */


const fs = require('fs')
const aysncHooks = require('async_hooks')

const hook = aysncHooks.createHook({
  init(asyncId, type, triggerAsyncId, resouce) {
    fs.writeSync(1, `init: asyncId-${asyncId}, type-${type}, triggerAsyncId-${triggerAsyncId}\n`)
  },
  before(asyncId) {
    fs.writeSync(1, `before: asyncId-${asyncId}\n`)
  },
  after(asyncId) {
    fs.writeSync(1, `after: asyncId-${asyncId}\n`)
  },
  destroy(asyncId) {
    fs.writeSync(1, `destory: asyncId-${asyncId}\n`)
  }
})

hook.enable()
console.log('hello')
fs.readFile('./index.js', (err, res) => {
  fs.writeSync(1, `${res}\n`)
})
