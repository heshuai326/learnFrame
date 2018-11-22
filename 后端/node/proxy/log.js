const util = require('util')

// 打印日志
module.exports = function log(...args) {
    const time = new Date().toDateString()
    console.log(time, util.format(...args))
}