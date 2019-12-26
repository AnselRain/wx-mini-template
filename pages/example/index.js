import api from '../../api/api.js'
import wxApi from '../../utils/wxApi.js'
import { http } from '../../utils/http.js'
import util from '../../utils/util.js'
const app = getApp()

Page({
  data: {
    isSendCode: false,
    isTimeStop: true
  },
  onLoad: function () {
  },
  async testAsync () {
    const that = this
    const params = {
      showLoading: true,
      method: 'POST',
      header: {
        aaa: 'adsf'
      },
      data: {
      }
    }
    const request = await http(api.post, params)
    console.log(request)
    const data = request.data
    await wx.setStorageSync('aaa', '0980980')
    console.log(data)
  },
  sendCode: util.debounce(async function () {
    const that = this
    // 判断是否允许点击
    if (!that.data.isTimeStop) return
    // 发送http请求
    const params = {
      data: {
        isSend: true
      }
    }
    const request = await http(api.post, params)
    const data = request.data
    // 判断是否成功，不成功就return
    if (!JSON.parse(data).isSend) return
    // 成功时给组件值isSendCode赋值true
    await that.setData({
      isSendCode: true
    })
    // 给isTimeStop赋值为false，防止倒计时结束前点击生效
    that.data.isTimeStop = false
  }, 500),
  async getEndTime (e) {
    // isEnd为倒计时结束时返回，成功返回true
    this.data.isTimeStop = e.detail.isEnd
  }
})
