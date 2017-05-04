const Koa = require('koa');//引用模块
const app = new Koa(); //实例化koa对象

// 对于任何请求都会调用该异步函数处理，输出请求路径中间件
app.use(async(ctx,next)=>{
    console.log(`${ctx.request.url}`);
    await next();
})

app.use(async(ctx,next)=>{
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello ，koa2</h1>';
})
app.listen(3000, function() {
    console.log('App listening on port 3000!');
});