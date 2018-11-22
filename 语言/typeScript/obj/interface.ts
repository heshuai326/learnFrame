interface Person{
    firstName:string;
    lastName?:string; //可选属性:接口里的属性不全都是必需的
    readonly password:number;//只读属性   变量(const) 属性(readonly)
}

function greeter(person:Person){
    return 'Hello,'+person.firstName+""+person.lastName;
}
var user = {firstName:'Jane',name:'heshuai',lastName:'user'}; //类型检查器不会去检查属性的顺序，只要响应的属性存在并且类型也是对的就可以
document.body.innerHTML = greeter(user);
/**
 * 核心原则之一是对值所具有的shape进行类型检查，被称为”鸭式辨型法“或”结构性子类型化“
 * 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
 */

