import { addResizeListener, removeResizeListener } from '@/libs/resize-event'
import { quadraticOut } from '@/libs/transitionCurve.js'

export default {
  data() {
    return {
      canvasWrap: null,
      tableMenu: null,
      tableRule: null,
      chart: null,

      ctx: null,
      ctxRule: null,
      ctxFixed: null,
      ctxMenu: null,

      position: {},

      wrapWidth: 0,
      wrapHeight: 0,
      canvasHeight: 0,

      translateX: 0,
      translateY: 0,

      // 图表内 标尺 尺寸
      rowHeight: 40,
      rowHegihtOptions: [40, 45, 50, 55, 60, 65],
      colw: 40,
      colWidth: 200,
      // ruleHeight: 24,
      // tipHeight: 26,
      lineWidth: 1,
      fontSize: 16,
      fontFamily: 'Microsoft YaHei Regular',
      tableBgColor: 'transparent',
      tableHoverBgColor: 'rgba(45, 140, 240, .1)',
      tableLevel3BgColor: 'rgba(0, 0, 0, .04)',
      innerWrapBgColor: '#EEF6FD',
      lineColor: '#DBE2E8',
      fillStyle: 'transparent',
      tickTextColor: '#84A6C3',
      pileStrColor: '#58718A',
      inOutIconBgColor: '#90A5BA',
      inOutIconColor: '#ffffff',
      fontColor: '#000000',
      tickFontSize: 14,
      tickLength: 8,
      offset: 0.5, // 偏移0.5促使渲染精细
      scrollStep: 20,
      ruleStep: 400,
      preMeterToPx: 4,
      meterToPx: 4,
      stepPx: 0.5,
      // ruleStepMax: 10,
      // ruleStepMin: 2,
      meterToPxMin: 1,
      meterToPxMax: 30,
      ruleStepVal: 100,
      faceWidth: 8,
      zeroWidth: 8,

      romeNumber: ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ', 'Ⅶ', 'Ⅷ', 'Ⅸ', 'Ⅹ'],
      levelColor: ['#4ECB73', '#2DB7F5', '#FAD337', '#FF9900', '#F86F00', '#ED3F14'],
      rectColor: ['#C5C9D0', '#FF582F', '#FF8F34', '#FDC500', '#3D87FF', '#29CC95'],
      rectHoverColor: ['#cccccc', '#FC7858', '#FAAE70', '#F7D965', '#84B3FE', '#64D9B4'],
      minStripe: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAgMAAACdogfbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURf///////////45K5f4AAAADdFJOUwQ/Ta3MexMAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAaSURBVAjXY2BzYJBkYEhhYJggwOCQwMA4AQASZAKV6dxVvQAAAABJRU5ErkJggg==',
      maxStripe: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhAQMAAACC6DsSAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURf///0dwTHBCPHYAAAACdFJOUx4AotLy5wAAAAlwSFlzAAAASAAAAEgARslrPgAAAFpJREFUCNeNzLENwCAUA9H7SkHJCBklo8FojMIIlCkQjokyQCTrqiejm4QGGXVO1LhQpSC8RYjJIczE2DETbady7cj0TWhi6yTfkn1r1jFrUHz7sfWHYRaYxQM150HTObrW+AAAAABJRU5ErkJggg==',
      minStripeColor: null,
      maxStripeColor: null,

      scale: 1,
      // 鼠标位置
      targetX: 0,
      targetY: 0,

      animationStepX: 0,
      animationStepY: 0,
      stepTime: 0,

      data: [],
      rootData: [
        {
          type: 'stair',
          level: 1,
          text: '隧道全程桩号',
          fixed: 'xy',
          sort: -1
        },
        {
          type: 'stair',
          level: 1,
          text: '设计围岩级别',
          fixed: 'y',
          data: [
            {
              start: 0,
              end: 100,
              level: 0
            }
          ]
        }
      ],
      fixedData:
        '[{"type":"multistage","level":1,"text":"施工进度","expand":true,"subList":[{"text":"开挖","tip":"100%","level":2,"color":"#2D8CF0","stripe":"thick","data":[{"start":0,"end":100,"level":0},{"start":100,"end":200,"level":3},{"start":200,"end":350,"level":2},{"start":370,"end":480,"level":4},{"start":480,"end":810,"level":5}]},{"text":"二次衬砌","tip":"5%","stripe":"thick","level":2}]},{"type":"multistage","level":1,"text":"质量检查","expand":false,"subList":[{"text":"初期支护","tip":"10%","level":2,"stripe":"thin","data":[{"start":0,"end":100,"level":0},{"start":100,"end":200,"level":3},{"start":200,"end":350,"level":2},{"start":370,"end":480,"level":4},{"start":480,"end":810,"level":5}]},{"text":"二次衬砌","tip":"5%","stripe":"thin","level":2}]},{"type":"multistage","level":1,"text":"工序影像","expand":true,"subList":[{"level":2,"text":"明洞衬砌","info":"明洞及洞门","data":[{"start":50,"end":54,"level":0},{"start":100,"end":200,"level":3},{"start":200,"end":350,"level":2},{"start":370,"end":480,"level":4},{"start":480,"end":810,"level":1},{"start":980,"end":1100,"level":5},{"start":1480,"end":1550,"level":5},{"start":2480,"end":2500,"level":3}],"expand":true,"subList":[{"text":"基础","level":3},{"text":"钢筋","level":3}]},{"level":2,"text":"明洞及洞门","info":"明洞及洞门","expand":false,"data":[{"start":200,"end":350,"level":2},{"start":370,"end":480,"level":4},{"start":480,"end":810,"level":1},{"start":980,"end":1100,"level":5},{"start":1480,"end":1550,"level":5},{"start":2480,"end":2500,"level":3}],"subList":[{"text":"基础","level":3,"data":[{"start":380,"end":600,"level":3},{"start":5400,"end":5500,"level":4}]},{"text":"钢筋","level":3}]}]}]',
      extData: '[{"type":"multistage","level":1,"text":"施工进度","expand":true,"subList":[{"text":"开挖","tip":"100%","level":2,"color":"#2D8CF0","stripe":"thick","data":[{"start":0,"end":100,"level":0},{"start":100,"end":200,"level":3},{"start":200,"end":350,"level":2},{"start":370,"end":480,"level":4},{"start":480,"end":810,"level":5}]},{"text":"二次衬砌","tip":"5%","stripe":"thick","level":2}]},{"type":"multistage","level":1,"text":"质量检查","expand":false,"subList":[{"text":"初期支护","tip":"10%","level":2,"stripe":"thin","data":[{"start":0,"end":100,"level":0},{"start":100,"end":200,"level":3},{"start":200,"end":350,"level":2},{"start":370,"end":480,"level":4},{"start":480,"end":810,"level":5}]},{"text":"二次衬砌","tip":"5%","stripe":"thin","level":2}]}]',
      rules: {},
      tableLine: {},
      shaft: {},

      startPileNo: 150,
      endPileNo: 700,
      startPileStr: '',
      endPileStr: '',
      current: null,
      rowIndex: -1,
      tunnelWidth: 0,
      tableWidth: 0,
      tableHeight: 0,
      contentStartX: 0,
      contentEndX: 0,
      contentPosition: [0, 0, 0, 0],

      // 拖拽
      oldDownX: 0,
      oldDownY: 0,

      mouseDownX: 0,
      mouseDownY: 0,

      lineTableData: []
    }
  },
  computed: {
    ruleHeight() {
      return this.rowHeight * 0.48
    },
    tipHeight() {
      return this.rowHeight * 0.52
    },
    lineRectData() {
      return this.lineTableData.filter(v => v.data || (!v.expand && v.fixed !== 'xy'))
    }
    // 米与像素比 值
    // meterPx () {
    //   return this.ruleStep / this.ruleStepVal
    // }
  },
  mounted() {
    addResizeListener(this.$refs.canvasWrap, this.listenVessel)
  },
  methods: {
    init() {
      this.canvasWrap = this.$refs.canvasWrap

      this.canvasWrap.style.backgroundColor = '#ffffff'
      this.canvasWrap.className = `${this.canvasWrap.className} canvas-container`

      this.tableFixed = document.createElement('canvas')
      this.tableMenu = document.createElement('canvas')
      this.tableRule = document.createElement('canvas')
      this.chart = document.createElement('canvas')

      this.canvasWrap.appendChild(this.chart)
      this.canvasWrap.appendChild(this.tableRule)
      this.canvasWrap.appendChild(this.tableMenu)
      this.canvasWrap.appendChild(this.tableFixed)

      this.ctx = this.ctx || this.chart.getContext('2d')
      this.ctxMenu = this.ctxMenu || this.tableMenu.getContext('2d')
      this.ctxFixed = this.ctxFixed || this.tableFixed.getContext('2d')
      this.ctxRule = this.ctxRule || this.tableRule.getContext('2d')

      // 创建平铺色
      let img = new Image()
      img.src = this.minStripe
      img.onload = () => {
        this.minStripeColor = this.ctx.createPattern(img, 'repeat')
      }
      let img2 = new Image()
      img2.src = this.maxStripe
      img2.onload = () => {
        this.maxStripeColor = this.ctx.createPattern(img2, 'repeat')
      }

      this.listenVessel()
      this.$nextTick(() => {
        this.initEvent()
      })
    },
    initEvent() {
      this.position = this.canvasWrap.getBoundingClientRect()

      this.canvasWrap.addEventListener('mousemove', this.addMouseMove)
      this.canvasWrap.addEventListener('mouseleave', this.addMouseLeave)
      this.canvasWrap.addEventListener('click', this.addMouseClick)
      this.canvasWrap.addEventListener('mousedown', this.addMouseDown)
      document.addEventListener('mouseup', this.addMouseUp)
      this.canvasWrap.addEventListener('mouseenter', this.addMouseWhell)
    },

    // 监听容器大小切换
    listenVessel() {
      clearTimeout(this.timer)
      if (this.canvasWrap) {
        this.timer = setTimeout(() => {
          this.tableRule.width = this.tableFixed.width = this.chart.width = this.tableMenu.width = this.wrapWidth = this.canvasWrap.clientWidth
          this.tableRule.height = this.tableFixed.height = this.chart.height = this.tableMenu.height = this.wrapHeight = this.canvasWrap.clientHeight
          this.renderAll()
        }, 50)
      }
    },

    // 添加鼠标移动事件
    addMouseMove(e) {
      this.targetX = e.offsetX
      this.targetY = e.offsetY

      let x = this.targetX * this.scale
      let y = this.targetY * this.scale

      let xs = x - this.translateX * this.scale
      let ys = y - this.translateY * this.scale

      let flag = false
      switch (true) {
        // 标尺 桩号展示判断
        case this.targetY < this.ruleHeight && this.targetX > this.colWidth:
          flag = true
          var base = this.ruleStepVal / this.ruleStep
          var length = (this.targetX - this.colWidth) * base - this.translateX * base + this.startPileNo

          this.current = {
            tooltip: `K${Math.floor(length / 1000)}+${Math.round(length % 1000)}`,
            placement: 'rule',
            tooltipXY: [this.targetX, 0]
          }
          break
        case this.targetY < this.rowHeight:
          break
        // 左侧menu判断
        case this.targetX < this.colWidth && this.targetY > this.rowHeight * 2:
          this.lineTableData.forEach(v => {
            if (!v.fixed && this.isInnerPolygon([x, ys], v.crd)) {
              flag = true
              this.current = v
            }
          })
          break
        // 围岩级别判断
        case this.targetY < this.rowHeight * 2 && this.targetX > this.colWidth:
          var rowLine = this.lineRectData[0]
          rowLine &&
            rowLine.rect.forEach(v => {
              if (this.isInnerPolygon([xs, y], v.crd)) {
                flag = true
                v.placement = 'top'
                v.tooltipXY = [this.targetX, v.crd[1][1]]
                this.current = v
              }
            })
          break
        // 非围岩级别矩形框
        case this.targetY > this.rowHeight * 2 && this.targetX > this.colWidth:
          var rowIndex = Math.floor(ys / this.rowHeight) - 1
          var row = this.lineRectData[rowIndex]
          row &&
            row.rect.forEach(v => {
              if (this.isInnerPolygon([xs, ys], v.crd)) {
                flag = true
                v.placement = 'top'
                v.tooltipXY = [this.targetX, v.crd[1][1] + this.translateY]
                this.current = v
              }
            })
      }

      if (!flag) this.current = null
    },
    addMouseLeave() {
      this.current = null
      this.removeMouseWhell()
    },
    addMouseClick(e) {
      if (Math.abs(this.mouseDownX - e.offsetX) > 2 || Math.abs(this.mouseDownY - e.offsetY) > 2) {
        // 点击移动后，阻止触发点击事件
        return
      }

      switch (true) {
        case this.current && this.current.expand !== undefined:
          this.current.expand = !this.current.expand
          this.calcLineTableData()
          this.renderAll()
          break
        case this.current && !!this.current.id && this.current.category === 'processIma':
          // console.log(this.current.id)
          this.modalInfo = {
            modal: true,
            title: '详情',
            id: this.current.id,
            readonly: true
          }
      }
    },
    // 添加 mousewhell 事件
    addMouseWhell() {
      this.canvasWrap.addEventListener('mousewheel', this.scrollFunc, { passive: false })
    },
    // 移除mousewhell 事件
    removeMouseWhell() {
      this.canvasWrap.removeEventListener('mousewheel', this.scrollFunc, { passive: false })
    },
    scrollFunc(e) {
      // 阻止默认事件 （缩放时外部容器禁止滚动）
      e.preventDefault()

      if (e.wheelDelta) {
        let ca = e.wheelDelta > 0 ? -1 : 1

        let isScroll = this.tableHeight > this.wrapHeight || this.tableWidth > this.wrapWidth
        if (e.shiftKey && this.tableWidth > this.wrapWidth) {
          this.$refs.scrollX.scrollLeft = this.$refs.scrollX.scrollLeft + this.scrollStep * ca * (e.altKey ? 8 : 1)
        } else if (e.ctrlKey) {
          this.meterToPx -= ca * this.stepPx * (e.altKey ? 4 : 1)
          this.meterToPx = this.meterToPx < this.meterToPxMin ? this.meterToPxMin : this.meterToPx
          this.meterToPx = this.meterToPx > this.meterToPxMax ? this.meterToPxMax : this.meterToPx

          let base = this.ruleStepVal / this.ruleStep
          let length = (e.offsetX - this.colWidth) * base - this.translateX * base

          this.ruleStep = this.meterToPx * this.ruleStepVal

          if (this.meterToPx < this.meterToPxMax) {
            this.current = null
            // 根据鼠标点缩放 偏移滚动条
            this.$refs.scrollX.scrollLeft = this.$refs.scrollX.scrollLeft - length * this.stepPx * ca * (e.altKey ? 4 : 1)
          }

          this.renderAll()
        } else if (isScroll) {
          this.current = null
          this.$refs.scrollY.scrollTop = this.$refs.scrollY.scrollTop + this.scrollStep * ca
        }
      }
    },

    addMouseDown(e) {
      this.oldDownX = e.pageX
      this.oldDownY = e.pageY

      this.mouseDownX = e.offsetX
      this.mouseDownY = e.offsetY

      clearTimeout(this.timer)

      if (e.offsetX > this.colWidth && e.offsetY > this.rowHeight * 2) {
        document.body.style.cursor = 'grabbing'
        document.onselectstart = () => false
        document.ondragstart = () => false
        document.addEventListener('mousemove', this.dragCanvas)
      }
    },
    addMouseUp() {
      document.body.style.cursor = ''
      document.onselectstart = () => null
      document.ondragstart = null
      document.removeEventListener('mousemove', this.dragCanvas)

      if (Date.now() - this.stepTime > 10) {
        return
      }

      let xMax = this.animationStepX * 60
      let yMax = this.animationStepY * 60

      let x = this.animationStepX
      let y = this.animationStepY

      let offsetX = 0
      let offsetY = 0

      let animationMove = () => {
        let oldX = offsetX
        let oldY = offsetY

        offsetX = quadraticOut(this.animationStepX / xMax) || 0
        offsetY = quadraticOut(this.animationStepY / yMax) || 0

        this.animationStepX += x
        this.animationStepY += y

        let left = this.$refs.scrollX.scrollLeft
        let top = this.$refs.scrollY.scrollTop

        let caX = (offsetX - oldX) * xMax
        let caY = (offsetY - oldY) * yMax

        this.$refs.scrollX.scrollLeft -= caX
        this.$refs.scrollY.scrollTop -= caY

        if (left === this.$refs.scrollX.scrollLeft && top === this.$refs.scrollY.scrollTop) {
          return
        }
        if (caX > -1 && caX < 1 && caY > -1 && caY < 1) {
          return
        }
        if (this.animationStepX !== xMax || this.animationStepY !== yMax) {
          this.timer = setTimeout(() => {
            animationMove()
          }, 25)
        }
      }

      animationMove()
    },
    // 拖拽
    dragCanvas(e) {
      let x = e.pageX
      let y = e.pageY

      let offsetX = x - this.oldDownX
      let offsetY = y - this.oldDownY

      this.animationStepX = offsetX
      this.animationStepY = offsetY
      this.stepTime = Date.now()

      this.oldDownX = x
      this.oldDownY = y

      this.$refs.scrollX.scrollLeft -= offsetX
      this.$refs.scrollY.scrollTop -= offsetY
    },
    // 计算元素渲染信息
    calcRender() {
      this.rowIndex = -1

      let recursion = arr => {
        arr.forEach((item, i) => {
          this.rowIndex++
          item.ado = []
          item.rect = []

          item.data && this.calcRect(item)

          switch (true) {
            // 一级 可折叠
            case item.type === 'multistage':
              this.calcTableVertical(item, i)
              break
            // 一级 不可折叠
            case item.type === 'stair':
              this.calcTableStair(item, i)
              break
            // 二、三级 可折叠
            case [2, 3].includes(item.level):
              this.calcTableLevel23(item, i)
              break
          }

          item.expand !== false && item.subList && item.subList.length && recursion(item.subList)
        })
      }
      recursion(this.data)

      // 计算table线条
      this.tableLine.ado = []
      for (let i = 1; i <= this.rowIndex; i++) {
        let y = (i + 1) * this.rowHeight + this.offset
        this.tableLine.ado.push({
          type: 'line',
          crd: [
            [this.colWidth, y],
            [this.wrapWidth, y]
          ],
          strokeStyle: this.lineColor,
          ctx: this.ctxMenu
        })
      }

      // 内容最大宽高度计算
      // let maxW = 0

      // this.lineRectData.forEach(v => {
      //   v.rect && v.rect.forEach(v2 => {
      //     let maxs = []
      //     v2.crd.forEach(v3 => {
      //       maxs.push(v3[0])
      //     })
      //     maxW = Math.max(...maxs, maxW)
      //   })
      // })
      // +10 +2 添加偏移量
      // + 20 添加偏移量
      // this.tableWidth = maxW + 10
      this.tableWidth = this.tunnelWidth
      this.tableHeight = this.rowHeight * (this.rowIndex + 1) + 2

      this.calcContentXY()
    },
    // 计算内容展示区域坐标
    calcContentXY() {
      this.contentStartX = -this.translateX
      this.contentEndX = this.wrapWidth - this.translateX
      this.contentStartY = -this.translateY
      this.contentEndY = this.wrapHeight - this.translateY

      this.contentPosition = [
        [this.contentStartX, this.contentStartY],
        [this.contentEndX, this.contentStartY],
        [this.contentEndX, this.contentEndY],
        [this.contentStartX, this.contentEndY]
      ]
    },
    // 计算容器内 矩形 样式
    calcRect(item, ctxAll) {
      let ry = this.rowIndex * this.rowHeight
      let ctx = ctxAll || (item.fixed === 'y' ? this.ctxRule : this.ctx)
      let color = item.fixed === 'y' ? this.levelColor : this.rectColor
      let hoverColor = item.fixed === 'y' ? this.levelColor : this.rectHoverColor

      item.data.forEach(v => {
        let rx = v.start * this.meterToPx + this.colWidth + 0.5
        let rMx = 0
        if (!v.end) {
          rMx = rx + this.faceWidth - 0.5
        } else {
          rMx = v.end * this.meterToPx + this.colWidth + 0.5
          rMx += rx === rMx ? this.zeroWidth : 0
        }
        let crd = [
          [rx, ry + 1.5],
          [rMx, ry + 1.5],
          [rMx, ry + this.rowHeight - 0.5],
          [rx, ry + this.rowHeight - 0.5]
        ]

        // 额外样式
        let ext = {}
        // ext.globalAlpha = 1
        if (item.stripe === 'thick') {
          ext.fillStyle = item.color
          ext.fillStripe = this.maxStripeColor
          ext.hoverFillStyle = undefined
        } else if (item.stripe === 'thin') {
          ext.fillStripe = this.minStripeColor
          ext.hoverFillStyle = undefined
        }

        // 添加掌子面 圆角
        if (!v.end) {
          ext.borderRadius = 4
        }

        let rectExt = {}
        if (v.tooltip) {
          rectExt.tooltip = v.tooltip
        }

        let extData = []
        if (v.levelCode) {
          extData.push({
            type: 'text',
            text: v.centerName,
            crd: [rx + (rMx - rx) / 2, ry + this.rowHeight / 2],
            fillStyle: '#ffffff',
            ctx
          })
        }

        item.rect.push({
          crd,
          ado: [
            {
              type: 'polygon',
              crd,
              // fillStyle: this.levelColor[v.level],
              fillStyle: color[v.level % color.length],
              hoverFillStyle: hoverColor[v.level % hoverColor.length],
              // stroke: false,
              strokeStyle: '#FFFFFF',
              ctx,
              ...ext
            },
            ...extData
          ],
          text: item.text,
          id: v.id,
          category: v.category,
          ...rectExt
        })
      })
    },
    // 计算一级可折叠 table 样式
    calcTableVertical(item, i, ctxAll) {
      let ctx = ctxAll || this.ctxMenu
      let { x, y } = this.destruction()

      let num = item.expand ? 0 : 1
      item.expand &&
        item.subList.forEach(v => {
          num++
          v.expand &&
            v.subList &&
            v.subList.length &&
            v.subList.forEach(() => {
              num++
            })
        })

      let height = num * this.rowHeight
      let yMax = y + height
      // 折叠中 渲染水平表格
      let ext = {}
      item.tooltip = ''
      if (!item.expand) {
        this.calcTableStair(item, i, this.ctxMenu)
        item.ado[0].hoverFillStyle = this.tableHoverBgColor
        let yc = y + this.rowHeight / 2 - 3
        let xc = x + 13
        // 绘制向下箭头
        item.ado.push({
          type: 'line',
          crd: [
            [xc, yc],
            [xc + 6, yc + 6],
            [xc + 12, yc]
          ],
          strokeStyle: '#e8eaec',
          lineWidth: 2,
          lineCap: 'round',
          ctx
        })
        return
      } else {
        let textw = this.getTextWidth(item.text, `font-size: ${this.fontSize}px`).width
        if (textw > height) {
          ext.text = item.text.substr(0, num * 2)
          item.tooltip = item.text
        }
      }

      let xMax = x + this.colw
      let xHalf = xMax / 2

      item.crd = [
        [x, y],
        [xMax, y],
        [xMax, yMax],
        [x, yMax]
      ]

      item.ado.push({
        type: 'polygon',
        crd: item.crd,
        fillStyle: this.tableBgColor,
        hoverFillStyle: this.tableHoverBgColor,
        ctx,
        ext
      })

      // 垂直渲染文字 单个循环绘制
      let arr = ext.text || item.text
      let lineHeight = this.fontSize * 1.3
      // 偏移量
      let y2 = y + height / 2 - lineHeight * (arr.length / 2) + 12

      arr.split('').forEach((v, i2) => {
        item.ado.push({
          type: 'text',
          text: v,
          crd: [xHalf, y2 + i2 * lineHeight],
          font: `bold ${this.fontSize}px ${this.fontFamily}`,
          ctx
        })
      })

      // 绘制向上箭头
      item.ado.push({
        type: 'line',
        crd: [
          [xHalf - 6, y + 16],
          [xHalf, y + 10],
          [xHalf + 6, y + 16]
        ],
        lineWidth: 2,
        strokeStyle: '#e8eaec',
        lineCap: 'round',
        ctx
      })
      this.rowIndex--
    },
    // 计算一级无下级table样式
    calcTableStair(item, i, ctx) {
      let { x, y } = this.destruction()

      item.crd = [
        [x, y],
        [x, y + this.rowHeight],
        [x + this.colWidth, y + this.rowHeight],
        [x + this.colWidth, y]
      ]
      item.ado.push({
        type: 'polygon',
        crd: item.crd,
        fillStyle: this.tableBgColor,
        ctx: ctx || this.ctxFixed
      })

      item.ado.push({
        type: 'text',
        text: item.text,
        crd: [(x + this.colWidth) / 2, y + this.rowHeight / 2],
        font: `bold ${this.fontSize}px ${this.fontFamily}`,
        ctx: ctx || this.ctxFixed
      })
    },
    // 计算二三级table 样式
    calcTableLevel23(item, i, ctxAll) {
      let ctx = ctxAll || this.ctxMenu
      let { x, y } = this.destruction()

      item.crd = [
        [x + this.colw, y],
        [x + this.colWidth, y],
        [x + this.colWidth, y + this.rowHeight],
        [x + this.colw, y + this.rowHeight]
      ]
      item.ado.push({
        type: 'polygon',
        crd: item.crd,
        fillStyle: item.level === 3 ? this.tableLevel3BgColor : this.tableBgColor,
        hoverFillStyle: ['', '', this.tableHoverBgColor, this.tableLevel3BgColor][item.level],
        ctx
      })

      let w2 = (x + this.colWidth - this.colw) / 2 + this.colw

      if (item.tip) {
        // +2 微调偏移量
        let tipw = this.getTextWidth(item.tip, `font-size: ${this.fontSize}px`).width / 2 + 2
        let textw = this.getTextWidth(item.text, `font-size: ${this.fontSize}px`).width / 2 + 2

        item.ado.push({
          type: 'text',
          text: item.text + '(',
          crd: [w2 - tipw, y + this.rowHeight / 2],
          ctx
        })

        item.ado.push({
          type: 'text',
          text: item.tip,
          crd: [w2 + textw, y + this.rowHeight / 2],
          fillStyle: '#2D8CF0',
          ctx
        })
        item.ado.push({
          type: 'text',
          text: ')',
          crd: [w2 + textw + tipw + 2, y + this.rowHeight / 2],
          ctx
        })
      } else if (item.info) {
        item.ado.push({
          type: 'text',
          text: item.info,
          // fillStyle: item.expand ? '#2D8CF0' : '#435258',
          font: `bold 13px ${this.fontFamily}`,
          crd: [w2, y + this.rowHeight / 3 - 1.5],
          ctx
        })

        item.ado.push({
          type: 'text',
          text: item.text,
          font: `${this.fontSize * 0.8}px ${this.fontFamily}`,
          crd: [w2, y + (this.rowHeight / 4) * 3 + 1.5],
          ctx
        })

        // 取正负1 控制三角形正反
        let pm = item.expand ? 1 : -1
        ;(item.subList || []).length &&
          item.ado.push({
            type: 'polygon',
            crd: [
              [w2 - 5, y + this.rowHeight / 2 - 3 * pm],
              [w2 + 5, y + this.rowHeight / 2 - 3 * pm],
              [w2, y + this.rowHeight / 2 + 3 * pm]
            ],
            fillStyle: item.expand ? '#4FA5FF' : '#D3DCE6',
            stroke: false,
            ctx
          })
      } else {
        let ext = {}
        let textw = this.getTextWidth(item.text, `font-size: ${this.fontSize}px`).width
        if (textw > this.colWidth - this.colw) {
          ext.text = item.text.substr(0, 7) + '...'
          item.tooltip = item.text
        }

        item.ado.push({
          type: 'text',
          text: item.text,
          font: `${this.fontSize * 0.8}px ${this.fontFamily}`,
          crd: [w2, y + this.rowHeight / 2],
          ctx,
          ...ext
        })
      }
    },
    // 计算表格展示所有行
    calcLineTableData() {
      let newArr = []
      let recursion = arr => {
        arr.forEach(item => {
          newArr.push(item)
          item.expand !== false && item.subList && item.subList.length && recursion(item.subList)
        })
      }
      recursion(this.data)
      this.lineTableData = newArr
    },
    calcTunnelWidth() {
      this.tunnelWidth = (this.endPileNo - this.startPileNo) * this.meterToPx + this.colWidth + 20
    },
    // 获取 偏移后 x , y
    destruction() {
      return {
        x: this.lineWidth - this.offset,
        y: this.rowIndex * this.rowHeight + this.lineWidth - this.offset
      }
    },

    // 全局绘制(重绘)
    renderAll() {
      console.log('全局绘制（重绘）')
      this.$nextTick(() => {
        this.calcRender()
        this.renderRule()
        this.renderNodes()
        this.renderFixed()
      })
    },
    // 绘制 所有元素
    renderNodes() {
      // 绘制表格
      this.ctxFixed.clearRect(0, 0, this.colWidth, this.wrapHeight)
      // this.tableFixed.width = this.tableFixed.width
      // this.ctxMenu.clearRect(0, 0, this.wrapWidth, this.wrapHeight)
      this.tableMenu.width = this.tableMenu.width
      this.ctxMenu.setTransform(1, 0, 0, 1, 0, this.translateY)
      let yMin = 2 * this.rowHeight - this.translateY
      let yMax = this.wrapHeight - this.translateY
      this.ctxMenu.rect(0, yMin, this.wrapWidth, yMax)
      this.ctxMenu.clip()
      this.lineTableData.forEach(item => {
        // 判断全局，优化渲染
        this.render(item)
      })
      // 判断绘制纵向滚动中投影
      if (this.translateY) {
        this.renderScrollShadow(this.ctxMenu, [0, yMin - 10, this.wrapWidth, 10])
      }
      // 判断绘制横向滚动中投影
      if (this.translateX) {
        this.$nextTick(() => {
          this.renderScrollShadow(this.ctxRule, [this.colWidth - this.translateX - 10, 0, 10, this.rowHeight * (this.rowIndex + 1)])
        })
      }

      // 绘制整体线条
      this.$nextTick(() => {
        this.render(this.tableLine)
      })

      // 绘制内 矩形 内容
      this.chart.width = this.chart.width
      this.ctx.setTransform(1, 0, 0, 1, this.translateX, this.translateY)
      this.ctx.rect(this.colWidth + 1.5 - this.translateX, this.rowHeight * 2 + this.offset - this.translateY, this.wrapWidth, this.rowHeight * (this.rowIndex - 1))
      this.ctx.clip()
      this.ctx.save()
      this.ctx.fillStyle = this.innerWrapBgColor
      this.ctx.fill()
      this.ctx.restore()
      this.lineRectData.forEach(item => {
        if (!item) return
        let [, y] = item.crd[0]

        // 判断显示区域以外元素 忽略绘制 boolY 纵坐标 boolX 横坐标
        let boolY = y <= this.contentEndY && y >= this.contentStartY
        if (item.fixed === 'y') boolY = true
        boolY &&
          item.rect.forEach(v => {
            let [x] = v.crd[0]
            let [xMax] = v.crd[1]
            let boolX = (x > this.contentEndX && xMax > this.contentEndX) || (x < this.contentStartX && xMax < this.contentStartX)
            !boolX && this.render(v)
          })
      })
    },
    // 绘制投影
    renderScrollShadow(ctx, rect) {
      ctx.save()
      ctx.shadowBlur = 10
      ctx.fillStyle = 'red'
      ctx.shadowColor = 'rgba(0, 0, 0, .3)'
      ctx.fillRect(...rect)
      ctx.restore()
    },

    // 判断类型 绘制 元素
    render(item, ctx) {
      // 传ctx 时， 绘制全局 需下载数据

      let params = {}
      ;(item.ado || []).forEach(v => {
        switch (v.type) {
          case 'text':
            params = { ...v }
            if (ctx) {
              params.ctx = ctx
            }
            this.drawText(params)
            break
          case 'polygon':
            params = { ...v }
            if (this.current === item && params.hoverFillStyle) {
              params.fillStyle = params.hoverFillStyle
            }
            if (ctx) {
              params.ctx = ctx
            }
            this.drawPolygon(params)
            break
          case 'line':
            params = { ...v }
            if (ctx) {
              params.ctx = ctx
            }
            this.drawLine(params)
            break
        }
      })
    },

    // 绘制标尺画布（刻度，刻度值，斜井、竖井）
    renderRule(ctxAll) {
      // ctxAll 时， 绘制全局 需下载数据

      let ctx = ctxAll || this.ctxRule
      if (!ctxAll) {
        this.tableRule.width = this.tableRule.width
        // ctx.clearRect(0, 0, this.wrapWidth, this.wrapHeight)
        ctx.setTransform(1, 0, 0, 1, this.translateX, 0)
        ctx.rect(this.colWidth - this.translateX, 0, this.wrapWidth, this.wrapHeight)
        ctx.clip()
      }

      // 计算可渲染标尺
      let start = Math.floor(Math.abs(this.translateX) / this.ruleStep) + 1
      let end = Math.ceil((Math.abs(this.translateX) + this.wrapWidth) / this.ruleStep) + 1

      this.rules.ado = []

      this.rules.startX = start + this.startPileNo
      for (let i = start; i < end; i++) {
        let x = this.colWidth + i * this.ruleStep - this.offset
        this.rules.ado.push({
          type: 'line',
          crd: [
            [x, this.ruleHeight],
            [x, this.ruleHeight + this.tickLength]
          ],
          ctx
        })

        let y = this.ruleHeight / 2 + 2

        // +2 手动修正偏移
        // this.startPileNo +
        let text = i * this.ruleStepVal
        this.rules.ado.push({
          type: 'text',
          crd: [x, y],
          text: text,
          fillStyle: this.tickTextColor,
          font: `${this.tickFontSize * (this.ruleStep >= 100 ? 1.1 : 1)}px ${this.fontFamily}`,
          ctx
        })

        if (this.ruleStep >= 100) {
          let num = 0

          if (this.ruleStep >= 100) num = 2
          if (this.ruleStep >= 200) num = 5
          if (this.ruleStep >= 400) num = 10
          if (this.ruleStep >= 800) num = 20
          if (this.ruleStep >= 1500) num = 50
          if (this.ruleStep >= 3000) num = 100

          let step = this.ruleStep / num
          for (let j = 1; j < num; j++) {
            let xm = x + step * j - this.ruleStep
            this.rules.ado.push({
              type: 'text',
              crd: [xm, y],
              text: text + (this.ruleStepVal / num) * j - this.ruleStepVal,
              fillStyle: this.tickTextColor,
              font: `${this.tickFontSize * 0.75}px ${this.fontFamily}`,
              ctx
            })
            this.rules.ado.push({
              type: 'line',
              crd: [
                [xm, this.ruleHeight],
                [xm, this.ruleHeight + this.tickLength - 4]
              ],
              ctx
            })
          }
        }
      }

      this.render(this.rules)

      this.shaft.ado = []
      let color = '#90A5BA'
      ;(this.shaft.originData || []).forEach(v => {
        let x = this.pileNoToCrd(v.startPileNo) + this.colWidth

        // 计算斜井线
        this.shaft.ado.push({
          type: 'line',
          crd: [
            [x, 0],
            [x, this.tableHeight]
          ],
          ctx,
          strokeStyle: '#FFFFFF',
          lineWidth: 2
        })
        this.shaft.ado.push({
          type: 'line',
          crd: [
            [x, 0],
            [x, this.tableHeight]
          ],
          ctx,
          strokeStyle: color,
          lineWidth: 2,
          setLineDash: [2, 2]
        })

        // 计算斜井文本
        this.shaft.ado.push({
          type: 'text',
          text: `${v.name} ${v.startPileStr}`,
          crd: [x + 40, this.ruleHeight + this.tipHeight / 2 + 2],
          textAlign: 'start',
          fillStyle: this.pileStrColor,
          ctx
        })

        // 计算顶部三角
        this.shaft.ado.push({
          type: 'polygon',
          crd: [
            [x - 6, 0],
            [x + 6, 0],
            [x, 7]
          ],
          fillStyle: color,
          stroke: false,
          ctx
        })

        // 计算斜井左右箭头
        let y = this.ruleHeight
        ;[x, x - 25].forEach((v, i) => {
          let xMax = v + this.tipHeight
          let yMax = y + this.tipHeight

          let xx = i ? xMax : v
          let xd = !i ? xMax : v
          let ca = i ? -1 : 1

          let x2 = xx + 8 * ca
          let x3 = xx + 18 * ca

          let crd = [
            [x2, yMax - (this.ruleHeight / 2 - 3)],
            [x3, yMax - (this.ruleHeight / 2 - 3)],
            [x3, yMax - (this.ruleHeight / 2 - 6)],
            [xd, yMax - this.ruleHeight / 2],
            [x3, yMax - (this.ruleHeight / 2 + 6)],
            [x3, yMax - (this.ruleHeight / 2 + 3)],
            [x2, yMax - (this.ruleHeight / 2 + 3)],
            [x2, y]
          ]

          this.shaft.ado.push({
            type: 'polygon',
            crd,
            fillStyle: color,
            ctx
          })
        })
      })
      this.$nextTick(() => {
        this.render(this.shaft)
      })
    },
    renderFixed(ctxAll) {
      // 传ctx 时， 绘制全局 需下载数据

      let ctx = ctxAll || this.ctxFixed
      !ctxAll && ctx.clearRect(this.colWidth + 1, 0, this.wrapWidth, this.rowHeight * 2)

      // 绘制标尺 表格 线
      ;[this.lineWidth, this.ruleHeight, this.rowHeight].forEach(v => {
        v -= this.offset
        this.drawLine({
          crd: [
            [this.colWidth, v],
            [this.wrapWidth, v]
          ],
          ctx
        })
      })

      // 绘制标尺左右图标
      let x0 = this.colWidth - this.offset + 1
      let y0 = this.ruleHeight - this.offset

      let start = Math.round((Math.abs(this.translateX) / this.ruleStep) * 100) + this.startPileNo
      let end = Math.round(((Math.abs(this.translateX) + this.wrapWidth - this.colWidth) / this.ruleStep) * 100) + this.startPileNo

      let startPileNo = `K${Math.floor(start / 1000)}+${start % 1000}`
      let endPileNo = `K${Math.floor(end / 1000)}+${end % 1000}`

      ;[x0, this.wrapWidth - this.ruleHeight - this.offset].forEach((v, i) => {
        let xMax = v + this.tipHeight
        let yMax = y0 + this.tipHeight

        this.drawPolygon({
          crd: [
            [v, y0],
            [xMax, y0],
            [xMax, yMax],
            [v, yMax]
          ],
          fillStyle: this.inOutIconBgColor,
          ctx
        })

        let xx = i ? xMax : v
        let xd = !i ? xMax : v
        let ca = i ? -1 : 1

        let xl = this.tipHeight * 0.23

        let x1 = xx + xl * ca
        let x2 = xx + (xl + 2) * ca
        let x3 = xx + (this.tipHeight - 4) * ca

        let crd = [
          [x1, y0],
          [x1, yMax],
          [x2, yMax],
          [x2, yMax - (this.ruleHeight / 2 - 1)],
          [x3, yMax - (this.ruleHeight / 2 - 1)],
          [x3, yMax - (this.ruleHeight / 2 - 4)],
          [xd, yMax - this.ruleHeight / 2],
          [x3, yMax - (this.ruleHeight / 2 + 4)],
          [x3, yMax - (this.ruleHeight / 2 + 1)],
          [x2, yMax - (this.ruleHeight / 2 + 1)],
          [x2, y0]
        ]

        this.drawPolygon({
          crd,
          fillStyle: this.inOutIconColor,
          ctx
        })

        // 右侧出口桩号 偏移量
        let ext = {}
        if (i) {
          v += this.ruleHeight
          ext.textAlign = 'right'
        }

        // + 2 垂直偏移量
        this.drawText({
          crd: [v + (this.ruleHeight + 10) * ca, y0 + this.tipHeight / 2 + 2],
          // text: ca === 1 ? this.startPileStr : this.endPileStr,
          text: ca === 1 ? startPileNo : endPileNo,
          fillStyle: this.pileStrColor,
          textAlign: 'start',
          ctx,
          ...ext
        })
      })
    },

    // 桩号转坐标
    pileNoToCrd(pileNo) {
      return (pileNo - this.startPileNo) * this.meterToPx || 0
    },

    // 绘制形状
    drawPolygon(data, ctx) {
      let arr = data.crd.concat()
      ctx = data.ctx || ctx || this.ctx
      ctx.save()

      ctx.strokeStyle = data.strokeStyle || this.lineColor
      ctx.fillStyle = data.fillStyle || this.fillStyle
      ctx.lineWidth = data.lineWidth || this.lineWidth
      // 是否为矩形 true 清除矩形区域，不精确判断
      if (data.hoverFillStyle) {
        let xAll = arr.map(v => v[0])
        let xMax = Math.max(...xAll)
        let xMin = Math.min(...xAll)

        let yAll = arr.map(v => v[1])
        let yMax = Math.max(...yAll)
        let yMin = Math.min(...yAll)

        ctx.clearRect(xMin, yMin, xMax - xMin, yMax - yMin)
      }
      ctx.beginPath()

      // 判断是否绘制圆角
      if (data.borderRadius) {
        let r = data.borderRadius
        let [x, y] = arr.shift()
        let x1 = x - (x - arr[0][0]) / 2
        ctx.moveTo(x1, y)
        do {
          let [x2, y2] = arr.shift()
          let [x3, y3] = arr[0] || [x, y]

          let xa = x2 - (x2 - x3) / 2
          let ya = y2 - (y2 - y3) / 2

          ctx.arcTo(x2, y2, xa, ya, r)
        } while (arr.length)

        ctx.arcTo(x, y, x1, y, r)
      } else {
        ctx.moveTo(...arr.shift())
        do {
          ctx.lineTo(...arr.shift())
        } while (arr.length)
      }

      data.closePath !== false && ctx.closePath()

      ctx.strokeStyle = data.strokeStyle

      data.stroke !== false && ctx.stroke()
      data.fillStyle && ctx.fill()
      ctx.restore()

      if (data.fillStripe) {
        ctx.save()
        let arr = data.crd.concat()
        ctx.fillStyle = data.fillStripe
        ctx.globalAlpha = data.globalAlpha || 1
        ctx.beginPath()
        ctx.moveTo(...arr.shift())
        do {
          ctx.lineTo(...arr.shift())
        } while (arr.length)

        ctx.closePath()
        ctx.fill()
        ctx.restore()
      }
    },
    // 绘制线条方法
    drawLine(data, ctx) {
      let arr = data.crd.concat()
      ctx = data.ctx || ctx || this.ctx

      ctx.save()
      ctx.strokeStyle = data.strokeStyle || this.lineColor
      ctx.lineCap = data.lineCap || ctx.lineCap
      ctx.lineWidth = data.lineWidth || this.lineWidth
      data.setLineDash && ctx.setLineDash(data.setLineDash)

      ctx.beginPath()
      ctx.moveTo(...arr.shift())

      do {
        ctx.lineTo(...arr.shift())
      } while (arr.length)

      ctx.stroke()
      ctx.restore()
    },
    // 绘制文本
    drawText(data, ctx) {
      ctx = data.ctx || ctx || this.ctx
      ctx.save()
      ctx.textBaseline = data.textBaseline || 'middle'
      ctx.textAlign = data.textAlign || 'center'
      ctx.font = data.font || `${this.fontSize}px ${this.fontFamily}`
      ctx.fillStyle = data.fillStyle || this.fontColor

      ctx.fillText(data.text, ...data.crd)
      ctx.restore()
    },

    // 判断是否处于几何形状内
    isInnerPolygon(point, vs) {
      let [x, y] = point
      let inside = false

      for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        let [xi, yi] = vs[i]
        let [xj, yj] = vs[j]

        let intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
        if (intersect) inside = !inside
      }

      return inside
    },

    getTextWidth(str, style) {
      let div = document.createElement('div')
      div.setAttribute('style', `position: fixed; left: -100000px; opacity: 0; ${style}`)
      div.innerHTML = str

      document.body.appendChild(div)

      let position = div.getBoundingClientRect()

      document.body.removeChild(div)

      return position
    },

    renderAllNodesAndDownload() {
      let allCanvas = document.createElement('canvas')
      // let allCanvas = this.$refs.canvas
      let ctx = allCanvas.getContext('2d')

      // 重新格式化所有数据
      let data = JSON.parse(JSON.stringify(this.data))
      let oldRowIndex = this.rowIndex
      this.rowIndex = -1
      let recursionExpand = arr => {
        arr.forEach(item => {
          if (item.expand !== undefined) {
            item.expand = true
          }
          item.subList && item.subList.length && recursionExpand(item.subList)
        })
      }
      recursionExpand(data)

      // let px = prompt('请输入一米对应像素', this.meterToPx)
      // let oldMeterToPx = this.meterToPx
      // this.meterToPx = px
      // let step = px * this.ruleStepVal
      // let oldStop = this.ruleStep
      let oldTranslateX = this.translateX
      // this.ruleStep = step
      this.translateX = 0

      // 计算所有行数
      let rows = []
      let allRows = []
      let recursion = arr => {
        arr.forEach((item, i) => {
          allRows.push(item)
          ;(!item.subList || item.level !== 1) && rows.push(item)

          this.rowIndex++
          item.ado = []
          item.rect = []

          item.data && this.calcRect(item, ctx)

          switch (true) {
            // 一级 可折叠
            case item.type === 'multistage':
              this.calcTableVertical(item, i, ctx)
              break
            // 一级 不可折叠
            case item.type === 'stair':
              this.calcTableStair(item, i, ctx)
              break
            // 二、三级 可折叠
            case [2, 3].includes(item.level):
              this.calcTableLevel23(item, i, ctx)
              break
          }

          item.subList && item.subList.length && recursion(item.subList)
        })
      }
      recursion(data)

      this.rowIndex = oldRowIndex

      // 计算最大宽度，高度
      // let maxW = 0

      // rows.forEach(v => {
      //   if (v.rect) {
      //     v.rect.forEach(v2 => {
      //       let maxs = []
      //       v2.crd.forEach(v3 => {
      //         maxs.push(v3[0])
      //       })
      //       maxW = Math.max(...maxs, maxW)
      //     })
      //   }
      // })

      // +10 +2 添加偏移量
      // let canvasWidth = maxW + 10
      let canvasWidth = this.tunnelWidth
      let canvasHeight = rows.length * this.rowHeight

      allCanvas.height = canvasHeight + 2
      allCanvas.width = canvasWidth

      // 全局绘制
      let oldTableHeight = this.tableHeight
      this.tableHeight = canvasHeight
      let old = this.wrapWidth
      this.wrapWidth = canvasWidth
      ctx.fillStyle = this.innerWrapBgColor
      ctx.fillRect(this.colWidth, this.rowHeight, canvasWidth, canvasHeight)

      // 绘制所有元素
      allRows.forEach(v => {
        this.render(v, ctx)
        v.rect &&
          v.rect.forEach(v2 => {
            this.render(v2, ctx)
          })
      })

      this.renderRule(ctx)
      this.renderFixed(ctx)
      // 计算绘制table线条
      let tableLine = { ado: [] }
      let len = Math.floor(canvasHeight / this.rowHeight) - 1
      for (let i = 1; i <= len; i++) {
        let y = (i + 1) * this.rowHeight + this.offset
        tableLine.ado.push({
          type: 'line',
          crd: [
            [this.colWidth, y],
            [canvasWidth, y]
          ],
          strokeStyle: this.lineColor
        })
      }
      this.render(tableLine, ctx)
      this.wrapWidth = old
      // this.ruleStep = oldStop
      this.translateX = oldTranslateX
      this.tableHeight = oldTableHeight
      // this.meterToPx = oldMeterToPx
      // this.$nextTick(() => {
      //   this.printHandle(allCanvas)
      // })

      // 下载图片
      this.$nextTick(() => {
        let image = allCanvas.toDataURL('image/png')
        let save_link = document.createElement('a')
        save_link.href = image
        save_link.download = '施工进度图.png'

        let clickevent = document.createEvent('MouseEvents')
        clickevent.initEvent('click', true, false)
        save_link.dispatchEvent(clickevent)
      })
    },
    printHandle(canvas) {
      let imgData = canvas.toDataURL('image/png')
      let win = window.open()

      win.document.write = `<img src='${imgData}'/>`
      win.print()
    }
  },
  destroyed() {
    let wrap = this.canvasWrap
    if (wrap) {
      removeResizeListener(wrap, this.listenVessel)

      wrap.removeEventListener('mousemove', this.addMouseMove)
      wrap.removeEventListener('mouseleave', this.addMouseLeave)
      wrap.removeEventListener('mouseenter', this.addMouseWhell)
      wrap.removeEventListener('mousedown', this.addMouseDown)

      wrap.removeEventListener('click', this.addMouseClick)

      document.removeEventListener('mouseup', this.addMouseUp)
      document.removeEventListener('keydown', this.keyDownHandle)
      document.removeEventListener('keyup', this.keyUpHandle)
    }
  }
}
