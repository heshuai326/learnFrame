// const fs = require('fs')
// const zlib = require('zlib')

// const gzip = zlib.createGzip()

// const inFile = fs.createReadStream('./index.js')
// const out = fs.createWriteStream('index.zip')

// inFile.pipe(gzip).pipe(out)

const http = require('http')
const zlib = require('zlib')
const fs = require('fs')
const filePath = './index.html'

const server = http.createServer(function(req, res){
    const acceptEncoding = req.headers['accept-encoding']
    let gzip

    // 判断是否需要gzip压缩
    if(acceptEncoding.indexOf('gzip')!=-1) {
        gzip = zlib.createGzip()

        res.writeHead(200, {
            'Content-Encoding': 'gzip'
        })

        fs.createReadStream(filePath).pipe(gzip).pipe(res)
    } else {
        fs.createReadStream(filePath).pipe(res)
    }
})

server.listen(3000)