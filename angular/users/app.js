let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');
let app = new express();


let user = require('./db/db.js');

// 设置模板引擎(将模板的后缀改为html)
app.set('views',path.join(__dirname , 'views') );
app.engine('.html', require('ejs').__express);  
app.set('view engine', 'html');

// 静态文件
app.use(express.static('public'));

//解析模块
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//首页渲染
app.get('/index',function (req,res) {
      res.render('users',{});
})

//查询所有用户
app.get('/users',function (req,res) {
    user.find({},function(err,data){
        if(err) throw err;
         // console.log(data);
         res.json(data);
    })
})

//更新数据
app.patch('/users/:act',function (req,res) {
    let  newUser = req.body.user;
    console.log(newUser.index);
    user.update({"index":newUser.index},{$set:{firstName:newUser.firstName,lastName:newUser.lastName}},function (err) {
        if(err) throw  err;
        console.log("修改成功");
    });
    res.send("修改成功");
})


//添加数据
app.put('/users/:act',function (req,res) {
    let newUser = [{
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        pass:req.body.pass,
        index:req.body.index
}]

user.create(newUser,function (err) {
    if(err) throw  err;
    console.log('添加成功');
})
    res.send('添加成功');
})

//删除数据
app.delete('/users/:act',function (req,res) {
   console.log(req.body.indexUser);
    res.send("删除成功");
})

app.post('/users/:act',function (req,res) {
     let indexUser = req.body.indexUser;
    user.remove({index:indexUser},function (err,data) {
    if(err) throw  err;
});
    res.send("删除成功");
})
app.listen(3000);