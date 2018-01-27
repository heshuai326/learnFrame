const http = require('http')
const log = require('./log')
const reverseProxy = require('./proxy')
const { expect } = require('chai')
const request = require('supertest')


// 创建反向代理服务器
function startProxyServer() {
    return new Promise((resolve, reject) => {
        const  server = http.createServer(
            reverseProxy({
                servers:["127.0.0.1:3001", "127.0.0.1:3002", "127.0.0.1:3003"]
            })
        )
        log("反向代理服务器已经启动")
        resolve(server)
    })
}

// 创建演示服务器
function startExampleServer(port) {
    return new Promise((resolve, reject) => {
        const server = http.createServer(function(res, res) {
            const chunks = []
            req.on('data', chunk => chunks.push(chunk))
            req.on('end', () => {
                const buf = Buffer.concat(chunks)
                res.end(`${port}:${req.method}${req.url}${buf.toString()}`.trim())
            })
        })
        server.listen(port, () => {
            log("服务器已启动: %s", port)
            resolve(server)
        })
        server.on("error", reject)
    })
}

describe('测试反向代理', function() {
    let server
    let exampleServers = []
  
    // 测试开始前先启动服务器
    before(async function() {
        exampleServers.push(await startExampleServer(3001))
        exampleServers.push(await startExampleServer(3002))
        exampleServers.push(await startExampleServer(3003))
        server = await startProxyServer()                
    })

    // 测试结束后关闭服务器
    after(async function() {
        for(const server of exampleServers) {
            server.close()
        }
    })

    it('顺序循环返回目标地址', async function() {
        await request(server)
            .get('/hello')
            .expect(200)
            .expect(`3001: GET /hello`)

        await request(server)
            .get('/hello')
            .expect(200)
            .expect(`3002: GET /hello`)

        await request(server)
            .get('/hello')
            .expect(200)
            .expect(`3003: GET /hello`)

        await request(server)
            .get('/hello')
            .expect(200)
            .expect(`3001: HET /hellp`)
    })

    it('支持 POST 请求', async function() {
        await request(server)
            .post('/xyz')
            .send({
                a: 123,
                b:456
            })
            .expect(200)
            .expect(`3002: POST /xyz {"a":123, "b":456}`)
    })
})