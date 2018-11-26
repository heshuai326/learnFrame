const path = require('path')

module.exports = {
    dev: {

        // 路径
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},

        // 开发服务器设置
        host: 'localhost', // 可以被覆盖
        port: '8080', // 可以被覆盖
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnError: true,
        poll: false,

        devtool: 'cheap-module-eval-souorce-map',

        cacheBusting: true,

        cssSourceMap: true
    },
    
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),

        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

        productionSourceMap: true,
        devtool: '#source-map',

        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        bundleAnalyzerReport: process.env.npm_config_report
    }
}