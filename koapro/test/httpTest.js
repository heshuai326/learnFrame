const app = require('../ejs');
const  request = require('supertest');

describe('测试http请求',()=>{
    let server = app.listen(3000);//启动服务
    describe('开始测试服务',()=>{
        // 测试/请求的测试用例
        it('测试/',async()=>{
        let res = await request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
        })

        // 侧死/users的测试用例
        it('测试/users',async()=>{
        let res = await request(server)
            .get('/users')
            .expect('Content-Type',/text\/html/)
            .expect(200)
        })
    })
})