import api from '../../api/api.js'
import wxApi from '../../utils/wxApi.js'
import { http } from '../../utils/http.js'
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
  },
  async getList () {
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
  }
})
