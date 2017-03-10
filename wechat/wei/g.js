'use strict'
var sha1 = require('sha1');
var getRawBody = require('rawbody')
var Wechat = require('./weichat')
var util = require('./util')

var Promise = require('bluebird')
var request = Promise.promisify('request');



// 定义一个中间件
module.exports = function(opts){
    // 实例化构造函数
    var wechat = new wechat(opts)

    return function *(next){
     console.log(this.query);
    //  验证开发者的身份
     var token = opts.token;
     var signature = this.query.signature;
     var nonce =  this.query.nonce;
     var timestamp = this.query.timestamp;
     var ecostr = this.query.ecostr;
     var str = [token,timestamp,nonce].sort().join('');
     var sha = sha1(str);

     if(this.method==='GET'){
            if(sha===signature){
         this.body  = ecostr+'';
     }else{
         this.body = 'wrong';
     }
 }else if(this.method==='post'){
    //  拿到数据包
     if(sha===signature){
         this.body  = ecostr+'';
     }else{
         this.body = 'wrong';
         return false
     }
     var data = yield getRawBody(this.req,{
         length:this.length,
         limit:'1MB',
         encoding:this.charset
     })
     
     var content = yield util.parseXMLAsync(data)
     var message = util.formatMessage(content.xml)
     
  }   
 }
}
