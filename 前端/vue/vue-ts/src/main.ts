import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {  } from 'module/api.module'

export default new Vue({
    el: '#app',
    router,
    render: h => h(App)
})