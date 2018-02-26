let firstName = 'Michael'
let lastName = 'Jackson'

let year = 1958

// 导出变量
export { firstName, lastName, year}


// 导出函数或类(Class)
export function multiply(x, y) {
    return x * y
}

// 为了给用户方便，为模块指定默认输出
export default function() {

}