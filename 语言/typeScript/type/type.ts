
// 布尔类型
let isDone: boolean = false

// 数字
let decLiteral: number = 6

// 字符串
let str: string = 'bob'

// 数组
let list1: number[] = [1,2,3] // 表示此类型元素组成一个数组
let list2: Array<number> = [1,2,3] // 数组泛型

// 元组：元组类型允许表示一个已知元素数量和类型的数组
let x :[string, number]
x = ['hello', 10]

// 当访问一个越界的元素，会使用联合类型替代
x[3] = 'world' // (string|number)

// 枚举: enum类型是对javascript标准数据类型的一个补充
enum Color(Red, Green)

// any: 动态数据类型

// void：没有任何类型（与any类型相反）

// Null和Underfined：是所有类型的子类型

// Nerver：哪些永不存在的值的类型

// Object：表示非原始类型

// 类型断言
let someValue1: any = "this is a string"
let strLength1: number = (<string>someValue1).length

let someValue2: any = 'this is a string'
let strLength2: number = (someValue2 as string).length
