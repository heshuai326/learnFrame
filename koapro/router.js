const Koa = require('koa');
const app = new Koa();

const router =  require('koa-router')(); //引入路由模块，注意这是一个函数的调用

router.get('/',async(ctx,next)=>{
    ctx.response.type ='text/html';
    ctx.response.body = '<h1>koa 这是首页</h1>';
})

router.get('/users',async(ctx,next)=>{
    console.log(ctx.params);
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>koa 这是用户页面</h1>'
})


app.use(router.routes());//使用路由中间件

app.listen(3000,function(){
    console.log('server is running 3000!')
})