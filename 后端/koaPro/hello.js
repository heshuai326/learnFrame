const Koa = require('koa');//引入koa模块   
const app  = new Koa();//创建实例

// 输出路径的中间件
app.use(async(ctx,next)=>{
    console.log(`${ctx.request.url}`);
    next();
})

// 下一个中间件的使用
app.use(async(ctx,next)=>{
    console.log(`${ctx.request.method}`);
    ctx.response.type='text/html';
    ctx.response.body='<h1>hello koa</h1>';
})

app.listen(3000,function(){
    console.log('server is running 3000 port!');
})