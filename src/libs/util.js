// byte转换
const bytesToSize = bytes => {
  // 纵坐标出现0, 0.2, 0.4, 0.6...小于1B的情况处理
  if (bytes === 0 || (typeof bytes === 'string' && parseFloat(bytes) === 0)) {
    return '0 B'
  } else if (bytes < 1 || (typeof bytes === 'string' && parseFloat(bytes) < 1)) {
    return bytes + 'B'
  }

  var k = 1024
  var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  var i = Math.floor(Math.log(bytes) / Math.log(k))

  var num = bytes / Math.pow(k, i)
  // 小于1B的情况
  if (!sizes[i]) {
    return (num / 1000).toFixed(1) + ' ' + 'B'
  }
  return num.toFixed(2) + ' ' + sizes[i]
}

export { bytesToSize }
