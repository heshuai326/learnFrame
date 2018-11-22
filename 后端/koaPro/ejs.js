const Koa = require('koa');
const app = new Koa();

const path = require('path');
const render = require('koa-ejs');
const router =  require('koa-router')();
const serve = require('./common/static');

app.use(serve('/public/',__dirname + '/public'));//使用托管静态文件的中间件

// 模板引擎的配置
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',//必须要配置宿主页面
  viewExt: 'html',
  cache: false,
  debug: true
});

app.use(async(ctx,next)=>{
    console.log(`${ctx.request.url}`);
   await next(); //需要下一个中间件去处理必须需要写
})

router.get('/',async(ctx,next)=>{ 
   await ctx.render('index'); //render方法在ctx上下文对象上
})

router.get('/users',async(ctx,next)=>{
   await ctx.render('users');
})


app.use(router.routes());

app.listen(3000,function(){
    console.log('server is running 3000!')
})

module.exports = app;
