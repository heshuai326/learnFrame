
## 获取镜像
```
docker pull ubuntu
docker pull redis
```

## 配置集群
```
wget -c http://download.redis.io/redis-stable/redis.conf
curl -O http://download.redis.io/redis-stable/redis.conf

```
## 创建redis容器
给redis容器赋予ubuntu的功能
```
sudo docker run -it --name ubuntu ubuntu /bin/bash
sudo docker run -it --name redis --link ubuntu:ubuntu redis /bin/bash
```

```
docker run -p 6379:6379 -it -v /c/Users/Administrator/Desktop/redis/redis-master.conf:/etc/redis/redis.conf --name redis-master redis /bin/bash
docker run -it -v /c/Users/Administrator/Desktop/redis/redis-slave1.conf:/etc/redis/redis.conf --name redis-slave1 --link redis-master:master redis /bin/bash
docker run -it -v /c/Users/Administrator/Desktop/redis/redis-slave2.conf:/etc/redis/redis.conf --name redis-slave2 --link redis-master:master redis /bin/bash
```


## 进入容器，启动redis服务
```
redis-server /etc/redis/redis.conf
```