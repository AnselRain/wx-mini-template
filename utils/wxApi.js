/**
 * promise微信API方法
 */
function wxPromise (api) {
  function func (options, ...params) {
    return new Promise((resolve, reject) => {
      api(
        Object.assign({}, options, {
          success: res => {
            resolve(res)
          },
          fail: reject
        }),
        ...params
      )
    })
  }
  return func
}

function getWxPromiseObject () {
  const obj = {}
  for (const property in wx) {
    obj[property] = wxPromise(wx[property])
  }
  return obj
}

export default getWxPromiseObject()
