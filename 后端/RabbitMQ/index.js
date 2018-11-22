const amqp = require('amqplib');

(async ()=>{
  const conn = await amqp.connect('amqp://192.168.99.100')
  console.log(conn)
})()

