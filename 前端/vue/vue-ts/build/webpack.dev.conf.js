'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
// 通过webpack-merge实现webpack.dev.conf.js对webpack.base.config.js的继承
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder') // 查看空闲端口位置，默认情况下搜索8000这个端口

const HOST = process.env.HOST // process为node的一个全局对象获取当前程序的环境变量，即host
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    // 规则时工具util中处理处理的styleLoaders，生成了css less postcss等规则
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool, //增强调试

  // 此处的配置都是在config的index.js中设定好
  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning', // 控制台显示的选项有none error waring 或者 info
    // 当使用HTML5 HiustoryAPI时，任意的404响应都可能需要被替换为index.html
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true, // 热加载
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true, // 压缩
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser, // 调试时自动打开浏览器
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false, // warning和error都要显示
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable, // 接口代理
    quiet: true, // 控制台是否禁止打印警告和错误，若用FriendlyErrorsPlugin此处为true
    watchOptions: {
      poll: config.dev.poll, // 文件系统检测改动
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(), // 模块热替换车间，修改模块时不需要刷新页面
    new webpack.NamedModulesPlugin(), // 显示文件的正确名字
    new webpack.NoEmitOnErrorsPlugin(),// 当webpack编译错误的时候，来中断打包进程，防止错误打包到文件中
    // https://github.com/ampedandwired/html-webpack-plugin
    // 该插件可自动生成一个html5文件或使用模板文件将编译好的代码注入进去
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([ // 复制插件
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*'] // 忽略.*的文件
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  // 查找端口号
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // 端口专用时就需要重新设置端口
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
