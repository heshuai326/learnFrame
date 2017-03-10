'use strict'

var Promise = require('bluebird')
var request = Promise.promisify('request');

var prefix = 'https://api.weixin.qq,com/cgi-bin'
var api = {
    access_token:prefix+'token?grant_type=client_credential'
}
function Wechat(opts){
  var that = this;
  this.appID  = opts.appID;
  this.getAccessToken = opts.getAccessToken;
  this.saveAccessToken = opts.saveAccessToken;

//   获取票据的犯法
  this.getAccessToken()
    .then(function(data){
        try{
            data = JSON.parse(data);
        }
        catch(e){
            return that.updateAccessToken(data);
        }
        if(that.isVaildAccessToken(data)){
            Promise.resolve(data)
        }else{
            return that.updateAccessToken()
        }
    })
    .then(function(data){
        that.access_token = data.access_token
        that.expires_in = data.expires_in

        that.saveAccessToken(data)
    })
}

//追加验证是不是有效地票据的方法
Wechat.prototype.isVaildAccessToken = function(data){
    if(!data||!data.access_token||!data.expires_in){
        return false
    }
    var access_token = data.access_token
    var expires_in = data.expires_in
    var now = (new Date().getTime())

    if(now<expires_in){
        return true
    }else{
        return false
    }
}

// 追加更新票据的方法
Wechat.prototype.updateAccessToken = function(){
    var appID = this.appID
    var appSecret = this.appSecret;
    var url = api.access_token+'appid'+appID+'&secret'+appSecret

return new Promise(function(resolve,reject){
     request({url:url,json:true}).then(function(response){
        var data  = response[1]
        var now = (new Date().getTime())
        var expires_in = now + (data.expires_in - 20)*1000
        
        data.expires_in = expires_in
        
        resolve();
    })
})
   
}
module.exports = Wechat