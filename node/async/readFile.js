const fs = require('fs');

function readFile(fsName){
    return new Promise(function(resolve,reject){
        fs.readFile(fsName,function(err,data){
            if(err) reject(err);
            resolve(data);
        })
    })
}
const read = async()=>{
let fs1  = await readFile("index.js");
let fs2 = await readFile("main.js");
console.log(fs1.toString());
console.log(fs2.toString());
}
read().catch(function(err){
console.log(err);
})