const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

// 导出文件的位置根据环境判断开发和生产环境
// 为config文件中index.js文件中定义的build.assetsSubDirectory或dev.assetsSubDirectory
exports.assetPath = function(_path) {
    const assetsSubDirrctory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory
    // Node.js path模块提供了一些用于处理文件路径的小工具
    return path.posix.join(assetsSubDirrctory,_path)
}

exports.cssLoaders = function (options) {
    options = options || {}

    // 使用了css-loader和postcssLoader，通过options.usePostCSS属性来判断是否使用postcssLoader中压缩等方法
    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }


    // 导入字符串需要用扩展文本插件
    function generateLoaders(loader, loaderOptions) {
        const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

        if(loader){
            loaders.push({
                loader: loader+'-loader',
                // es6浅复制，后两者合并后复制完成赋值
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }

        if (options.extract) {
            // ExtractTextPlugin可提取出文本，代表首先使用上面的loader，当未能正确引入时使用vue-style-loader
            return ExtractTextPlugin.extract({
                user: loaders,
                fallback: 'vue-style-loader',
            })
        } else {
            // 返回vue-style-loader连接loaders的最终值
            return ['vue-style-loader'].concat(loaders)
        }
    }

    return {
        css: generateLoaders(),
        postcss: generateLoaders(),// 需要css-loader和vue-style-loader
        less: generateLoaders('less'), // css-loader和postcssLoader
        sass: generateLoaders('sass', { indentedSyntax: true}), // 需要sass-loader和vue-style-loader
    }
}


exports.styleLoaders = function(options) {
    const output = []
    const loaders = exports.cssLoaders(options)
    // 将各种css less sass等综合再一起得出结果输出output
    for (const extension in loaders) {
        const loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }

    return output
}

exports.createNotifierCallback = () => {
    // 发送跨平台通知系统
    const notifier = require('node-notifier')

    return (severity, errors) => {
        if (severity !== 'error') return
        
        // 当报错时输出错误信息的标题，错误信息详情，副标题以及图标
        const error = errors[0]
        const filename = error.file && error.file.splite('!').pop()

        notifier.notify({
            title: packageConfig.name,
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, 'logo.png')
        })
    }
}