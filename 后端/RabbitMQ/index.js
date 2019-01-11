const q = 'tasks';

const open  = require('amqplib').connect('amqp://192.168.99.100');

// 发布
open.then(function(conn){
  return conn.createChannel();
}).then(function(ch){
  return ch.assertQueue(q).then(function(ok){
    return ch.sendToQueue(q, Buffer.from('something to do'));
  })
}).catch(console.warn);

// 消费（订阅）
open.then(function(conn){
  return conn.createChannel();
}).then(function(ch){
  return ch.assertQueue(q).then(function(ok){
    return ch.consume(q, function(msg){
      if(msg !== null) {
        console.log(msg.content.toString());
        ch.ack(msg);
      }
    })
  })
}).catch(console.warn);