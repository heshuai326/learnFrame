// 布尔类型
var isDone = false;
// 数字
var decLiteral = 6;
// 字符串
var str = 'bob';
// 数组
var list1 = [1, 2, 3]; // 表示此类型元素组成一个数组
var list2 = [1, 2, 3]; // 数组泛型
// 元组：元组类型允许表示一个已知元素数量和类型的数组
var x;
x = ['hello', 10];
// 当访问一个越界的元素，会使用联合类型替代
x[3] = 'world'; // (string|number)
// 枚举: enum类型是对javascript标准数据类型的一个补充
var Color;
(function (Color) {
})(Color || (Color = {}));
(Red, Green);
// any: 动态数据类型
// void：没有任何类型（与any类型相反）
// Null和Underfined：是所有类型的子类型
// Nerver：哪些永不存在的值的类型
// Object：表示非原始类型
// 类型断言
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
var someValue2 = 'this is a string';
var strLength2 = (someValue2), as = string, length;
