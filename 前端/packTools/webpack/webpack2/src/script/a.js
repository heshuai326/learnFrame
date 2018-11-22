function a(){
    console.log("这是a函数"); 
    console.log(document.getElementById('app'))
    document.getElementById('app').textContent = 'Hello world！'
}
a();