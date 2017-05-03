// for(var i = 1;i<=5;i++){
//     setTimeout(function() {
//         console.log(i);
// }, i*1000);
// }

/**
 * 每秒一次的频率输出5次6
 * setTimeout是传递一个函数，延迟一段时间把该哈数添加到队列当中
 * 在回调函数中没有找到i,向作用域查找,在全局作用域下找到了[关于var声明]
 * 在回调函数执行的时候,全局作用域下的i已经是6了[每次输出都是6]
 */

// 方法一:let 块级作用域
// for(let i = 1;i<=5;i++){
//     setTimeout(function() {
//         console.log(i);
// }, i*1000);
// }

// 方法二:闭包1 把每次循环的i当成参数传进去
// for (var i = 1; i <= 5; i++) {
//         setTimeout( function(i) {
//             console.log(i);
//         },i*1000,i); 
   
// }
// 方法三:闭包2 用变量就捕获每次循环的i
// for (var i = 1; i <= 5; i++) {
//     let j = i;
//         setTimeout( function(i) {
//             console.log(j);
//         },i*1000); 
   
// }

// 方法三:闭包3 循环结果每次传入自执行函数
for (var i = 1; i <= 5; i++) {
    (function(i){
         setTimeout( function() {
            console.log(i);
        },i*1000); 
    })(i)
       
   
}
