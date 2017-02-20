![webpack](http://webpack.github.io/assets/what-is-webpack.png)
###什么是webpack
webpack是近期最火的一款模块加载器打包工具，它能把各种资源，例如JS(含JSX)、coffee、样式(含less/sass)、图片等都作为模块来使用处理
**和Grunt一级Gulp相比有什么特征**
Grunt/Gulp是一种能够优化前端的开发流程的工具，而webpack是一种模块的解决方案，因为webpack的优点使得webpack可以代替，webpack处理更加快速直接
- Grunt和Gulp的工作方式：
在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，这个工具之后可以自动替你完整这些任务
- webpack的工作方式：
把你的项目当做一个整体，通过一个给定的主文件(index.js)，webpack将从这个文件开始找你的项目有的所有依赖文件，使用各种loaders处理各种文件，最后打包为一个浏览器可识别的javascript文件

###安装和使用
**安装**
```
//全局安装
npm install -g webpack
//安装到项目目录
npm install --save-dev webpack
```
**使用**
```
//全局安装
//      指定入口文件  最终使用文件
webpack entry.js bundle.js
```
