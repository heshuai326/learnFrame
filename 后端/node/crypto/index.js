const crypto = require('crypto')
/**
 * 
 * Crypto加密模块是C/C++实现这些算法后，暴露为js接口的模块，包含对OpenSSL的哈希/HMAC/加密/解密/签名以及验证功能的一阵套封装
 */


// const secret = 'abcdefg'
// const hash = crypto.createHmac('sha256', secret)
//                     .update('I lpve cupcakes')
//                     .digest('hex')
// console.log(hash)


/**
 * MD5加密
 * 是让大容量信息在数字签名软件签署私人密钥前被“压缩”成一种保密格式，
 * 也就是把一个任意长度的字节串变换成一定长度的十六进制数字串（32个字符）一致性验证
 * 
 * 特点
 * 不可逆
 * 输入两个不同的明文不会得到相同的输出值
 * 根据输出值，不能得到原始的铭文，即过程不可逆
 * 
 * 创建并返回一个hash对象，它是一个指定算法的加密hash，用于生成hash摘要
 * 参数algorithm可选系统上安装的OpenSSL版本所支持的算法。
 * 
 * 更新hash的内容为指定的data，当使用流数据时可能会多次调用该方法
 * 
 * 计算所有传入数据的hash摘要，参数encoding（编码方式）可以为hex/binary/bash64
 */


const md5 = str => {
    return crypto.createHash('md5').update(str, 'utf8').digest('hex')
};


// 默认输出长度为32位小写字母
console.log(md5('123456789'));

// 转换为32位大写字母
console.log(md5('123456789').toUpperCase());

