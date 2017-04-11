
# 1、如何配置react的开发环境

一、在线CDN文件
```
<script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
<script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
<script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
```
二、npm bower下载
```
npm install --save-dev react
bower install --save react
```
三、核心文件
```
- react.min.js:react的核心库
- react-dom.min.js:提供与DOM相关的功能
- babel.min.js：将ES6代码转化为ES5代码，以及对JSX语法的支出
```

# 2、什么是JSX，JSX如何使用
### JSX是一个看起来很像XML的javascript语法扩展
优点：
- 执行更加快，在编译为javascript代码后进行了优化
- 类型安全，在编译过程中就发现错误
- 编写模板更加快速

使用:

### 三个参数：（1）需要渲染的DOM节点（2）需要插入的节点 （3）渲染成功的回调函数（一般不写）
```
ReactDOM.render(
    <div>
        <h1>百度</h1>
    </div>,
document.getElementById('container)
)
```
# 3、什么是组件，如何封装一个组件
### react中将一些重用的DOM进行封装，一个组件就是一个组件类
```
- 命名规则：（1）首字母大写（2）驼峰命名法
- 构建组件：React.createClass()
- 包含一个必须得render函数,返回DOM结构
```
```
<!--创建一个组件-->
var HelloMsg = React.createClass({
    render:function(){
        return <h1>hello Message！</h1>；
    }
})
<!--渲染到页面-->
React.render(
    <HelloMsg></HelloMsg>,
    document.getElementById('container);
)
```

# 4、props是什么？如何使用？属性中的children是做什么的？属性的默认设置？
### props是一个组件的属性，只能从父组件传递到子组件，一般不可改变
```
    var PropsTest = React.createClass({
        propTypes:{                         //属性类型设置
        age:React.PropTypes.number.isRequired
        },
        getDefaultProps:function () {       //   设置该组件属性的初始值
            return {
                name:'张三',
                age:"18"
            }
        },
        render:function () {
            return <h1>hello {this.props.name}!年龄是{this.props.age}班级:{this.props.className}</h1>
        }
    });
    var age = "22"，;
    ReactDOM.render(
            <PropsTest age={age}></PropsTest>,
            document.getElementById("container")
    )
```
# 5、state是什么？如何使用

# 6、组件的生命周期是什么，请以代码为例示意组件的生命周期

