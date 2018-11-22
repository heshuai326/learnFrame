'use strict'

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const db = 'mongodb://localhost/app'
mongoose.Promise = require('bluebird')
mongoose.connect(db);

const model_path = path.join(__dirname,'/model')
// const walk = function(modelPath){
//     fs
//       .readFileSync(modelPath)
//       .forEach(function(file){
//           let filePath = path.join(module,'/'+file)
//           let stat = fs.statSync(filePath)

//           if(stat.isFile()){
//               if()
//           }
//       })
// }

const  Koa = require('koa');
const logger = require('koa-logger');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const app =new  Koa();

app.keys = ['imooc']
app.use(logger());//日志中间件
app.use(session(app));
app.use(bodyParser());//解析请求

const router = require('./config/routes')()
app
  .use(router.routes())
  .use(router.allowedMethods());

// 请求中间件
app.use(function *(next) {
        console.log(this.href)
        console.log(this.method)
        this.body = {
            success:true
        }
        yield next
});

app.listen(3000);
console.log('server is running port 3000');