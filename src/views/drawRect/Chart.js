var cursorOrigin = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTCsrKywsLCwsLCwsLCwsLC0tLSsrKysrKywsLCwsLF+FYgIAAAAKdFJOUwDbpolpVR++POxWo9vwAAAACXBIWXMAAA'

var cursorObj = {
  topLeft: cursorOrigin + 'BIAAAASABGyWs+AAAAcElEQVQY02NgIAkwiyBxmFYpIDhsWgsR7ODCVQIwjtaqVasKoOzOVQuVVjZAjVq1JMFqKVQiankCwyoHCJsDZKwLzI6VSBZmLUXieAkgXGVghXAJ4+Iq5yUwDssqKSmEJqBTDBDqVokimSaUQFpAAAAaxhfufphoDgAAAABJRU5ErkJggg==',
  topRight: cursorOrigin + '7DAAAOwwHHb6hkAAAAcklEQVQoz2MgHjgaINhMq5A4UosRbMZV4iYJCFWrVi1qgHLYpEQUVy2FSUUtZoiEm8G8ioFBawVMKoSBgX0lkr1sqxSQeF7LkDhZS5E4jIuT4I7yMlquJQDnLFq4ygHGYQE6CaEncpUAgsNRyEAkYGAAAJQxGDnnsRYIAAAAAElFTkSuQmCC',
  bottomRight: cursorOrigin + '7DAAAOwwHHb6hkAAAAcklEQVQoz2MgDbApInECVwnA2cyrVi2Cc6IWLlzlAON4mSy3QqhjWsxsAOcwLkEyLWoZEmeWApThAtSyqgHCZlnFwFa1FKZ8MZvXKqhRHLOUpFbNgEqwr0JyCuMqcdMEuKlSixBsoLEKSBY6GjCQABgYAIwGGDlIwfKAAAAAAElFTkSuQmCC',
  bottomLeft: cursorOrigin + '7DAAAOwwHHb6hkAAAAcUlEQVQoz2MgHog3INiMq6YiOFqrVjnA2CyrpLSWwFUtqlKGc5jVrASQTItahsTJWoLEYVqVgMSbVcDA4ArjdC1iYFhlADMQ6AarpXDzVgk5LoRp5AA6aZUCTIrNuXAVktVWCxFsZoQqIEeEgUjAwAAAovwX7pgO89kAAAAASUVORK5CYII='
}

class chart {
  // 初始构造器
  constructor(params) {
    this.wrapDom = params.el
    var wrapDomStyle = getComputedStyle(params.el)
    this.width = parseInt(wrapDomStyle.width, 10)
    this.height = parseInt(wrapDomStyle.height, 10)

    // 创建canvas画布
    this.El = document.createElement('canvas')
    this.El.height = this.height
    this.El.width = this.width
    this.ctx = this.El.getContext('2d')

    params.el.appendChild(this.El)

    // 因为canvas是基于状态绘制的，也就是设置了缩放值
    // 再绘制的元素才会根据缩放倍数绘制，因此需要把每个绘制的对象保存起来。
    this.data = []
    this.scale = 1 // 默认缩放值是 1

    // 缩放具体实现会用到，下面会讲，现在可以不看
    this.maxScale = 3 // 最大缩放值
    this.minScale = 1 // 最小缩放值
    this.step = 0.1 // 缩放率
    this.offsetX = 0 // 画布X轴偏移值
    this.offsetY = 0 // 画布Y轴偏移值

    // 待移动形状
    this.activeShape = null
    this.isConversion = false
    this.currentItem = null

    // 添加滚轮判断事件
    this.addScaleFunc()

    // 添加拖拽事件
    this.addDragFunc()

    this.El.addEventListener('mousedown', this.rotateAddEvent)
    this.El.addEventListener('click', () => {
      this.El.removeEventListener('mousemove', this.rotateMoveEvent)
    })
  }

  // 添加缩放功能，判断时机注册移除MouseWhell事件
  addScaleFunc() {
    this.El.addEventListener('mouseenter', this.addMouseWhell)
    this.El.addEventListener('mouseleave', this.removeMouseWhell)
  }

  // 添加 mousewhell 事件
  addMouseWhell = () => {
    document.addEventListener('mousewheel', this.scrollFunc, { passive: false })
  }

  // 移除mousewhell 事件
  removeMouseWhell = () => {
    document.removeEventListener('mousewheel', this.scrollFunc, { passive: false })
  }

  // 缩放画布具体实现
  scrollFunc = e => {
    // 阻止默认事件 （缩放时外部容器禁止滚动）
    e.preventDefault()

    if (e.wheelDelta) {
      var x = e.offsetX - this.offsetX
      var y = e.offsetY - this.offsetY

      var offsetX = (x / this.scale) * this.step
      var offsetY = (y / this.scale) * this.step

      if (e.wheelDelta > 0) {
        this.offsetX -= this.scale >= this.maxScale ? 0 : offsetX
        this.offsetY -= this.scale >= this.maxScale ? 0 : offsetY

        this.scale += this.step
      } else {
        this.offsetX += this.scale <= this.minScale ? 0 : offsetX
        this.offsetY += this.scale <= this.minScale ? 0 : offsetY

        this.scale -= this.step
      }

      this.scale = Math.min(this.maxScale, Math.max(this.scale, this.minScale))

      this.render()
    }
  }

  // 添加拖拽功能，判断时机注册移除 拖拽 功能
  addDragFunc() {
    this.El.addEventListener('mousedown', this.addMouseMove)
    document.addEventListener('mouseup', this.removeMouseMove)

    // 变型注册事件
    this.El.addEventListener('click', e => {
      this.targetX = e.offsetX
      this.targetY = e.offsetY

      var x = (this.targetX - this.offsetX) / this.scale
      var y = (this.targetY - this.offsetY) / this.scale

      let item = this.data.find(v => v.type === 'img')
      this.currentItem = item

      if (item && this.isInnerPolygon([x, y], item.data)) {
        this.isConversion = true
        item.current = true
        this.El.addEventListener('mousemove', this.hasCurrentAngle, false)
      } else {
        this.El.removeEventListener('mousemove', this.hasCurrentAngle, false)
        this.isConversion = false
        item.current = false
      }

      this.render()
    })
  }

  hasCurrentAngle = e => {
    this.targetX = e.offsetX
    this.targetY = e.offsetY

    var x = (this.targetX - this.offsetX) / this.scale
    var y = (this.targetY - this.offsetY) / this.scale

    this.wrapDom.style.cursor = ''
    if (!this.isInnerPolygon([x, y], this.currentItem.data)) {
      if (this.isInnerCircle(...this.currentItem.data[0], 40, x, y) || this.isInnerCircle(...this.currentItem.data[1], 40, x, y) || this.isInnerCircle(...this.currentItem.data[2], 40, x, y) || this.isInnerCircle(...this.currentItem.data[3], 40, x, y)) {
        let cx = this.currentItem.center[0]
        let cy = this.currentItem.center[1]

        let indexs = [x < cx && y < cy, x > cx && y < cy, x > cx && y > cy, x < cx && y > cy]

        this.wrapDom.style.cursor = `url("${cursorObj[['topLeft', 'topRight', 'bottomRight', 'bottomLeft'][indexs.indexOf(true)]]}"), alias`
      }
    }
  }

  // 滚动注册事件
  rotateAddEvent = e => {
    if ((this.wrapDom.style.cursor || '').includes(', alias')) {
      this.rotateOriginX = (e.offsetX - this.offsetX) / this.scale
      this.rotateOriginY = (e.offsetY - this.offsetY) / this.scale
      this.El.addEventListener('mousemove', this.rotateMoveEvent)
    }
  }

  // 旋转移动事件
  rotateMoveEvent = e => {
    this.targetX = e.offsetX
    this.targetY = e.offsetY

    // 保存 旋转中心，上一次坐标，当前坐标 计算旋转角度
    let xa = this.currentItem.center[0]
    let ya = this.currentItem.center[1]

    let xb = this.rotateOriginX
    let yb = this.rotateOriginY

    let xc = (this.targetX - this.offsetX) / this.scale
    let yc = (this.targetY - this.offsetY) / this.scale

    let deg = this.getCosVal(xa, ya, xb, yb, xc, yc)

    let deg1 = this.getCosVal(xa, ya, xa, ya - 10, xb, yb)
    let deg2 = this.getCosVal(xa, ya, xa, ya - 10, xc, yc)

    let rad = ((2 * Math.PI) / 360) * deg

    rad *= deg2 - deg1 < 0 ? -1 : 1

    if (xc < xa) {
      rad *= -1
    }
    this.currentItem.deg = rad > 0 ? this.currentItem.deg + deg : this.currentItem.deg - deg

    this.currentItem.data = this.currentItem.data.map(v => {
      v = this.getXY(rad, ...v, xa, ya)
      return v
    })

    this.render()

    this.rotateOriginX = xc
    this.rotateOriginY = yc
  }

  getCosVal(xa, ya, xb, yb, xc, yc) {
    let a = Math.sqrt(Math.pow(xa - xb, 2) + Math.pow(ya - yb, 2))
    let b = Math.sqrt(Math.pow(xa - xc, 2) + Math.pow(ya - yc, 2))
    let c = Math.sqrt(Math.pow(xb - xc, 2) + Math.pow(yb - yc, 2))

    let cosc = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b)

    let deg = (Math.acos(cosc) * 180) / Math.PI

    return deg
  }

  getXY(q, x1, y1, x0, y0) {
    let x2 = Math.cos(q) * (x1 - x0) - Math.sin(q) * (y1 - y0) + x0
    let y2 = Math.sin(q) * (x1 - x0) + Math.cos(q) * (y1 - y0) + y0
    return [x2, y2]
  }

  // 添加鼠标移动 功能，获取保存当前点击坐标
  addMouseMove = e => {
    if (this.isConversion) {
      return false
    }

    this.targetX = e.offsetX
    this.targetY = e.offsetY

    this.mousedownOriginX = this.offsetX
    this.mousedownOriginY = this.offsetY

    var x = (this.targetX - this.offsetX) / this.scale
    var y = (this.targetY - this.offsetY) / this.scale

    this.activeShape = null

    this.data.forEach(item => {
      switch (item.type) {
        case 'img':
        case 'polygon':
          this.isInnerPolygon([x, y], item.data) && (this.activeShape = item)
          break
        case 'rect':
          this.isInnerRect(...item.data, x, y) && (this.activeShape = item)
          break
        case 'circle':
          this.isInnerCircle(item.x, item.y, item.r, x, y) && (this.activeShape = item)
          break
        case 'line':
          var lineNumber = item.data.length / 2 - 1
          var flag = false
          for (let i = 0; i < lineNumber; i++) {
            let index = i * 2
            flag = this.isInnerPath(item.data[index], item.data[index + 1], item.data[index + 2], item.data[index + 3], x, y, item.lineWidth || 1)
            if (flag) {
              this.activeShape = item
              break
            }
          }
      }
    })

    if (!this.activeShape) {
      this.wrapDom.style.cursor = 'grabbing'

      this.El.addEventListener('mousemove', this.moveCanvasFunc, false)
    } else {
      this.wrapDom.style.cursor = 'all-scroll'
      this.shapedOldX = null
      this.shapedOldY = null
      this.El.addEventListener('mousemove', this.moveShapeFunc, false)
    }
  }

  // 移除鼠标移动事件
  removeMouseMove = () => {
    this.wrapDom.style.cursor = ''
    this.El.removeEventListener('mousemove', this.moveCanvasFunc, false)
    this.El.removeEventListener('mousemove', this.moveShapeFunc, false)
  }

  // 移动画布
  moveCanvasFunc = e => {
    // 获取 最大可移动宽
    var maxMoveX = this.El.width / 2
    var maxMoveY = this.El.height / 2

    var offsetX = this.mousedownOriginX + (e.offsetX - this.targetX)
    var offsetY = this.mousedownOriginY + (e.offsetY - this.targetY)

    this.offsetX = Math.abs(offsetX) > maxMoveX ? this.offsetX : offsetX
    this.offsetY = Math.abs(offsetY) > maxMoveY ? this.offsetY : offsetY

    this.render()
  }

  // 移动形状
  moveShapeFunc = e => {
    var moveX = e.offsetX - (this.shapedOldX || this.targetX)
    var moveY = e.offsetY - (this.shapedOldY || this.targetY)

    moveX /= this.scale
    moveY /= this.scale

    switch (this.activeShape.type) {
      case 'img':
        var x1 = this.activeShape.data[0][0]
        var y1 = this.activeShape.data[0][1]
        this.activeShape.data.forEach(v => {
          v[0] += moveX
          v[1] += moveY
        })
        var x2 = this.activeShape.data[2][0]
        var y2 = this.activeShape.data[2][1]
        this.activeShape.center = [x1 + (x2 - x1) / 2, y1 + (y2 - y1) / 2]
        break
      case 'polygon':
        this.activeShape.data.forEach(v => {
          v[0] += moveX
          v[1] += moveY
        })
        break
      case 'rect':
        var x = this.activeShape.data[0]
        var y = this.activeShape.data[1]
        var width = this.activeShape.data[2]
        var height = this.activeShape.data[3]
        this.activeShape.data = [x + moveX, y + moveY, width, height]
        break
      case 'circle':
        this.activeShape.x += moveX
        this.activeShape.y += moveY
        break
      case 'line':
        var item = this.activeShape
        var lineNumber = item.data.length / 2
        for (let i = 0; i < lineNumber; i++) {
          let index = i * 2
          item.data[index] += moveX
          item.data[index + 1] += moveY
        }
    }
    this.shapedOldX = e.offsetX
    this.shapedOldY = e.offsetY

    this.render()
  }
  // 判断是否在矩形框内
  isInnerRect(x0, y0, width, height, x, y) {
    return x0 <= x && y0 <= y && x0 + width >= x && y0 + height >= y
  }
  // 判断是否在圆形内
  isInnerCircle(x0, y0, r, x, y) {
    return Math.pow(x0 - x, 2) + Math.pow(y0 - y, 2) <= Math.pow(r, 2)
  }
  // 判断是否在路径上
  isInnerPath(x0, y0, x1, y1, x, y, lineWidth) {
    var a1pow = Math.pow(x0 - x, 2) + Math.pow(y0 - y, 2)
    var a1 = Math.sqrt(a1pow, 2)
    var a2pow = Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2)
    var a2 = Math.sqrt(a2pow, 2)

    var a3pow = Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)
    var a3 = Math.sqrt(a3pow, 2)

    var r = lineWidth / 2
    var ab = (a1pow - a2pow + a3pow) / (2 * a3)
    var h = Math.sqrt(a1pow - Math.pow(ab, 2), 2)

    var ad = Math.sqrt(Math.pow(a3, 2) + Math.pow(r, 2))

    return h <= r && a1 <= ad && a2 <= ad
  }

  // 判断是否处于几何形状内
  isInnerPolygon(point, vs) {
    var x = point[0],
      y = point[1]
    var inside = false

    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      var xi = vs[i][0],
        yi = vs[i][1]
      var xj = vs[j][0],
        yj = vs[j][1]

      var intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
      if (intersect) inside = !inside
    }

    return inside
  }

  // 绘制圆形
  drawCircle(data) {
    this.ctx.beginPath()
    this.ctx.fillStyle = data.fillStyle || 'red'
    this.ctx.arc(data.x, data.y, data.r, 0, 2 * Math.PI)
    this.ctx.fill()
  }

  // 绘制线条方法
  drawLine(data) {
    var arr = data.data.concat()
    var ctx = ctx || this.ctx

    ctx.beginPath()
    ctx.moveTo(arr.shift(), arr.shift())
    ctx.lineWidth = data.lineWidth || 1
    do {
      ctx.lineTo(arr.shift(), arr.shift())
    } while (arr.length)

    ctx.stroke()
  }

  //  绘制矩形方法
  drawRect(data) {
    this.ctx.beginPath()
    this.ctx.fillStyle = data.fillStyle
    this.ctx.fillRect(...data.data)
  }

  // 绘制形状
  drawPolygon(data) {
    var arr = data.data.concat()
    var ctx = ctx || this.ctx

    ctx.beginPath()
    ctx.moveTo(...arr.shift())
    ctx.lineWidth = data.lineWidth || 1
    ctx.fillStyle = data.fillStyle || 'transparent'
    do {
      ctx.lineTo(...arr.shift())
    } while (arr.length)

    ctx.closePath()

    ctx.stroke()
    ctx.fill()
  }

  // 绘制图片
  drawImg(data) {
    if (data.current) {
      data.data.forEach(v => {
        this.drawCircle({ x: v[0], y: v[1], r: 40, fillStyle: 'rgba(0, 0, 0, .3)' })
      })
    }

    let rotateX = data.center[0] * this.scale + this.offsetX
    let rotateY = data.center[1] * this.scale + this.offsetY

    this.ctx.setTransform(this.scale, 0, 0, this.scale, rotateX, rotateY)
    this.ctx.rotate((data.deg * Math.PI) / 180)

    this.ctx.drawImage(data.img, -(data.img.width / 2), -(data.img.height / 2), data.img.width, data.img.height)

    this.ctx.setTransform(this.scale, 0, 0, this.scale, this.offsetX, this.offsetY)

    if (data.current) {
      this.drawPolygon(data)
      this.drawCircle({ x: data.center[0], y: data.center[1], r: 10 })
    }
  }

  // 图片渲染格式化
  formatImg(data, callback) {
    let img = document.createElement('img')
    img.src = data
    img.onload = () => {
      callback(img)
    }
  }

  // 渲染整个 图形画布
  render() {
    this.El.width = this.width

    this.data.forEach(item => {
      this.draw(item)
    })

    // var image = new Image();

    // image.src = this.El.toDataURL("image/png");
    // document.body.appendChild(image)
  }

  // 判断类型绘制的方法
  draw(item) {
    this.ctx.setTransform(this.scale, 0, 0, this.scale, this.offsetX, this.offsetY)
    switch (item.type) {
      case 'img':
        this.drawImg(item)
        break
      case 'polygon':
        this.drawPolygon(item)
        break
      case 'line':
        this.drawLine(item)
        break
      case 'rect':
        this.drawRect(item)
        break
      case 'circle':
        this.drawCircle(item)
        break
    }
  }

  // 添加形状
  push(data) {
    this.data.push(data)
    this.draw(data)
  }
}

export default chart
