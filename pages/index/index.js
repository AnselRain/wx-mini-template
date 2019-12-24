// index.js
// 获取应用实例
import api from '../../api/api.js'
import wxApi from '../../utils/wxApi.js'
import { http } from '../../utils/http.js'
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
  },
  async testAsync () {
    return 'hello async'
  },
  async aaa () {
    console.log(12)
    const result = await this.testAsync()
    console.log(result)
    console.log(await api.getSystemInfo())
  },
  async getList () {
    const request = await http(api.index, {
      showLoading: true,
      data: {
        aaa: '123'
      }
    })
    console.log(request)
    const data = await request.data
    console.log(data)
  }
})
