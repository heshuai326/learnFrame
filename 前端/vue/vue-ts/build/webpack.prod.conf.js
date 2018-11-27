'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-weback-pugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = process.env.NODE_ENV === 'testing'
    ? require('../config/test.env')
    : require('../config/prod.env')

const webackConfig = merge(baseWebpackConfig, {
    module: {
        // 调用util.styleLoaders的方法
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap, // 开启调试的模式 默认为true
            extract: true,
            usePostCSS: true
        })
    },
    devtool: config.build.assetsRoot,
    output: {
        filename: utils.assetPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetPath('js[id].[chunkhash].js')
    },
    plugins: [
        
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: { // 压缩
                    warnings: false // 警告： true保留 false不保留
                }
            },
            sourceMap: config.build.productionSourceMap,
            parallel: true
        }),
        new ExtractTextPlugin({
            // 抽取文本 比如打包之后的index页面有style插入，就是这个插件抽取出来的，减少请求
            filename: utils.assetPath('css/[name].[contenthash].css'),
            allChunks: true
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: config.build.productionSourceMap
                ? { safe: true, map: { inline: false } }
                : { safe: true }
        }),
        new HtmlWebpackPlugin({// 优化css的插件
            filename: process.env.NODE_ENV === 'testing'
                ? 'index.html'
                : config.build.index,
            template: 'index.html',
            inject: true,
            minify: { // 压缩
                removeComments: true, // 删除注释
                collapseWhitespace: true, // 删除空格
                removeAttributeQuotes: true // 删除属性的引号
            },
            chunksSortMode: 'dependency' // 模块排序，按照我们需要的顺序排序
        }),

        new webpack.HashedModuleIdsPlugin(),
        // scope 
        new webpack.optimize.ModuleConcatenationPlugin(),
        // 分割 vendor js 到其他文件
        new webpack.optimize.CommonsChunkPlugin({ // 抽取公共的模块
            name: 'vendor',
            minChunks (module) {
                // 打包到所有引入的依赖
                return (
                    module.resource && 
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        // manifest verdor添加hash 当appbundle更新
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'app',
            async: 'vendor-async',
            children: true,
            minChunks: 3
        }),

        // 拷贝静态文件
        new CopyWebpackPlugin([ // 复制，比如打包完之后需要把打包的文件都复制到dist里面
            {
                from: path.resolve(__dirname, '../static'),
                to: config.build.assetsSubDirectory,
                ignore: ['.*']
            }
        ])
    ]
})


// 生产环境压缩
if (config.build.productionGzip) {
    const CommonsChunkPlugin  = require('compression-webpack-pugin')
}

module.exports = webackConfig