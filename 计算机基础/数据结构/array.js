// 初始化数组
const fibonacci = []
fibonacci[1] = 1
fibonacci[2] = 1
for (let i = 3; i < 20; i++) {
   fibonacci[i] = fibonacci[i-1] + fibonacci[i-2] 
}

// console.log(fibonacci)

// 添加数据
// 在javascript中，数组是一个可以修改得对象如果添加元素他就会动态增长。
// 在其他语言中，我们要决定数组得大小，想添加元素就要创建一个全新得数组
const arr1 = [1]
arr1.push() // 尾部
arr1.unshift(0) // 头部

// 删除数组
const arr2 = []
arr2.pop() // 尾部
arr2.shift() // 头部


// 三维数组

const matrix3x3x3 = []
for(let i=0; i<3; i++) {
    matrix3x3x3[i] = [];
    for(let j=0; j<3; j++) {
        matrix3x3x3[i][j] = []
        for(let z=0; z<3; z++) {
            matrix3x3x3[i][j][z] = i+j+z
        }
    }
}

console.log(matrix3x3x3.toString())
/**
 * cancat 链接2个火更多数组，并返回结果
 * every 对数组的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
 * filter 对数组的没想运行给定函数，返回该函数会返回true的项组成数组
 * forEach 对数组中的每一项运行给定函数，这个方法没有返回值
 * join 将所有的数组元素连接成一个字符串
 * indexOf 返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1
 * lastIndexof 返回在数组中搜索到的与给定参数相等的元素的索引的最大值
 * map 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
 * reverse 颠倒数组重元素的顺序，原先的第一个元素现在变成最后一个，同样原先的最后一个元素变成现在的第一个
 * alice 传入索引值，将数组里对应索引范围内的元素作为新数组返回
 * some 对数组中的每一项运行给定函数，如果任一项返回true，则返回true
 * sort 按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数
 * toString 将数组作为字符串返回
 * valueOf 和toString类似，将数组作为字符串返回
 */