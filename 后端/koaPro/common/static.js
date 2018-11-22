// 读取静态文件的中间件
const path = require('path');
const mime = require('mime');
const fs = require('mz/fs')//fs使用了promise来读取数据结果

function staticFiles(url,dir){ //public/ /home/heshuai/learnFrame/koapro/public
    // console.log(url,dir); 
    return async(ctx,next)=>{
        let rpath =  ctx.request.path;
        console.log("请求的路径:"+rpath);//请求的路径 /public/css/main.css
        // 判断是否以置顶额URL开头
        if(rpath.startsWith(url)){
            // 获取文件完整路径
            let fp = path.join(dir,rpath.substring(url.length)); //把重复的目录名给截取，拼凑完整的
            console.log('文件的完整路径：'+fp);
            // 判断文件是否存在
            if(await fs.exists(fp)){
                // 查找文件的mime
                ctx.response.type = mime.lookup(rpath);
                ctx.response.body = await fs.readFile(fp);
            }else{
                ctx.response.status = 404;
            }
        }else{
            // 不是指定前缀的URL，继续处理下一个中间件
            await next();
        }
    }
}

module.exports = staticFiles;