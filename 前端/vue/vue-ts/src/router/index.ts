import Vue from 'vue'
import Router from 'Vue-router'

Vue.use(Router)
console.log(this)

declare var require: any

export default new Router({
    mode: 'history' || 'hash',
    routes: [
        {
            path: '/',
            redirect: '/hello'
        },
        {
            path: '/hello',
            name: 'hello',
            component: resolve => require(['../components/hello.vue'], resolve)
        }
    ]
})