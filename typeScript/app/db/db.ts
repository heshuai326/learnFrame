import mongo from 'mongodb';
const server = new mongo.Server('182.254.246.66',27017,{auto_reconnect:true});
const db = new mongo.db('user',server,{w:1});

export default db;