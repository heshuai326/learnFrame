var mongo = require('mongodb').MongoClient;

// new Promise(function(resolve,reject){
//   resolve(mongo.connect("mongodb://182.254.246.66:27017/user"));
// }).then(function(db){
//   return db.collection("user");
// }).then(function(coll){
//   return coll.find({}).toArray();
// }).then(function(docs){
//   console.log(docs);
// }).catch(function(err){
//   console.log(err);
// })

const myMongo = async()=>{
    //等待的是一个promise对象
    const db = await new Promise(function(resolve,reject){
        resolve(mongo.connect("mongodb://182.254.246.66:27017/user"))
    })
    const coll = await db.collection("user");
    const docs = await coll.find({}).toArray();
    console.log(docs);
    return docs;
}
myMongo().catch(err=>{
    console.log(err);
});