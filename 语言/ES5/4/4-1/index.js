
// ---------引用赋值-----------
// let a = {
//     name: 'linxi',
//     book: {
//         title: 'You dont konw JS',
//         price: '45'
//     }
// }

// let b = a
// console.log(b)
// // { name: 'linxi',
// //   book: { title: 'You dont konw JS', price: '45' } }


// a.name = 'change'
// a.book.price = '55'

// console.log(a)
// // { name: 'change',
// //   book: { title: 'You dont konw JS', price: '55' } }
// console.log(b)
// // { name: 'change',
// //   book: { title: 'You dont konw JS',


// // ---------Object.assgin------------
// let a = {
//     name: 'linxi',
//     book: {
//         title: 'You dont konw JS',
//         price: '45'
//     }
// }

// let b = Object.assign({},a)
// // console.log(b)
// // { name: 'linxi',
// //   book: { title: 'You dont konw JS', price: '45' } }

// a.name = 'change'
// a.book.price = '55'
// // console.log(a)
// // { name: 'change',
// //   book: { title: 'You dont konw JS', price: '55' } }

// console.log(b)
// // { name: 'linxi',
// //   book: { title: 'You dont konw JS', price: '55' } }

// // ---------Spread------------
// let a = {
//     name: 'linxi',
//     book: {
//         title: 'You dont konw JS',
//         price: '45'
//     }
// }

// let b = {...a}
// // console.log(b)
// // { name: 'linxi',
// //   book: { title: 'You dont konw JS', price: '45' } }
// a.name = 'change'
// a.book.price = '55'
// // console.log(a)
// // { name: 'change',
// //   book: { title: 'You dont konw JS', price: '55' } }
// console.log(b)
// // { name: 'linxi',
// //   book: { title: 'You dont konw JS', price: '55' } }

// ---------Array.prototype.slice------------
let a = [0, '1', [2, 3]]
let b = a.slice(1)
a[1] = '99'
a[2][0] = 4
// console.log(a)
// [ 0, '99', [ 4, 3 ] ]
console.log(b);
// [ '1', [ 4, 3 ] ]
