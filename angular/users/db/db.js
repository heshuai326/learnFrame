//连接数据库
const mongoose = require('mongoose');

  mongoose.connect('mongodb://182.254.246.66/user');
    const db = mongoose.connection;

    db.on('error',console.error.bind(console,'连接错误:'));
    db.once('open',function () {
        console.log('连接成功');
    })
    //创建schema
    const user = new  mongoose.Schema({
      firstName:String,
      lastName:String,
      pass:String,
      index:String
    })

    const modelUser = mongoose.model('user',user);

module.exports = modelUser;




