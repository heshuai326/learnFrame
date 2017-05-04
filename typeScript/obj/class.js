// 定义一个学生类
var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + '' + lastName;
    }
    return Student;
}());
var worker = (function () {
    function worker() {
    }
    return worker;
}());
function greeter(person) {
    return 'Hello,' + person.firstName + '' + person.lastName;
}
var user = new Student('Jane', ' Black');
document.body.innerHTML = greeter(user);
