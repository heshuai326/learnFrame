const  express = require("express");

const  app = express();



app.get("/index",function (req,res) {
    res.send("请求成功");
})
app.get("*",function (req,res) {
    let reg =/\.\w+$/;
    if(reg.test(req.path)){
        let path = __dirname+req.path;
        res.sendFile(path);
    }
})
app.listen(3000);