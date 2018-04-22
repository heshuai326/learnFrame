const request = require('superagent')

const base = 'https://api.weixin.qq.com/cgi-bin/'
const api = {
    accessToken: `${base}token?grant_type=client_credential`
}


function Wechat(opts){
    this.appID = opts.appID
    this.appSecret = opts.appSecret
    this.getAccessToken = opts.getAccessToken
    this.saveAccessToken = opts.saveAccessToken 

    try {
        this.getAccessToken().then((data)=>{
            if (this.isValidAccessToken(data)) {
                Promise.resolve(data)
            } else {
                return this.updateAccessToken().then((data)=>{
                    
                    this.access_token  = data.access_token
                    this.expires_in = data.expires_in
                    
                    this.saveAccessToken(data)
                })
                
            }
        })
        
    } catch (error) {
        return this.updateAccessToken()
    }

    this.isValidAccessToken = function(data) {
        data = JSON.parse(data)
        if (!data||!data.access_token||!data.expires_in) {
            return false
        }
    
        const access_token = data.access_token
        const expires_in  = data.expires_in
        const  now = (new Date().getTime()) 
    
        if (now < expires_in) {
            return true
        } else {
            return false
        }
    }


    // 更新票据
    this.updateAccessToken = async function() {
        const appID = this.appID
        const appSecret = this.appSecret
        let url = `${api.accessToken}&appid=${appID}&secret=${appSecret}`

        
        let  data = await request.get(url) 
        data = data.body
        let now = (new Date().getTime())

        let expires_in = now + (data.expires_in - 20) * 1000

        data.expires_in = expires_in
        return Promise.resolve(data)
    }

}

module.exports = Wechat