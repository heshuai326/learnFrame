/**
 * 同步： 调用方等待被调用方 (阻塞)
 * 异步：
 *  主动方的事件轮询
 *  被动方的消息通知
 * 
 * I/O：（输入输出）
 *  磁盘读写
 *  数据库
 *  网络
 * 
 * libuv：是一个高性能事件驱动，屏蔽了各种操作系统的差异从而提供了同意的API。libuv严格使用异步、事件驱动的编程风格。    
 *        其核心工作是提供事件循环及基于I/O或其他活动事件的回调机制。
 *        libuv库包含了注入计时器、非阻塞网络支持、异步文件系统访问、线程创建、子进程等核心工具
 *          
 * 事件轮询的阶段
 * timers
 * pending callbacks
 * idle,prepare
 * poll
 * check 
 * close callbacks
 * 
 * 
 */