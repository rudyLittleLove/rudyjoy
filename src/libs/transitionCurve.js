// echarts曲线demo https://echarts.apache.org/examples/zh/editor.html?c=line-easing

export const linear = k => {
  return k
}

export const quadraticIn = k => {
  return k * k
}

export const quadraticOut = k => {
  return k * (2 - k)
}

export const quadraticInOut = k => {
  if ((k *= 2) < 1) {
    return 0.5 * k * k
  }
  return -0.5 * (--k * (k - 2) - 1)
}

export const cubicIn = k => {
  return k * k * k
}

export const cubicOut = k => {
  return --k * k * k + 1
}

export const cubicInOut = k => {
  if ((k *= 2) < 1) {
    return 0.5 * k * k * k
  }
  return 0.5 * ((k -= 2) * k * k + 2)
}

export const quarticIn = k => {
  return k * k * k * k
}

export const quarticOut = k => {
  return 1 - --k * k * k * k
}

export const quarticInOut = k => {
  if ((k *= 2) < 1) {
    return 0.5 * k * k * k * k
  }
  return -0.5 * ((k -= 2) * k * k * k - 2)
}

export const quinticIn = k => {
  return k * k * k * k * k
}

export const quinticOut = k => {
  return --k * k * k * k * k + 1
}

export const quinticInOut = k => {
  if ((k *= 2) < 1) {
    return 0.5 * k * k * k * k * k
  }
  return 0.5 * ((k -= 2) * k * k * k * k + 2)
}

export const sinusoidalIn = k => {
  return 1 - Math.cos((k * Math.PI) / 2)
}

export const sinusoidalOut = k => {
  return Math.sin((k * Math.PI) / 2)
}

export const sinusoidalInOut = k => {
  return 0.5 * (1 - Math.cos(Math.PI * k))
}

export const exponentialIn = k => {
  return k === 0 ? 0 : Math.pow(1024, k - 1)
}

export const exponentialOut = k => {
  return k === 1 ? 1 : 1 - Math.pow(2, -10 * k)
}

export const exponentialInOut = k => {
  if (k === 0) {
    return 0
  }
  if (k === 1) {
    return 1
  }
  if ((k *= 2) < 1) {
    return 0.5 * Math.pow(1024, k - 1)
  }
  return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2)
}

export const circularIn = k => {
  return 1 - Math.sqrt(1 - k * k)
}

export const circularOut = k => {
  return Math.sqrt(1 - --k * k)
}

export const circularInOut = k => {
  if ((k *= 2) < 1) {
    return -0.5 * (Math.sqrt(1 - k * k) - 1)
  }
  return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1)
}

export const elasticIn = k => {
  var s
  var a = 0.1
  var p = 0.4
  if (k === 0) {
    return 0
  }
  if (k === 1) {
    return 1
  }
  if (!a || a < 1) {
    a = 1
    s = p / 4
  } else {
    s = (p * Math.asin(1 / a)) / (2 * Math.PI)
  }
  return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin(((k - s) * (2 * Math.PI)) / p))
}

export const elasticOut = k => {
  var s
  var a = 0.1
  var p = 0.4
  if (k === 0) {
    return 0
  }
  if (k === 1) {
    return 1
  }
  if (!a || a < 1) {
    a = 1
    s = p / 4
  } else {
    s = (p * Math.asin(1 / a)) / (2 * Math.PI)
  }
  return a * Math.pow(2, -10 * k) * Math.sin(((k - s) * (2 * Math.PI)) / p) + 1
}

export const elasticInOut = k => {
  var s
  var a = 0.1
  var p = 0.4
  if (k === 0) {
    return 0
  }
  if (k === 1) {
    return 1
  }
  if (!a || a < 1) {
    a = 1
    s = p / 4
  } else {
    s = (p * Math.asin(1 / a)) / (2 * Math.PI)
  }
  if ((k *= 2) < 1) {
    return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin(((k - s) * (2 * Math.PI)) / p))
  }
  return a * Math.pow(2, -10 * (k -= 1)) * Math.sin(((k - s) * (2 * Math.PI)) / p) * 0.5 + 1
}

// 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动

export const backIn = k => {
  var s = 1.70158
  return k * k * ((s + 1) * k - s)
}

export const backOut = k => {
  var s = 1.70158
  return --k * k * ((s + 1) * k + s) + 1
}

export const backInOut = k => {
  var s = 1.70158 * 1.525
  if ((k *= 2) < 1) {
    return 0.5 * (k * k * ((s + 1) * k - s))
  }
  return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2)
}

// 创建弹跳效果

export const bounceIn = k => {
  return 1 - bounceOut(1 - k)
}

export const bounceOut = k => {
  if (k < 1 / 2.75) {
    return 7.5625 * k * k
  } else if (k < 2 / 2.75) {
    return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75
  } else if (k < 2.5 / 2.75) {
    return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375
  } else {
    return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375
  }
}

export const bounceInOut = k => {
  if (k < 0.5) {
    return bounceIn(k * 2) * 0.5
  }
  return bounceOut(k * 2 - 1) * 0.5 + 0.5
}
