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


const makeRequest = ()=>getJSON('/index.json')
.then(data=>{
    console.log(data)
    return 'done'
})

makeRequest();