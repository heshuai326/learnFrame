const Koa = require('Koa');
const path = require('path');
const app = new Koa();
const router = require('koa-router')();
const render = require('koa-ejs');

render(app,{
    	root: path.join(__dirname, 'views'),
        layout: 'layouts',
    	viewExt: 'html',
   	    cache: false,
    	debug: true
	});


app.use(async(ctx,next)=>{
    console.log(`${ctx.request.url}`);
    await next();
})

router.get('/',async(ctx,next)=>{
    console.log('------请求处理-------')
    await ctx.render('index');
})

router.get('/users',async(ctx,next)=>{
    await ctx.render('users');
})

app.use(router.routes());//路由中间件

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});