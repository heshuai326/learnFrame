var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('./cert/heshuai-key.pem'), // 私钥
    cert: fs.readFileSync('./cert/heshuai-cert.pem') // 证书
};

var server = https.createServer(options, function(req, res){
    res.end('hello cert');
});

server.listen(3000);