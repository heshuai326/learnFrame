# promise
> promise里面保存着某个未来才会结束的事件(通常是一个异步操作)，从语法上说，是一个对象可以获取异步操作的消息
特点
- 对象的状态不受外界影响，pending(进行中)、Resolved（已完成）、Rejected（已失败）
- 一旦改变状态就不会再变

```
var promise = new Promise(resolve,reject){
    //进行异步操作
    if(/*异步操作成功*/){
        resolve(value);//调用resolve，将异步操作返回的value，作为参数传递出去
    }else{
        reject(error);//调用reject，将异步操作返回的error，作为参数传递出去
    }
}
promise.then(function(value){
//接收resovle传递的参数，进行处理
},function(error){
    //接收reject传递的参数，进行处理，第二个参数为可选
})
//then方法的回调函数是异步操作，会添加到事件循环的任务队列中，主线程操作完毕后才执行
```