const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 函数节流
 * @param fn 需要进行节流操作的事件函数
 * @param interval 间隔时间
 * @returns {Function}
 */
function throttle (fn, interval) {
  let enterTime = 0 // 触发的时间
  const gapTime = interval || 500 // 间隔时间，如果interval不传，则默认500ms
  return function () {
    const context = this
    const backTime = new Date() // 第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      fn.call(context, arguments[0]) // arguments[0]是事件处理函数默认事件参数event call绑定当前page对象
      enterTime = backTime // 赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  }
}

/**
   * 函数防抖
   * @param fn 需要进行防抖操作的事件函数
   * @param interval 间隔时间
   * @returns {Function}
   */
function debounce (fn, interval) {
  let timer
  const gapTime = interval || 1000 // 间隔时间，如果interval不传，则默认1000ms
  return function () {
    clearTimeout(timer)
    const context = this
    const args = arguments[0] // 保存此处的arguments，因为setTimeout是全局的，arguments无法在回调函数中获取，此处为闭包。
    timer = setTimeout(function () {
      fn.call(context, args) // args是事件处理函数默认事件参数event  call绑定当前page对象
    }, gapTime)
  }
}

function stringToBase64 (str) {
  const data = str || []
  const arr = []
  for (var i = 0, j = data.length; i < j; ++i) {
    arr.push(str.charCodeAt(i))
  }
  const tmpUint8Array = new Uint8Array(arr)
  const base64 = wx.arrayBufferToBase64(tmpUint8Array)
  return base64
}

function base64ToString (base64) {
  const base64Str = base64 || []
  const arrayBuffer = wx.base64ToArrayBuffer(base64Str)
  const str = String.fromCharCode.apply(null, new Uint8Array(arrayBuffer))
  return str
}

module.exports = {
  formatTime: formatTime,
  throttle: throttle,
  debounce: debounce,
  stringToBase64: stringToBase64,
  base64ToString: base64ToString
}
