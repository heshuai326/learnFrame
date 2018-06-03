const o = {}
/**
 * writable: 属性设置为false，该属性被称为'不可写',不能被重新分配
 * Enumerabel:定义了对象的属性是否客户在for...in循环和Object.keys()中内枚举
 * Configurabel:表示对象的属性是都可以被删除，以及除writable特性外的其他特性是否可以被修改
 * */
Object.defineProperty(o, 'a',{
    value:37,
    writable:true,
    enumerable:true,
    configurable:true
})
console.log(o)