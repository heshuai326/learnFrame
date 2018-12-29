import Vue from "vue";

import SApiInject from 'api/sApi'

export function initApi({}: any){

    // Vue.use(SApiInject)
    return {
        SApiInject
    }
}