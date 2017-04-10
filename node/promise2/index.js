var getJSON = function(url) {
  var promise = new Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        // 使用 resolve 得到 AJAX 获取的数据
        resolve(this.response);
      } else {
        // 使用 reject 抛出错误
        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
};


// const makeRequest = ()=>getJSON('/index.json')
// .then(data=>{
//     console.log(data)
//     return 'done'
// })

// makeRequest().then(function(){
// console.log("json请求结束");
// })

const promises = ["index","main"].map(function(value){
  return getJSON('/'+value+".json").then(function(data){
    console.log(data);
  })
});

Promise.all(promises).then(function(posts){
   //promises全部resolved的情况，走这里
    console.log('promises全部成功执行');
}).catch(function(error){
  // promises中rejected的情况，走这里
  console.log(error);
})