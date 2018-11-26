let promise = new Promise(function(resolve,reject){
    console.log('promise step one!');
    var index = 3;
    resolve(index);
})
.then(function(value){
    console.log(value);
    console.log('promise step two!');
    return value+2;
}).then(function(value){
    console.log(value);
})
.catch(function(error){
    if(error) throw error;
})