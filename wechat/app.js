'use strict'

// 引入一些第三方包
var Koa = require('koa');
var sha1 = require('sha1');

// 配置信息
var config  = {
    wechat : {
        appID:'wx1ba6b62b78195300',
        appsecret:'f21154e19d411e436200445e4da7e5bc',
        token:'heshuai'
    }
}
var app = new Koa();

app.use(function *(next){
    //  console.log(this.query);
     var token = config.wechat.token;
     var signature = this.query.signature;
     var nonce =  this.query.nonce;
     var timestamp = this.query.timestamp;
     var ecostr = this.query.ecostr;
     var str = [token,timestamp,nonce].sort().join('');
     var sha = sha1(str);

     if(sha===signature){
         this.body  = ecostr+'';
     }else{
         this.body = 'wrong';
     }
});

app.listen(1200)
console.log("listening 1200");