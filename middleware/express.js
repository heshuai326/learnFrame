const express = require('express')
const app = express()

app.use((req,res, next) => {
    res.status(200)
    console.log('seting status')
    next()
})

app.use((req, res) => {
    console.log('setting body')
    res.send('hello from express')
})

app.listen(3001, function(){
    console.log('express app listening on 3001')
})
/*
 * 1、Express的中间件基于回调
 * 2、省略了next,请求永不结束
 *    在调用next和response两个做法中二选一
 */