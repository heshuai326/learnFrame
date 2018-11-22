'use strict';
const nodemailer = require('nodemailer');

//创建一个可用的传输协议对象使用默认的SMTP传输协议
let transporter = nodemailer.createTransport({
    service:'',
    auth:{
        user:"",
        pass:''
    }
});

let mailOptions = {
    from:'',
    to:'',
    subject:'Hello',//主题
    text:'hello world!',//正文
    html:'<b>hello world!</b>'//html正文
};

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        return console.log(error);
    }
    console.log('Message %s sent: %s',info.messageId,info.response);
})