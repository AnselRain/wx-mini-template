// components/verificationCode/verificationCode.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: '获取验证码'
    },
    isSendCode: {
      type: Boolean,
      value: false
    }
  },
  observers: {
    isSendCode: function (isSendCode) {
      if (this.data.alreadySend) return
      this.sendCode()
    }
  },
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的初始数据
   */
  data: {
    second: 60,
    send: true,
    alreadySend: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendCode (e) {
      const that = this
      if (!that.properties.isSendCode) return
      that.setData({
        alreadySend: true,
        send: false
      })
      that.timer()
    },
    // 验证码倒计时
    timer () {
      const that = this
      const promise = new Promise((resolve, reject) => {
        const setTimer = setInterval(
          () => {
            that.setData({
              second: that.data.second - 1
            })
            if (that.data.second <= 0) {
              const myEventDetail = {
                isEnd: true
              }
              const myEventOption = {}
              that.triggerEvent('endTime', myEventDetail, myEventOption)
              that.setData({
                second: 60,
                alreadySend: false,
                send: true
              })
              resolve(setTimer)
            }
          }
          , 1000)
      })
      promise.then((setTimer) => {
        clearInterval(setTimer)
      })
    }
  }
})
