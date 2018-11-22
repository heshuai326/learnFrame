const dns = require('dns')


// 当配置了本地Host时，对查询结果产生影响
// dns.lookup('www.bit000.com',{all: true}, function(err, address, family){
//     if(err) throw err
//     console.log(address)
//     console.log(family)
// })

dns.resolve4('www.bit000.com', function(err, address){
    if(err) throw err
    console.log(address)
})