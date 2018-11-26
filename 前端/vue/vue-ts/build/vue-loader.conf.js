'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap

// 处理项目中的css文件，生产环境和测试环境默认时打开souceMap，而extract中的提取样式到单独的文件只有再生产环境中才需要
module.exports = {
    loaders: utils.cssLoaders({
        soueceMap: sourceMapEnabled,
        extract: isProduction
    }),
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting,
    // 在模板编译过程中，编译器可以将某些属性，如src路径，转换为require调用，以便目标资源可以由webpack处理
    transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    } 
}