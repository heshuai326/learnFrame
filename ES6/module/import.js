/**
 * commonjs规范 (服务端)
 * AMD         （浏览器）
 */ 
// const { stat, exists, readFile } = require('fs')

// ES6 在编译时就完成模块编译，效率要比Common模块高
// const {stat, exists, readFile } from 'fs'


//使用按时关键字将输入的变量重命名
import { lastName as surname}  from './export'