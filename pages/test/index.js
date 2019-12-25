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
    const params = {
      showLoading: true,
      method: 'POST',
      header: {
        aaa: 'adsf'
      },
      data: {
      }
    }
    const request = http(api.post, params)
    console.log(request)
    const data = request.data
    console.log(data)
  }
})
