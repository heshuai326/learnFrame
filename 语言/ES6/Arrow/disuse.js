// 定义一个对象
// const calculator = {
//      arr:[1,2,3],
//      sum :(()=>{
//         //  箭头函数把函数上下文绑定到全局宿主对象，全局对象并未定义
//        console.log(this.arr);//undefined
//          return this.arr.reduce((result,index)=>result+index);  //reduce未定义
//      })()
// }

// 解决办法:函数表达式或方法简写，这样能确保this是在运行时由她的上下文决定的
const calculator = {
   arr:[1,2,3],
   sum(){
       //对象里面可以不写键值对
       console.log(this.arr);//普通函数，执行this指向原先对象

   }
}
calculator.sum()

// 在对象原型上添加方法，箭头函数的this依然指向全局对象