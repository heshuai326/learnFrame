// 函数类型
// 为函数定义类型
function add(x, y) {
    return x + y;
}
// 推断类型
var myAdd = function (x, y) { return x + y; };
// 可选参数和默认参数
function buildName1(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Smith'; }
    return firstName + lastName;
}
// 剩余参数
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + restOfName.join('');
}
var buildNameFun = buildName2;
console.log(buildNameFun('he', 'shuai1', 'shuai2'));
