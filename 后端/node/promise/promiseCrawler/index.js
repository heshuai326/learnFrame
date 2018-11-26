const http = require('http');
const Promise = require('promise');
const cheerio = require('cheerio');
const nodeMailer = require('nodemailer')
// 原生写法
// http.get("http://www.jianshu.com/p/8cf2df3fdbf2",function(res){
//     let html = "";
//     res.on("data",function(data){
//         html+= data;
//         console.log(html);
//     });
//     res.on("end",function(){
//         console.log("响应结束！");
//     })

// }).on('error',function(e){
//     reject(e);
//     console.log("获取信息出错！");
// })

const baseUrl = 'http://www.jianshu.com/p/';
const articleIds = ['89f1d4245b20','8cf2df3fdbf2','f2f5aca71fec','5b4c2f4c7a52','23454b4c899d'];
const articlePromiseArray = [];


// 异步Promise封装
function getPageAsync(url){
    return new Promise(function(resolve,reject){
        http.get(url,function(res){
            let html = "";
            res.on("data",function(data){
                html+= data;  
                // console.log(html);
            })   
            // 响应结束的时候把全部结果响应出来,不能在data阶段就返回
          res.on("end",function(){
              resolve(html);
        }) 
        }).on("error",function(e){
            reject(e);
            console.log("获取信息出错！");
        })
    })
}

articleIds.forEach(function(item){
    articlePromiseArray.push(getPageAsync(baseUrl+item));//数组中保存Promise对象
})

/*
*promise.all方法用于将多个Promise实例，包装成一个新的Promise实例
*参数是一个Promise实例数组，所有的状态都变成resolved，promise.all返回的实例才会变成resolved
*将数组中的所有返回值组成一个新数组传递给回调函数
*/ 
Promise.all(articlePromiseArray).then(function (pages){
    pages.forEach(function(html){
        let info = filterArticles(html);
        printInfo(info);
    })

},function(error){
    console.log(error);
})

// 对网页内容用cheerio进行过滤
function filterArticles(html){
    let $ = cheerio.load(html);
    let title = $('.article .title').text();
    let publishTime = $('.publish-time').text();
    let textNum = $('.wordage').text().split(' ')[1];
    // let views = $('.views-count').text().split('阅读')[1];
    // let commentsNum = $('.comments-count').text();
    // let likeNum = $('.like-count').text();
    let articleData = {
        title:title,
        publishTime:publishTime,
        textNum:textNum,
        // views:views,
        // commentsNum:commentsNum,
        // likeNum:likeNum
    }
    return articleData;
}


function printInfo (info) {
    console.log("=========printInfo BEGIN=========" + "\n");
    
    let title = info.title;
    let publishTime = info.publishTime;
    let textNum = info.textNum;

    console.log("-- 【文章题目】" + title.replace(/\s+/g,"") + "\n");
    console.log("   【"+ title.replace(/\s+/g,"") +"】 发布时间：" + publishTime + "\n");
    console.log("   【"+ title.replace(/\s+/g,"") +"】 字数总计：" + textNum.replace(/\s+/g,"") + "\n");
    console.log("=========printInfo DONE=========");
    console.log("\n");
}
