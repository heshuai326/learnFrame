// 构建生产版本， package.json中的scripts中的build命令就是对该文件进行编译生成生产环境的代码
'use strict'
require('./check-versions')()// 调用检查版本的文件，加()代表直接调用该函数
process.env.NODE_ENV = 'production'

// 下面定义常量引入插件
const ora = require('ora') // 加载动画
const rm = require('rimraf') // 删除文件
const path = require('path')
const chalk = require('chalk') // 对文案输出一个彩色设置
const webpack = require('webpack')
const config = require('../config') // 默认读取下面的index.js文件
const webpackConfig = require('./webpack.prod.conf')

// 调用start的方法实现加载动画，优化用户体验
const  spinner = ora('building for production...')
spinner.start()

// 先删除dist文件再生成新文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if(err) throw err
    webpack(webpackConfig, (err, stats)=> {
        spinner.stop()
        if(err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false, // 如果使用ts-loader，设置为true构建的时候会报错
            chunks: false,
            chunkModules: false
        })+ '\n\n')

        if (stats.hasErrors()) {
            process.exit(1)
        }

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})

