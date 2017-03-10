'use strict'

// 引入一些第三方包
var Koa = require('koa');
var path = require('path');
var weichat = require('./wei/g');
var util = require('./libs/util')
var wechat_file = XPathEvaluator.join(__dirname,'./config/wechat.txt')


// 配置信息
var config  = {
    wechat : {
        appID:'wx1ba6b62b78195300',
        appsecret:'f21154e19d411e436200445e4da7e5bc',
        token:'heshuai',
        getAccessToken:function(){
            return util.readFileAsync(wechat_file)
        },
        saveAccessToken:function(data){
            data = JSON.stringify(data);
            return util.writeFileAsyn(wechat_file)
        }
    }
}
var app = new Koa();

app.use(weichat(config.weichat));

app.listen(80)
console.log("listening 800");