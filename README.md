<!--
 * @Description: header
 * @Author: ALAN
 * @Github: https://github.com/AnselRain
 * @Date: 2019-12-11 17:23:00
 * @LastEditTime : 2019-12-24 18:32:36
 * @LastEditors  : ALAN
 -->
# wx-mini-template

> 推荐使用async与await

### token

> `token`请存入本地缓存中，`key`值为`token`

``` js
    wx.getStorageSync('token')
```

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