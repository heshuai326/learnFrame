
import config from '../config/config'

export function get (url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host.url,
      success: function (res) {
        if (res.data.code === 0) {
          return resolve(res)
        } else {
          return reject(res.data)
        }
      }
    })
  })
}


export function showSuccess(text) {
  wx.showToast({
    title: text,
    icon:'success'
  })
}
