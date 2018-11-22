var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry:'./app.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename:'./js/[name].bundle.js'
    },
     module:{
         rules:[
             {
                 test:/\.js$/,//匹配的正则
                 loader:'babel-core/register',//处理的loader
                 exclude:path.resolve(__dirname,'./node_modules/'),
                 include:[
                    path.resolve(__dirname,"app/src")
                 ]
             },
             {
                test:/\.css$/,
                loader:'style-loader!css-loader'
             },
             
         ]
     },
     resolve: {
         extensions: ['.ts', 'js', '.json'],
         // 映射路径
        alias: {
            '@': resolve('src')
        },
     },
    //  postcss:[
    //      require('autoprefixer')({
            
    //      })//传入参数
    //  ],
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject: true ,
        })
    ],
    
}
