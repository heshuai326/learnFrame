const http = require('http')
const assert =  require('assert')
const log = require('./log')


// 反向代理中间件
module.exports = function reverseProxy(options) {
    // 基本的参数检查，如果参数格式不符合要去抛出异常
    assert(Array.isArray(options.servers), "options.servers 必须是数组")
    assert(options.servers.length > 0, "options.servers 的长度必须大于0")

    // 解析服务器地址，生成hostname 和 port
    const servers = options.servers.map(str => {
        const s = str.split(':')
        return { hostname: s[0], port: s[1] || "80"}
    })

    // 获取一个后端服务器，顺序循环
    let ti = 0
    function getTarget() {
        const t = servers[ti]
        ti++
        if (ti >= servers.length) {
            ti = 0
        }
        return t
    }

    // 生成监听 error 事件函数，出错时响应 500
    // 避免整个程序因为没有捕捉网络异常而奔溃，同事可以统一返回搓搓信息给客户端
    function bindError(req, res, id) {
        return function(err) {
            const msg = String(err.stack || err)
            log("[%s] 发生错误: %s", id, msg)
            if (!res.headersSent) {
                res.writeHead(500, {'content-type':'text/plain'})
            }
            res.end(msg)
        }
    }
    
    return function proxt(req, res) {
        // 生成代理请求信息
        const target = getTarget()
        const info = {
            target,
            method: req.method,
            path: req.url,
            headers: req.headers
        }

        const id = `${req.method} ${req.url} => ${target.hostname}:${target.port}`
        log("[%s] 代理请求", id)

        const req2 = http.request(info, res2 => {
            res2.on('error', bindError(req, res, id))
            log("[%s] 响应: %s", id, res2.statusCode)
            res.writeHead(res2.statusCode, res2.headers)
            res2.pipe(res)
        })
        req.pipe(req2)
        req2.on('error', bindError(req, res, id))
    }
}