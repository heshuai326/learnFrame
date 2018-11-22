// 文件读取测试
const fs = require('mz/fs');
const assert = require('assert');

const add = require('./add.js');
const db = require('./db.js');

/**
 * 测试脚本：一个测试文件
 * 测试套件：describe 一个测试脚本中应该报货一个或多个测试套件
 * 测试用例：表示一个单元测试，是测试的最小单位，也是一个函数
 */

describe('加法函数的测试',function(){
    it('1加1应该等于2',function(){
     assert.deepEqual(add(1,1),2);
    })
})

describe('测试异步文件的读取',()=>{
    it('读取应该成功',function(done){
        fs.readFile('../ejs.js',function(err,data){
            if(err) throw err;
            done();
        })
    })
})

describe('测试异步文件的读取',()=>{
    it('读取应该会成功',async()=>{
        let data = await fs.readFile('../ejs.js');
    })
})

describe('测试数据库的连接',()=>{
    it('连接应该会成功',async()=>{
        let result = await db();
        console.log(result);
    })
})