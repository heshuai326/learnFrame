## Shell VS Nodejs
Shell脚本是用各类的命令放在一个文件中，方便一次性执行；
Shell脚本严格的语法比较难，开发人员借助python Ruby等脚本语言来实现，NodeJS的出现又会给开发人员带来另外一种极其简单的体验；
### shell脚本实例
shell前端页面的打包脚本
```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm install
npm run build
cd dist
rm -rf dist.tar.gz
tar -zcvf dist.tar.gz *

```
### 编写一个静态网站生成器
#### 初始化项目
```
mkdir blog
cd blog 
npm init
```
#### 编码
1. 在项目目下创建bin文件夹 blog.js
```
// 指定当前文件使用哪个解析器来执行
// 如果没有指定解析器，则默认是使用bash来执行
#!/usr/bin/env node 

const program = require('commander')

program.version('0.0.1')

// help命令
program
  .command('help')  // 表示当前是什么命令
  .description('显示使用帮助') // 为当前命令的简单描述，在查看命令帮助时会显示
  .action(function() { // 为解析到当前命令时执行的回调函数
      program.outputHelp()
  })

  // create命令
program
  .command('create [dir]')
  .description('创建一个空的博客')
  .action(function(dir) {
    console.log(`crrate %s`, dir)
  })

// preview命令
program
  .command('preview [dir]')
  .description('实时预览')
  .action(require('../lib/cmd_preview'))

// build命令
program
  .command('build [dir]')
  .description('生成整站静态HTML')
  .option('-o, --output <dir>', '生成的静态HTMl存放目录')
  .action(function(){
    console.log('create %s, output %s', dir, options.output)
  })
program.parse(process.argv)
```
#### 链接生效
bin属性指定当前模块需要链接的命令, 链接完之后会把整个项目拷贝到全局执行环境下
```
npm link
```
#### 编写服务部分
解析markdown文件成html渲染页面
```
const express = require('express')
const serveStatic = require('serve-static')
const path =  require('path')
const fs = require('fs')
const MarkDownIt = require('markdown-it')

const md = new MarkDownIt({
    html: true,
    langPrefix: 'code-',
})

module.exports = function(dir) {
    dir = dir || '.'

    const app = express()
    const router = express.Router()
    app.use('/assets', serveStatic(path.resolve(dir, 'assets')))

    app.use(router)

    // 渲染文章
    router.get('/posts/*', function(req, res, next) {
        const name = stripExtname(req.params[0])
        console.log(name)
        const file = path.resolve(dir, '_posts', `${name}.md`)
        console.log(file)
        fs.readFile(file, function(err, content) {
            const html = markdownToHTML(content.toString())
            res.set('Content-Type', 'text/html')
            res.end(html)
        })
    })

    // 渲染列表
    router.get('/', function(req, res, next) {
        res.set('Content-Type', 'text/plain')
        res.end('文章列表')
    })

    app.listen(3000, function(){
        console.log('serve is run http://127.0.0.1:3000')
    })
}


// 去掉文件名中的扩展名
function stripExtname (name) {
    const i = 0 - path.extname(name).length
    if (i === 0) {
        i = name.length
    }
    return name.slice(0, i)
}

function markdownToHTML (content ){
    return md.render(content || '')
}
```

### 使用Nodejs编写shell优势
1. 采用v8引擎，轻量级模块，较好跨平台性，较低层的系统操作，在系统监控运维等方面具有明显优势
2. 采用事件驱动非阻塞IO模型，无线程上下文切换和锁操作，可利用多核CPU计算，性能较高
3. 开放源代码，社区活跃，模块丰富，底层的扩展实现也比较方便
4. 跨平台