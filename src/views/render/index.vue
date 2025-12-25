<template lang="pug">
.statistic-analysis-wrapper
  el-form.filter-wrapper( :model="filterData" inline label-width="80px" class="form-inline")
    el-form-item( label="K" label-width="20px")
      el-input-number( size="small" v-model="filterData.k" controls-position="right" :min="kMin" :max="kMax" :precision="0")
    el-form-item( label="+" label-width="20px")
      el-input-number( size="small" v-model="filterData.v" controls-position="right" :min="vMin" :max="vMax" :step="1" :precision="1")
    el-button( size="small" type="primary" :disabled="data.length <= 2" @click="locationHandle") 定位
    el-button( size="small" type="primary" @click="renderAllNodesAndDownload") 导出分析图
    el-form-item( label="行高" label-width="80px")
      el-select( v-model="rowHeight" @change="changeRowHeight")
        el-option( v-for="item in rowHegihtOptions" :key="item" :value="item" :label="item")
  .content-wrapper
    .header-info-box.clearfix( :class="{expand: isHeaderExpand}")
      .inner-wrap
        .tip-title
          div.current 操作
          div 简介
        .tip-info-content
          div.tunnel-name {{tunnelName}}
          div.description( ref="description") {{tunnelIntroduction}}
          span.expand-btn( v-if="descriptionWidth > descriptionWrapWidth" @click="isHeaderExpand = !isHeaderExpand") {{isHeaderExpand ? '收起':'详情'}}
            span( class="el-icon-arrow-down")
    div.slider-wrap
      el-slider( v-model="meterToPx" @input="changeMeterHandle" :step="stepPx" :min="meterToPxMin" :max="meterToPxMax")
      span.tip-text 缩放比例（1米 = {{meterToPx}}像素）
    .table-wrapper( ref="tableWrap" style="pointer-events: none;")
      .canvas-container( ref="canvasWrap")
      div.dark-scrollbar.vertical( ref="scrollY" @scroll="scrollHandle")
        div( :style="{height: `${tableHeight}px`, width: '1px'}")
      div.dark-scrollbar.horizontal( ref="scrollX" @scroll="scrollXHandle")
        div( :style="{width: `${tableWidth}px`, height: '1px'}")
    template( v-if="current && current.tooltip")
      div.tooltip-custom( :style="tooltipStyle") {{(current || {}).tooltip}}
      div.line-tip( :style="lineStyle" )
    //- canvas( ref="canvas")
  //- Collectively( v-if="modalInfo.modal" :modal-info="modalInfo" @close="modalInfo.modal = false" :btnPrevile="btnPrevile")
</template>

<script lang="ts">
// @ts-nocheck
import render from './render.js'
import data from './data.json'

export default {
  components: {
    // Collectively: () => import('@/view/single-page/civil-eng-inspect/tunnel-work/image-management/image-record/modal/supervisor/Collectively.vue')
  },
  mixins: [render],
  data() {
    return {
      isHeaderExpand: false,
      tunnelName: '',
      tunnelIntroduction: '',
      descriptionWrapWidth: 0,
      descriptionWidth: 0,

      tooltipStyle: {},
      lineStyle: {},
      filterData: {
        id: '',
        projectId: '',
        tunnelId: '',
        tunnelTrunkId: '',
        k: 0,
        v: 0
      },
      projectOptions: [],
      tunnelOptions: [],
      tunnelTrunkOptions: [],

      originData: {},

      modalInfo: {
        modal: false,
        title: '详情',
        id: null
      }
    }
  },
  computed: {
    kMax():number {
      return Math.floor(this.endPileNo / 1000)
    },
    vMax():number {
      if (this.filterData.k === this.kMax) {
        return this.endPileNo % 1000
      } else {
        return 999.9
      }
    },
    kMin():number {
      return Math.floor(this.startPileNo / 1000)
    },
    vMin():number {
      return this.startPileNo % 1000
    }
  },
  watch: {
    meterToPx(val) {
      this.calcTunnelWidth()
      this.preMeterToPx = val
    },
    current: {
      handler(val, old) {
        old && this.render(old)
        if (val) {
          this.canvasWrap.style.cursor = 'pointer'
          this.render(val)
        } else {
          this.$refs.canvasWrap.style.cursor = ''
        }

        this.calcTooltipStyle()
      },
      deep: true
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    // 获取数据
    getData() {
      this.originData = JSON.parse(JSON.stringify(data))

      console.log('施工进度：', data.constructionProgress)
      console.log('质量检查：', data.qualityInspection)
      console.log('竖井、斜井：', data.slopeAndShaftList)
      console.log('工序影像：', data.processIma)
      console.log('围岩级别', data.designInfoList)

      // 赋值斜井竖井数据
      this.shaft = {
        originData: data.slopeAndShaftList || []
      }

      // -48 容器右侧 padding
      this.descriptionWrapWidth = this.$refs.description.getBoundingClientRect().width - 48
      this.descriptionWidth = this.getTextWidth(data.tunnelIntroduction, 'font-size: 15px').width
      this.tunnelIntroduction = data.tunnelIntroduction

      this.startPileNo = data.startPileNo >>> 0
      this.endPileNo = data.endPileNo >>> 0
      this.calcTunnelWidth()

      this.$nextTick(() => {
        this.filterData.k = this.kMin
        this.filterData.v = this.vMin
      })

      this.startPileStr = `进口 ${data.startPileStr}`
      this.endPileStr = `出口 ${data.endPileStr}`
      this.formatData()
      this.canvasWrap ? this.renderAll() : this.init()

      // 延时取消tableWrap 事件激活，避免错误提示
      setTimeout(() => {
        this.$refs.tableWrap.style.pointerEvents = ''
      }, 100)
    },

    formatData() {
      this.data = JSON.parse(JSON.stringify(this.rootData))
      // this.data[1].data = JSON.parse('[{"start":0,"end":100,"level":0,"piles":[0,100]},{"start":100,"end":200,"level":3,"piles":[100,200]},{"start":200,"end":350,"level":2,"piles":[200,350]},{"start":370,"end":480,"level":4,"piles":[370,480]},{"start":480,"end":810,"level":5,"piles":[480,810]}]')

      // '[{"type":"multistage","level":1,"text":"施工进度","expand":true,"subList":[{"text":"开挖","tip":"100%","level":2,"color":"#2D8CF0","stripe":"thick","data":[{"start":0,"end":100,"level":0},{"start":100,"end":200,"level":3},{"start":200,"end":350,"level":2},{"start":370,"end":480,"level":4},{"start":480,"end":810,"level":5}]},{"text":"二次衬砌","tip":"5%","stripe":"thick","level":2}]},{"type":"multistage","level":1,"text":"质量检查","expand":false,"subList":[{"text":"初期支护","tip":"10%","level":2,"stripe":"thin","data":[{"start":0,"end":100,"level":0},{"start":100,"end":200,"level":3},{"start":200,"end":350,"level":2},{"start":370,"end":480,"level":4},{"start":480,"end":810,"level":5}]},{"text":"二次衬砌","tip":"5%","stripe":"thin","level":2}]},{"type":"multistage","level":1,"text":"工序影像","expand":true,"subList":[{"level":2,"text":"明洞衬砌","info":"明洞及洞门","data":[{"start":50,"end":54,"level":0},{"start":100,"end":200,"level":3},{"start":200,"end":350,"level":2},{"start":370,"end":480,"level":4},{"start":480,"end":810,"level":1},{"start":980,"end":1100,"level":5},{"start":1480,"end":1550,"level":5},{"start":2480,"end":2500,"level":3}],"expand":true,"subList":[{"text":"基础","level":3},{"text":"钢筋","level":3}]},{"level":2,"text":"明洞及洞门","info":"明洞及洞门","expand":false,"data":[{"start":200,"end":350,"level":2},{"start":370,"end":480,"level":4},{"start":480,"end":810,"level":1},{"start":980,"end":1100,"level":5},{"start":1480,"end":1550,"level":5},{"start":2480,"end":2500,"level":3}],"subList":[{"text":"基础","level":3,"data":[{"start":380,"end":600,"level":3},{"start":5400,"end":5500,"level":4}]},{"text":"钢筋","level":3}]}]}]'
      // 围岩级别
      if (this.originData.designInfoList) {
        this.data[1].data = (this.originData.designInfoList || []).map(item => {
          item.centerName = item.levelName
          item.piles = [item.startPileNo - this.startPileNo, item.endPileNo - this.startPileNo]
          item.end = item.piles[1]
          item.start = item.piles[0]
          item.level = item.levelType
          let upper = (item.levelCode || '').toLocaleUpperCase()
          let inner = upper.match(/[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ]/)[0]
          item.tooltip = item.centerName
          item.level = this.romeNumber.indexOf(inner)
          return item
        })
      }
      this.data.push(...JSON.parse(this.extData))
      // 工序影像
      if (this.originData.processIma && this.originData.processIma.length) {
        this.data.push({
          text: '工序影像',
          expand: true,
          level: 1,
          type: 'multistage',
          subList: this.recursiveFormatting(this.originData.processIma, 2, 'processIma')
        })
      }

      this.calcLineTableData()
      // console.log(this.recursiveFormatting(this.originData.processIma, 2))
      // this.data.push(...JSON.parse(this.fixedData))
    },

    recursiveFormatting(item = [], level, category = '') {
      item.map(v => {
        v.text = v.name
        v.expand = false
        v.level = level

        if (level === 2 && v.subList) {
          let sub1 = (v.subList.splice(0, 1) || [{}])[0]
          v.dataList = sub1.dataList
          v.text = sub1.name
          v.info = v.name
        }

        v.data = (v.dataList || []).map(v2 => {
          if (v2.endPileStr) {
            v2.piles = [v2.startPileNo - this.startPileNo, v2.endPileNo - this.startPileNo]
            v2.end = v2.piles[1]
            v2.tooltip = `桩号范围：${v2.startPileStr}~${v2.endPileStr}`
          } else {
            v2.piles = [v2.startPileNo - this.startPileNo]
            v2.tooltip = `桩号：${v2.startPileStr}`
          }
          v2.category = category
          v2.level = v2.scoreLevel || v2.level
          v2.start = v2.piles[0]
          return v2
        })

        v.subList && v.subList.length && this.recursiveFormatting(v.subList, level + 1, category)
        return v
      })
      return item
    },

    scrollHandle(e) {
      this.translateY = -e.target.scrollTop
      this.calcContentXY()
      this.renderRule()
      this.renderNodes()
    },
    scrollXHandle(e) {
      this.translateX = -e.target.scrollLeft
      this.calcContentXY()
      this.renderRule()
      this.renderNodes()
      this.renderFixed()
    },
    changeMeterHandle(e) {
      if (this.preMeterToPx !== e) {
        this.ruleStep = this.meterToPx * this.ruleStepVal
        this.renderAll()
      }
    },
    locationHandle() {
      let pileNo = this.filterData.k * 1000 + this.filterData.v
      let pileNoLength = pileNo - this.startPileNo

      this.$refs.scrollX.scrollLeft = pileNoLength * this.meterToPx
    },
    calcTooltipStyle() {
      clearTimeout(this.timer2)
      this.timer2 = setTimeout(() => {
        if (!this.current) return {}
        let x = 0
        let y = 0
        let top = 0
        let left = 0
        this.lineStyle = { display: 'none' }
        if (['rule', 'top'].includes(this.current.placement)) {
          let w = this.getTextWidth(this.current.tooltip, 'padding: 5px; font-size: 14px;').width / 2

          ;[left, top] = this.current.tooltipXY

          if (this.current.placement === 'rule') {
            this.lineStyle = {
              left: left + this.position.x + 'px',
              top: this.position.y + 'px',
              height: this.tableHeight + 'px',
              maxHeight: this.wrapHeight + 'px'
            }
          }

          left = left + this.position.x - w
          top += this.position.y - 30
        } else {
          ;[, y] = this.current.crd[0]
          ;[x] = this.current.crd[1]

          let offset = 2

          y += this.translateY
          x += 0

          left = this.position.x + x + offset
          top = this.position.y + y + 10
        }

        this.tooltipStyle = {
          left: left + 'px',
          top: top + 'px'
        }
      }, 10)
    },

    changeRowHeight() {
      this.$nextTick(() => {
        this.renderAll()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './render.styl';
.statistic-analysis-wrapper {
  height: 100%;
  .filter-wrapper {
    padding-top: 13px;
    padding-left: 50px;
    height: 60px;
    border-bottom: 1px solid #d5dde4;
    box-sizing: border-box;
    .el-button {
      margin-top: 5px;
    }
  }
  .content-wrapper {
    height: calc(100% - 60px);
    overflow: hidden;
    .slider-wrap {
      margin-left: 20px;
      height: 29px;
      margin-top: -9px;
      display: flex;
      .el-slider {
        width: 200px;
        margin-right: 10px;
      }
      :deep() .el-slider__runway {
        margin-top: 7px;
      }
      :deep() .el-slider__bar {
        display: none;
      }
      // .tip-text {
      //   dis
      // }
    }
    // overflow: auto;
  }
  .header-info-box {
    height: 100px;
    position: relative;
    z-index: 1;
    .inner-wrap {
      display: flex;
      background-color: #fff;
      padding: 20px 20px 10px;
    }
    .tip-title {
      width: 44px;
      margin-right: 20px;
      font-size: 14px;
      flex-shrink: 0;
      > div {
        height: 24px;
        text-align: center;
        font-weight: bold;
        color: #2d8cf0;
        border: 1px solid #d3e1fe;
        margin-bottom: -1px;
      }
      .current {
        color: #ffffff;
        background-color: #2d8cf0;
      }
    }
    .tip-info-content {
      flex-shrink: 0;
      width: calc(100% - 64px);
      .tunnel-name {
        height: 27px;
        margin-top: -3px;
        font-size: 18px;
        font-weight: bold;
      }
      .description {
        height: 20px;
        overflow: hidden;
        padding-right: 48px;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 15px;
        color: #555555;
        margin-top: 10px;
      }
    }
    .expand-btn {
      position: relative;
      margin-top: -20px;
      float: right;
      font-size: 15px;
      color: #2d8cf0;
      cursor: pointer;
      .el-icon-arrow-down {
        float: right;
        margin-top: 1px;
        text-shadow: 0 5px 0;
      }
    }
    &.expand {
      .inner-wrap {
        box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.1);
      }
      .tip-info-content {
        .description {
          height: auto;
          overflow: visible;
          white-space: normal;
          padding-right: 0;
        }
      }
      .el-icon-arrow-down {
        transform: rotate(180deg);
        margin-top: 6px;
      }
    }
  }
  .table-wrapper {
    position: relative;
    height: calc(100% - 120px);
    margin: 0 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    .dark-scrollbar {
      position: absolute;
      &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      }
      &.vertical {
        top: 0;
        right: -15px;
        bottom: 20px;
        overflow-y: auto;
      }
      &.horizontal {
        left: 0;
        right: 0;
        bottom: 3px;
        overflow-x: auto;
      }
    }
  }

  .tooltip-custom {
    position: fixed;
    z-index: 1;
    background-color: rgba(47, 59, 85, 0.8);
    color: #ffffff;
    font-size: 14px;
    padding: 5px;
    border-radius: 4px;
    pointer-events: none;

    transition: all 0.1s;
  }

  .line-tip {
    position: fixed;
    z-index: 1;
    pointer-events: none;
    border-right: 1px dotted #bbbbbb;

    transition: all 0.1s;
  }
}
</style>
