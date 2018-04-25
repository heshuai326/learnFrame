const fs = require('fs')
const xml2js = require('xml2js')

exports.readFileAsync = async function(fpath){
    return new Promise((resolve, reject)=>{
        fs.readFile(fpath, 'utf-8', function(err,content){
            return resolve(content)
        }) 
    }) 
}

exports.writeFileAsync = async function(fpath, content){
    return await fs.writeFile(fpath, content)
}

exports.xmlToJson = (str) => {
    return new Promise((resolve, reject) => {
    const parseString = xml2js.parseString
        parseString(str, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

exports.jsonToXml = (obj) => {
    const builder = new xml2js.Builder()
    return builder.buildObject(obj)
}

exports.formatMessage = function(result){
    let message = {}
    if(typeof result === 'object'){
        let keys = Object.keys(result)
        for(let i = 0; i < keys.length; i++ ){
            let item = result[keys[i]]
            let key = keys[i]

            if(!(item instanceof Array)||item.length===0){
                continue
            }
            if(item.length===1){
                let val = item[0]
                if(typeof val === 'object'){
                    message[key] = formatMessage(val)
                }else {
                    message[key] = (val||'').trim()
                }
            }else{
                message[key] = []
                for(let j = 0, k=item.length; j<k; j++){
                    message[key].push(formatMessage(item[j]))
                }
            }
        }
    }
    return message
}
