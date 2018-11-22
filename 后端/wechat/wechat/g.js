const sha1 = require('sha1');
const getRawBody = require('raw-body')
const contentType = require('content-type')
const util = require('../libs/util')
const Wechat = require('./wechat')

module.exports = function(opts){
    let wechat = new Wechat(opts)

    // 返回一个async函数
    return async function(ctx, next){
        console.log(ctx.request.query)
        const token = opts.token
        const signature = ctx.request.query.signature
        const nonce = ctx.request.query.nonce
        const timestamp = ctx.request.query.timestamp
        const echostr = ctx.request.query.echostr
    
        // 字典序排序
        let str = [token, timestamp, nonce].sort().join('')
        // 加密
        let sha = sha1(str)

        if (ctx.request.method==='GET') {
            if (sha===signature) {
                ctx.response.body = echostr
            } else {
                ctx.response.body = 'wrong'
            }
        } else if (ctx.request.method==='POST') {
            if (sha!==signature) {
                ctx.response.body = 'wrong'
                return false
            } 

            let buf = ''
            ctx.req.setEncoding('utf8')
            ctx.req.on('data', (chunk) => {
                buf += chunk
            })
            ctx.req.on('end',async () => {
                let  content = await util.xmlToJson(buf)
                let message = util.formatMessage(content.xml)

                // if(message.msgType === 'event'){
                    // if(message.Event==='subscribe'){
                        let now = new Date().getTime()

                        ctx.response.status = 200
                        ctx.response.type = 'application/xml'
                        let body = 
                        `<xml><ToUserName>< ![CDATA[${message.FromUserName}] ]></ToUserName><FromUserName>< ![CDATA[${message.ToUserName}] ]></FromUserName><CreateTime>${now}</CreateTime> <MsgType>< ![CDATA[text] ]></MsgType> <Content>< ![CDATA[你好,欢迎关注 ]></Content> </xml>`                      
                        ctx.body = body                        
                        console.log(ctx.response)                        
                        return                     
                    // }
                // }
            })
        }

        
        
        
    }
}

