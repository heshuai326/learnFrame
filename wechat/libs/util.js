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