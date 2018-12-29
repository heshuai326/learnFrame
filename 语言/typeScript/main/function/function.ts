// 函数类型
// 为函数定义类型
function add(x:number, y:number): number{
    return x + y
}

// 推断类型
let myAdd:(baseValue:number, increment: number) => number = 
    function(x, y) { return x + y }

// 可选参数和默认参数
function buildName1 <String>(firstName: string = 'Smith', lastName?: string): string{
    return firstName + lastName
}

// 剩余参数
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + restOfName.join('')
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName2
console.log(buildNameFun('he', 'shuai2', 'shuai2'))