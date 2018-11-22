const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://182.254.246.66/user";

// MongoClient.connect(url, function(err, db) {
//   console.log("Connected correctly to server");
//   db.collection("user",function(err,coll){
//       coll.find({}).toArray(function(err,docs){
//           console.log(docs);
//       })
//   })
// });

new Promise(function(resolve,reject){
    resolve(MongoClient.connect(url));
}).then(function(db){
    return db.collection("user");
}).then(function(coll){
    return coll.find({}).toArray();
}).then(function(docs){
    console.log(docs);
}).catch(function(error){
    console.log(error);
})