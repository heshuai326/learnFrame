<template>
  <div>
    <h1>book page</h1>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">获取用户信息</button> 
   </div>
</template>

  
<script>
import qcloud from 'wafer2-client-sdk'
import { get, showSuccess } from '../../utils/index.js'
import config from '../../config/config.js'


export default {
  methods: {
    doLogin() {
      const user = wx.getStorageSync('userInfo')
      if (!user) {
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: function (userInfo) {
            wx.setStorageSync('userInfo', userInfo)
            showSuccess('登陆成功')
          },
          fail: function (err) {
            console.log('登录失败', err)
          }
        }) 
      }
    }
  }
}
</script>
  
