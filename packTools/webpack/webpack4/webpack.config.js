var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry:'./app.js',
    output:{
        path:'./dist',
        filename:'./js/[name].bundle.js'
    },
     module:{
         loaders:[
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
    //  postcss:[
    //      require('autoprefixer')({
            
    //      })//传入参数
    //  ],
    plugins:[
        new htmlWebpackPlugin({
            filename:'index-[name].html',
            template:'index.html',
            inject:'body',
            title:'this is index',
        })
    ],
    
}
