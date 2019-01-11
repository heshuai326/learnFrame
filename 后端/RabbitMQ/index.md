### 基于RabbitMQ搭建消息队列
我们对于处理并发而带来的CPU或I/O密集型问题最好的方法就是使用消息队列

#### 什么是队列
队列是一种“先进先出”的存储结构，是一种很重要的数据结构，体现在软件开发的各个方面
[队列的百度百科](https://baike.baidu.com/item/%E9%98%9F%E5%88%97/14580481?fr=aladdin)
#### 消息队列的优势
1. 应用解耦：跨语言，只需要遵守同样的约定
2. 冗余存储：处理之后数据才会被删除（不需要其他的数据持久化）
3. 可扩展性
4. 灵活性和分支处理能力
5. 可恢复性
6. 送达保证
7. 排序保证
8. 缓冲
9. 理解数据流
10. 异步通信

#### docker 启动服务

      docker run -d --name rabbit -p 5672:5672 rabbitmq
#### 启动管理员服务(默认不启动)
```
rabbitmq-plugins enable rabbitmq_management
```
#### 添加管理用户
```
1. 创建管理用户
rabbitmqctl add_user heshuai heshuai
2. 设置管理员
rabbitmqctl set_user_tags heshuai administrator
3.设置权限
rabbitmqctl set_permissions -p / heshuai ".*" ".*" ".*"
```
#### 注意
1. 服务是否启动
2. 端口是否对应映射
3. 服务端口默认为：5671 管理服务端口默认为：15671

#### 发布订阅和观察者模式区别
<img src="https://images2015.cnblogs.com/blog/555379/201603/555379-20160313183429007-1351424959.png"/>

<img src="https://images2015.cnblogs.com/blog/555379/201603/555379-20160313183439366-1623019133.png"/>
1. 调度
两种模式都存在订阅者和发布者（具体观察者可认为是订阅者，目标可认为是发布者），但是观察者模式是由具体目标调度的，而发布订阅模式是统一由调度中心调的。
2. 两种模式都可以用于松散耦合，改进代码管理和潜在的复用