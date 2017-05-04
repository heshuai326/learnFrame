// 定义一个学生类
class Student{
    fullName:String; //全名属性
    constructor(public firstName,public lastName){ //构造函数中传入姓和名
        this.fullName = firstName+''+lastName;
    }
}
// 定义一个接口（定义一个规则）
interface Person{
    firstName:string;
    lastName:string;
}

class worker implements Person{
    firstName:string;
    lastName:string;
}
function greeter(person:Person){
    return 'Hello,'+person.firstName+''+person.lastName;
}

var user = new Student('Jane',' Black');
document.body.innerHTML=greeter(user);