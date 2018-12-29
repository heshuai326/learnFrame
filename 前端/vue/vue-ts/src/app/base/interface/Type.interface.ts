
/**
 * 泛型：类型参数化
 * 
 */
export interface Type<T> extends Function{
    new (...args: any[]): T;
}
