'use strict'
const Router = require('koa-router')
const User = require('../controller/user')
const App = require('../controller/index')

module.exports = function(){
    const router = new Router({
        prefix:'/api/1'
    })
    // user路由规则匹配
    router.post('/u/signup',User.signup)
    router.post('/u/verify',User.verify)
    router.post('/u/update',User.update)
    router.post('/signature',App.signature)
    return router;
}