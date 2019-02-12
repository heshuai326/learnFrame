## 一 赋值（Copy）
赋值时将某一数值或对象赋给某个变量的过程，分为下面2部分
- 基本数据类型：复制，赋值之后两个变量互不影响
- 引用数据类型：赋址，两个变量具有相同的引用，指向同一个对象，相互之间有影响
对引用类型进行赋址操作，两个变量指向同一个对象，改变变量a之后会影响变量b，哪怕改变的只是对象a中的基本类型数据
```
let a = {
    name: 'linxi',
    book: {
        title: 'You dont konw JS',
        price: '45'
    }
}

let b = a
console.log(b)
// { name: 'linxi',
//   book: { title: 'You dont konw JS', price: '45' } }


a.name = 'change'
a.book.price = '55'

console.log(a)
// { name: 'change',
//   book: { title: 'You dont konw JS', price: '55' } }
console.log(b)
// { name: 'change',
//   book: { title: 'You dont konw JS', price: '55' } }
```
## 浅拷贝
### 什么时候浅拷贝
创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性时基本类型，拷贝的就是基本类型的值，如果属性时引用类型，拷贝的就是内存地址，所以其中一个休想改变了这个地址，就会影响到另一个对象。

<img src="https://camo.githubusercontent.com/cdfefe419e4d8c60daca9a61542756ebed040c6f/687474703a2f2f7374617469632e6f736368696e612e6e65742f75706c6f6164732f73706163652f323031342f303330382f3134303432345f466770625f3934313630352e706e67">
上图中，SourceObject是原对象，其中包含基本属性field1和引用类型属性refObj。浅拷贝之后基本类型数据filed2和filed1是不同属性，互不影响。但引用类型refObj仍然是同一个，改变之后会对另一个对象产生影响。<br>
简单来说可以理解为浅拷贝只解决了第一层的问题，拷贝第一层的<b>基本类型值</b>,以及第一层的基本类型值，以及第一层的引用类型地址。

### 浅拷贝的使用场景
#### Object.assign()
<b>Object.assign()</b>方法用于将所有可枚举数据的值从一个或多个源对象复制到目标对象。它将返回目标对象。<br>
有些文章说Object.assign()是深拷贝，其实这是不正确的

```
let a = {
    name: 'linxi',
    book: {
        title: 'You dont konw JS',
        price: '45'
    }
}

let b = Object.assign({},a)
// console.log(b)
// { name: 'linxi',
//   book: { title: 'You dont konw JS', price: '45' } }

a.name = 'change'
a.book.price = '55'
// console.log(a)
// { name: 'change',
//   book: { title: 'You dont konw JS', price: '55' } }

console.log(b)
// { name: 'linxi',
//   book: { title: 'You dont konw JS', price: '55' } }
```
上面代码改变对象a之后，对象b的基本属性保持不变。但是当改变对象a中的对象book时，对象b相应的位置也发生了变化（第一层不会变，之后会改变）

#### 展开语法<b>Spread</b>
```
let a = {
    name: 'linxi',
    book: {
        title: 'You dont konw JS',
        price: '45'
    }
}

let b = {...a}
// console.log(b)
// { name: 'linxi',
//   book: { title: 'You dont konw JS', price: '45' } }
a.name = 'change'
a.book.price = '55'
// console.log(a)
// { name: 'change',
//   book: { title: 'You dont konw JS', price: '55' } }
console.log(b)
// { name: 'linxi',
//   book: { title: 'You dont konw JS', price: '55' } }
```
通过代码可以看出实际效果和Object.assign()是一样的
#### Array.prototype.slice()
slice()方法返回一个新的数组对象，这一对象是一个由begin和end（不包括end）决定的原数组的浅拷贝。原始数组不会改变。
```
// ---------Array.prototype.slice------------
let a = [0, '1', [2, 3]]
let b = a.slice(1)
a[1] = '99'
a[2][0] = 4
// console.log(a)
// [ 0, '99', [ 4, 3 ] ]
console.log(b);
// [ '1', [ 4, 3 ] ]
```
可以看出，改变a[1]之后b[0]的值并没有发生变化，但改变a[2][0]之后，相应的b[1][0]的值也发生变化。说明slice()方法是浅拷贝，相应的还有concat等
## 深拷贝
### 什么是深拷贝
深拷贝会拷贝所有的属性，并拷贝属性指向的动态分配的内存。当对象和它所引用的对象一起拷贝时即发生深拷贝。深拷贝相比于浅拷贝速度较慢并且花销较大。拷贝前后两个对象互不影响。
<img src="https://camo.githubusercontent.com/ba45e539b1d4dc634d96b5ed4b4fb8a6f7e44703/687474703a2f2f7374617469632e6f736368696e612e6e65742f75706c6f6164732f73706163652f323031342f303330382f3134313531355f4934356d5f3934313630352e706e67">
### 深拷贝使用的场景
#### JSON.parse(JSON.stringify(object))
```
let a = {
    name: 'linxi',
    book: {
        title: 'You dont konw JS',
        price: '45'
    }
}
let b = JSON.parse(JSON.stringify(a))
// console.log(b)

a.name = 'change'
a.book.price = '55'
// console.log(a)
// { name: 'change',
//   book: { title: 'You dont konw JS', price: '55' } }
console.log(b)
// { name: 'linxi',
//   book: { title: 'You dont konw JS', price: '45' } }
```
完全改变变量a之后对b没有任何影响
#### 问题
1. 会忽略undedined 
2. 会忽略symbol
3. 不能序列化函数
4. 不能解决循环引用的对象
5. 不能正确处理new Date()
6. 不能处理正则