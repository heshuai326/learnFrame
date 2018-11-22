const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry:'./src/script/main.js',//入口文件
  entry:['./src/script/main.js','./src/script/a.js'],
  // entry: {
  //   main: './src/script/main.js',
  //   b: './src/script/a.js'
  // },
  output:{
      path: path.resolve(__dirname, './dist/'),//输出文件路径
      filename: 'bundle.[name].js'//输出文件
  },
  //浏览器检测代码的修改，并自动刷新修改后的结果 
  devServer:{
    contentBase:'index.html',//本地服务器所加载的页面所在的mul
    colors:true,//终端输出结果为彩色
    hostoryApiFallback:true,//不跳转
    inline:true//实时刷新
  },
  plugins:[
    // 插件的初始化
    new htmlWebpackPlugin({
      template: 'index.html',
      inject: true,
    })
  ]
}