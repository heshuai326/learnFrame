
//   在箭头函数出现之前，每个定义的函数都有自己this值
  
 

// 解决办法一：把this的值赋给变量，然后将该变量放到闭包中来解决
// function Person(){
//     let that = this;
//       that.age = 1;
//     setTimeout(function(){
//         // 回调函数that变量就指向了期望对象
//         console.log(that.age);
//     },1000);
// }()

// 解决办法二：使用bind函数，把期望的this值传递给子函数
// (function Person(){
//    this.age = 1;
//    setTimeout((function(){ 
//     console.log(this.age); //给回调函数绑定this，this依然指向父函数
//    }).bind(this),1000);
// })()

// 用call和apply(数组)也可以改变指向，和bind的效果是一样的
// (function Person(){
//     this.age = 1;
//    setTimeout(function(){
//        Person.call(this,null);
//        console.log(this.age);
//    },1000)
// })()

//  解决办法三：箭头函数，箭头函数会捕获其所在的上下文的this值，作为自己的this值
(function Person(){
    this.age = 1;
   setTimeout(()=>{
     console.log(this.age); //普通函数执行时this应该指向全局对象
   },1000)
})()



/**
 * 注意点：
 * 1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象（this的指向不会改变，指向固定化）
 *   箭头函数根本没有自己的this，内部的this就是外层代码块的this
 * 2）不可以当做构造函数，也就是说，不可以使用new关键字创建实例，否则会抛出错误
 * 3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用rest参数代替
 * 4）不可以使用yield命令，箭头函数不能用作generator函数
 */
