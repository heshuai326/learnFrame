import Vue, { PluginObject, VueConstructor } from "vue";
import { Type } from "../interface/Type.interface";

export default class SApiInject implements PluginObject<any> {
    [name: string]: any;
    constructor() {}
        use<T>(name: string, _api: Type<T>|T) {
            if (this[name]) {
                new Error(name + '已注入，请勿重复注入！');
                return ;
            }
            if (_api instanceof Function) {
                this[name] = new _api(); // this.sUser.
            } else {
                this[name] = _api;
            }
        }

        
        install(Vue: VueConstructor<Vue>) {
            Vue.prototype.sApi = this;
        }
    
}