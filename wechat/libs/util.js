'use strict'
var fs = require('fs');
var promise = require('bluebird')

exports.readFileAsync = function(fpath,encoding){
    return new promise(function(resove,reject){
        fs.readFile(fpath,encoding,function(err,content){
            if(err) reject(err)
            else resove(content)
        })
    })
}
exports.writeFileAsync = function(fpath,content){
    return new promise(function(resove,reject){
        fs.writeFile(fpath,content,function(err,content){
            if(err) reject(err)
             else resove(content)
        })
    })
}