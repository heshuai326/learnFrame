'use strict'

// 引入一些第三方包
const Koa = require('koa')
const path = require('path')
const wechat = require('./wechat/g')
const util = require('./libs/util')
const wechat_file = path.join(__dirname, './config/wechat.txt')

// 配置信息
var config  = {
    wechat : {
        appID:'wx1ba6b62b78195300',
        appSecret:'f21154e19d411e436200445e4da7e5bc',
        token:'heshuai',
        getAccessToken: function(){
            return util.readFileAsync(wechat_file)
        },
        saveAccessToken: function(data) {
           data = JSON.stringify(data)
            return util.writeFileAsync(wechat_file, data)
        }
    }
}

var app = new Koa()

app.use(wechat(config.wechat))
app.listen(80,function(){
    console.log("listening server 80")
})