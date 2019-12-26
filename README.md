# wx-mini-template

> 推荐使用async与await

### token

> `token`请存入本地缓存中，`key`值为`token`

``` js
    wx.getStorageSync('token')
```

## **工具类**
### request请求

``` js
import { http } from '../../utils/http.js'

const params = {
      showLoading: true,
      method: 'POST',
      data: {
      }
    }
http(url, params)
```


| 参数名 | 参数类型 | 参数值 |
| --- | --- | --- |
| url | string |  |
| params | object |  |


> params


| 参数名 | 参数类型 | 参数值 |  备注 |
| --- | --- | --- | --- |
| showLoading | boolean | true/false | 控制是否显示showLoading，如果不填写则默认为false |
| method | string | POST/GET | 如果不填写则默认为POST |
| header | object |  | 若无需求则无需填写，默认带token |
| data | object |  |  |

> return

```
promise
```

### 防抖函数
``` js
import util from '../../utils/util.js'

tap: util.debounce(async function(e) {
    console.log(e)
})
```

## **公共组件**
### 获取验证码倒计时组件

> 组件名: `verificationCode`

> 引入方式：

``` js
// 父组件json
"usingComponents": {
    "component-code": "/components/verificationCode/verificationCode"
  }
```
``` html
// 父组件html
<component-code class="" text='获取验证码' bindtap='sendCode' isSendCode='{{isSendCode}}'></component-code>
```
``` js
// 父组件js
import util from '../../utils/util.js'
Page({
data: {
    isSendCode: false,
    isStopTime: true
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
```

> 样式自定义

通过添加 `class`实现



