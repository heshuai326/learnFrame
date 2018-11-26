'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoderConfig = require('./vue-loader.conf')

function resolve(dir) {
    // 拼接初绝对路径
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    // 配置入口，默认为单页应用所以只有一个入口
    entry: {
        app: './src/main.ts' // 打包入口
    },
    // 配置出口，默认是/dist作为目标文件夹的路径
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js', // 文件名
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath // 公共存放路径
    },
    resolve: {
        // 自动扩展后缀，比如一个js文件，则引用时书写可不要写.js
        extensions: ['.js', 'vue', '.json', '.ts', '.tsx'],
        alias: {
            // 创建路径的别名
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            // js文件需要通过babel-loader进行编译成es5文件以及压缩等操作
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node-modules/webpack-dev-server/client')]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            // 使用vue-loader将vue文件转化为js的模块
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: Object.assign(vueLoderConfig, {
                    loaders: {
                        ts: 'ts-loader',
                        tsx: 'babel-loader!ts-loader'
                    }
                })
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    {
                        loader: 'ts-loader',
                        options: { appendTsxSuffixTo: [/\.vue$/] }
                    }
                ]
            },
            // 图像 字体都使用url-loader进行处理，超过10000会编译成base64
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetPath('media/[name].[hash:7].[ext]')
                }
            },
              {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    // 一下选项Node.js全部变量模块，这里主要时防止webpack注入一些Node.js的东西到vue中
    node: {
        setTmmediate: false,

        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}