let user = require('./db.js');

//查找方法
// user.find({},function(err,data){
//     if(err) throw err;
//     console.log(data);
//
// })

//添加方法
 newUser = {
    firstName:'何',
    lastName:'帅',
    pass:'1234'
}
// user.create(newUser,function (err) {
//     if(err) throw  err;
//     console.log('添加成功');
// })

//删除方法
// user.remove({firstName:'何'},function (err,data) {
//     if(err) throw  err;
//     console.log('删除成功');
// });

//更新方法

// user.update({"index":"1"},{$set:{newUser}},function (err) {
//     if(err) throw  err;
//     console.log("修改成功");
// });