function greeter(person:string){ //可以规定传入参数的数据类型，不是规定的类型会报错
    return 'Hello,'+person;
}

var user = 'Jane User';
// var user = [0,1,2];
document.body.innerHTML = greeter(user);
/**
 * 简介：是微软开发的一个语言，是javascript的超集，遵循ES6，面向对象开发
 * 安装：你npm全局安装
 * 编译：greenter.ts ->greenter.js  编译为js文件 tsc
 * 优势：
 * 支持ES6
 * 强大的IDE支持（类型检查【静态检查】，语法提示，重构）
 * Angular2的开发语言
 *  */