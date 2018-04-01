var path = require("path");
var express = require("express");
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(socket){
  socket.on('sendMsg', (data) => {   
    io.emit('receiveMsg', {msg:`服务端收到你的消息:${data.msg}`});  
})
});





server.listen(3000, "0.0.0.0", function (err) {
  console.log("Listening at http://localhost:" + 3000);
})
