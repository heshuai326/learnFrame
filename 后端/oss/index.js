const fs = require('fs')
const co = require('co')
const OSS = require('ali-oss').Wrapper

const client = new OSS({
    region: 'oss-cn-beijing',
    accessKeyId: 'LTAI1Ovf2QY8moxB',
    accessKeySecret: 'Wy6JcDy0oD7jxE6zovA1SGHtB7M1Vr',
    bucket: 'test-heshuai'
})

// 回调方式
// client.list().then(function (result) {
//     console.log(result.objects);
//   }).catch(function (err) {
//     console.error(err);
//   });

async function run() {
    // 列表
    const result = await client.list()
    console.log(result)

    // 上传文件
    // const stream = fs.createReadStream('./package-lock.json')
    // const result = await client.putStream('fs.js', stream)
    // console.log(result)

    // 下载文件
    // const result = await client.get('建设银行.jpeg', 'bank.jpg')
    // console.log(result)
}
run()
