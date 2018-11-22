/**
 * 闭包:函数体内部的变量都可以保存在函数作用域中
 * 词法作用域:函数的执行依赖作用域,作用域由函数定义的时候决定,而不是由函数执行的时候决定
 * 作用域链:内部的函数可以访问外部函数作用域内的变量;函数内套一个函数是他的一种表现 
 *         作用域内的变量不会被垃圾回收机制回收
 *         可以突破作用域链 `
 * 
 */
// 1.函数作为返回值

// function fn(){
//     var max = 10;
//     return function bar(x){
//         if(x>max){
//             console.log(x);
//         }
//     }
// }

// var f1 = fn();
// f1(15);


//2. 函数作为参数被传递
// var max = 10;
//  function fn(x){
//     if(x>max){
//         console.log(x);
//     }
// }

// (function(f){
//     var x = 100;
//     f(x);
// })(fn)

//3.封装
function count(init){
    var x = init||0;
    return{
        add:function(){
            x+=1;
            return x;
        }
    }
}

var fn =count();
console.log(fn.add()); //1
console.log(fn.add()); //2
console.log(fn.add()); //3
// 说明x保存在count函数的作用域中没有被销毁,一直添加

// 4.常见的还有保存循环的值
