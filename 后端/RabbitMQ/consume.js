const amqp = require('amqplib');

// 订阅（ 消费）
(async () => {
  try {
    const conn = await amqp.connect('amqp://192.168.99.100')
    const channel = await conn.createChannel()
    const assert = await channel.assertQueue('q')
    channel.consume('q', function(msg) {
      console.log(msg.content.toString())
      channel.ack(msg)// 确认消费
    })
  } catch (error) {
    console.error(error)
  }

})()