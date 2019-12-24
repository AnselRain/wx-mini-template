const http = async (url, params = {}) => {
  Object.assign(params, {
    token: wx.getStorageSync('token')
  })
  // 所有的请求，header默认携带token
  const header = params.header || {
    'Content-Type': 'application/json',
    token: params.token || ''
  }
  const data = params.data || {}
  const method = params.method || 'POST'
  const showLoading = params.showLoading || false
  // hideLoading可以控制是否显示加载状态
  if (showLoading) {
    wx.showLoading({
      title: '加载中'
    })
  }
  const res = await new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method,
      data,
      header,
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      },
      complete: (e) => {
        wx.hideLoading()
      }
    })
  })
  return res
}

export {
  http
}
