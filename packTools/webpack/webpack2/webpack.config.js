module.exports = {
  //entry:'./src/script/main.js',//入口文件
  entry:['./src/script/main.js','./src/script/a.js'],
  output:{
      path:'./dist/js/',//输出文件路径
      filename:'bundle.js'//输出文件名
  }
}