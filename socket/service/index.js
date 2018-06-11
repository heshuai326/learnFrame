var path = require("path");
var express = require("express");
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(socket){
  setInterval(function(){
    io.emit('ticker',  JSON.stringify({"id":"5b1a2d32c73a516bced4c0c6","exchange":"Bittrex","currencyPair":"BTC/USDT","open":7638.81000000,"close":7638.81000000,"lowest":7638.81000000,"highest":7638.81000000,"timestamp":1528442162541,"intervalDate":1528442100000}));      
  }, 1000)
});





server.listen(3000, "0.0.0.0", function (err) {
  console.log("Listening at http://localhost:" + 3000);
})
