'use strict'
import Mock from 'mockjs';
const queryString = require('query-string')
const _ = require('lodash')
const request = {}
const config = require('./config')

request.get = function(url,params){
    if(params){
        url+= '?'+queryString.stringify(params)
    }
  return  fetch(url)
    .then((res)=>res.json())
    .then((resObj)=>Mock.mock(resObj))
}

request.post = function(url,body){
    let options = _.extend(config.header,{
             body: JSON.stringify(body)
        })       
      return   fetch(url,options)
            .then((res)=>res.json())
            .then((resObj)=>Mock.mock(resObj))
}
module.exports = request;