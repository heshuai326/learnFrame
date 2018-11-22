const path = require('path');
// 引用插件
const htmlWebpackPlugin = require('html-webpack-plugin');

// 打包成多页应用
module.exports = {
    entry: {
        mian:'./src/script/main.js',
        a :'./src/script/a.js',
        b :'./src/script/b.js',
        c :'./src/script/c.js'
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        filename:'js/[name].bundle.js',
        publicPath:'http://www.heshuai.info'  // CDN服务上
    },
    plugins:[
        //实例化插件
        new htmlWebpackPlugin({
            // 传入参数，一个对象
            template:'index.html',//模板文件
            filename:'index-[name].html',//文件名
            inject:'head',//文件位置
            title:'webpack is good',
            date :new Date(),
            // 压缩
            minify:{
                removeComments:true
            }
        }),
        new htmlWebpackPlugin({

            template:'index.html',
            filename:'a.html',
            inject:'head',
            title:'webpack is a',
        }),
        new htmlWebpackPlugin({
            template:'index.html',
            filename:'b.html',
            title:'webpack is b'

        }),
        new htmlWebpackPlugin({
            template:'index.html',
            filename:'c.html',
            inject:'head',
            title:'webpack is c'
        })

    ]
}