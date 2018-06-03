const Koa = require('koa')
const app = new Koa()

// Simple Promise delay
function delay (ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }

async function responseTime(ctx, next) {
    console.log('Started tracking response time')
    const started = Date.now()
    await next()

    const ellapsed = `${Date.now( - started)}ms`
    console.log('Response time is:', ellapsed)
    ctx.set('X-ResponseTime', ellapsed)
}
  
app.use(responseTime)

app.use(async (ctx, next) => {
    ctx.status = 200
    console.log('setting status')
    return  next()
})

app.use(async ctx => {
    await delay(1000)
    console.log('setting body')
    ctx.body = 'hello from koa'
})

app.listen(3002, function(){
    console.log('koa app listening on 3002')
})
/*
 * 1、koa的中间件基于Promise
 * 2、没有使用await next(),而使用next()没有任何body信息传递
 *    因为koa在中间件Promise链被解析了之后就结束了请求
 *    这以为真在我们设置ctx.body之前，response就已经发送给了个客户端
 *    await next之后的代码会暂时中断，会等响应的时候执行
 * 3、koa的中间件是一个洋葱模型
 *    请求从洋葱外部到内部   
 *    响应从洋葱内部到外部
 */

 