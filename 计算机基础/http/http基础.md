## hTTP基础
### 五层模型
- 应用层：（HTTP HTTPS FTP）构建于TCP协议之上，屏蔽网络传输相关细节
- 传输层：（TCP/IP UDP）向用户提供可靠端到端服务，传输层向高层屏蔽了下层数据通信的细节
- 网络层：在节点之间传输创建逻辑链路
- 数据链路层：在通信的实体间建立数据链路连接
- 物理层：定义物理设备如何传输数据
### CORS（跨域资源共享）[CORS详解](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)
1. 当一个资源从该资源所在的服务器不同的域 协议活端口请求一个资源时，资源会发起一个跨域HTTP请求。
2. 跨域是浏览器的一个行为所以curl等工具没有跨域。
3. 不一定是浏览器限制了发起跨站请求，也可能是跨站请求可以正常发起，但是返回结果被浏览器拦截了。

- Access-Control-Allow-Origin：允许访问的客户端，设置为所有*号
- Access-Control-Request-Headers：自定义请求头
- Access-Control-Request-Method：允许请求的方法（PUT POST DELETE ）
- Access-Control-Max-Age：浏览器在多长时间内无需发送预请求（单位为秒）