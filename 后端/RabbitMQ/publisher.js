const amqp = require('amqplib');

// 发布
(async () => {

  try {
    const conn = await amqp.connect('amqp://192.168.99.100')
    const channel = await conn.createChannel()
    const assert = await channel.assertQueue('q')
    const res = await channel.sendToQueue('q', Buffer.from('something to do'))
  } catch (error) {
    console.error(error)
  }
})()