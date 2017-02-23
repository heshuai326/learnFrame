###ubuntu apache的配置
**apache服务器映射的根目录**
- 安装apache2
```
sudo apt-get install apache2
```
- 进入/etc/apache2/文件夹下
apache2.conf是主要的配置文件,其他的配置文件都会被加载到这个文件
![输入图片说明](http://git.oschina.net/uploads/images/2017/0222/195952_4ee5493f_815294.png "在这里输入图片标题")
- 进入/etc/apache2/sites-available/文件夹下
将000-default.conf的服务器根目录映射也修改成自己的设置的文件夹

**服务器不能解析php文件**
- 安装所需要的模块
```
sudo apt-get install php
sudo apt-get install libapache2-mod-php 
sudo apt-get libapache2-mod-auth-mysql
```
- /etc/mysql/mysql.conf.d是mysql的配置文件
- 在apache2.conf文件中添加
```
AddHandler php5-script .php .html
AddType text/html .php .html
LoadModule php5_module 
```
- 重启服务器
```
sudo /etc/init.d/apache2 restart
```

**远程登录mysql数据库**
- 给用户赋予权限
```
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'youpassword' WITH GRANT OPTION;
```
- 重载授权表
```
FLUSH PRIVILEGES;
```
- 进入/etc/mysql/mysql.conf.d/ 修改mysqld.conf
```
//绑定的本地注释掉
#bind-address           = 127.0.0.1
```
- 重启mysql服务
```
sudo service mysql restart
```
