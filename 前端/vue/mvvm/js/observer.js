/**
 *  实现一个数据监听器Observe人，能够对数据对象的所有属性进行监听，
 *  如有变动可那倒最新值并通知订阅者
 * 
 * 可以Obeject.defineProperty()来监听属性变动
 * 需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter
 * 给这个对象的某个值复制，就会触发setter，那么就能监听到了数据变化
 */

 const data = { name: 'kindeng'}
 observe(data)

//  data.name = 'dm'

 function observe(data) {
     if(!data || typeof data !== 'object') {
         return
     }
     // 取出所有属性遍历
     Object.keys(data).forEach(function(key){
         defineReactive(data, key, data[key])
     })
 }

 function defineReactive(data, key, val) {
     const dep = new Dep()
     observe(val) // 监听子属性

     Object.defineProperty(data, key, {
         enumerable: true, // 可枚举
         configurable: false,
         get: function() {
            Dep.target&&dep.addDep(Dep.target)
           return val            
         },
         set: function(newVal) {
            console.log('监听到值变化了', val, '-->', newVal)
            val = newVal
            dep.notify() // 通知订阅者
         }
     })
 }

// 通知订阅者：维护一个数组，用来手机订阅者，数据变化触发notify(),再调用订阅者的update方法
 function Dep() {
     this.subs = []
 }

 Dep.prototype = {
     addSub: function(sub) {
         this.subs.push(sub)
     },
     notify: function() {
        this.subs.forEach(function(sub){
            sub.update()
        })
     }
 }