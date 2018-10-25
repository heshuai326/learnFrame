<template>
  <div class="container">
    <div @click="doLogin" class="userinfo">
      <img class="avatar" :src="userinfo.avatarUrl">
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>
    <button v-if="userinfo.openId" @click="scanBook" class="btn">添加图书</button>
   </div>
</template>

  
<script>
import qcloud from 'wafer2-client-sdk'
import YearProgress from '@/components/YearProgress'
import { get, showSuccess } from '@/utils/index.js'
import config from '@/config/config.js'

export default {
  data() {
    return {
      userinfo: {
        avatarUrl: '../../static/img/book.png',
        nickName: '点击登陆'
      }
    }
  },
  created() {
     const user = wx.getStorageSync('userinfo')
      console.log(user)
      if(user) {
        this.userinfo = user
      } 
  },
  methods: {
    scanBook() {
      wx.scanCode({
        success: (res) => {
          console.log(res)
        }
      })
    },
    doLogin() {
      qcloud.setLoginUrl(config.loginUrl)
      qcloud.login({
        success:  (userinfo) => {
         
          // qcloud.request({
          //   url: config.userUrl,
          //   login: true,
          //   success(userRes) {
          //     console.log(userRes)
              wx.setStorageSync('userinfo', userinfo)
              this.userinfo = userinfo
          //     console.log(config.userUrl)
              showSuccess('登陆成功')
          //   }
          // })
        },
        fail: function (err) {
          console.log('登录失败', err)
        }
      }) 
    }
  },
  components: {
    YearProgress
  }
}
</script>

<style lang="scss">
  .container{
    padding: 0 30rpx;
    .userinfo{
      margin-top: 100rpx;
      text-align: center;
      .avatar{
        width: 120rpx;
        height: 120rpx;
        margin: 20rpx;
        border-radius: 50%;
      }
    }
  }
</style>