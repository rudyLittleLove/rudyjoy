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
// import data from './data.json'

const data = JSON.parse(`{"startPileStr":"K000+000","startPileNo":"0","endPileStr":"K5+000","endPileNo":"5000","tunnelIntroduction":"1.比例缩放：鼠标在画布内时支持 Ctrl + 滚轮 缩放，Ctrl + alt + 滚轮 快速缩放；   2.横向滚动：鼠标在画布内时支持 shift + 滚轮 横向滚动，shift + alt + 滚轮 快速横向滚动   3.画布拖拽： 鼠标在画布内可拖拽画布   4.下载支持：根据当前缩放比例下载，最大支持65000px 宽度画布;   5.宽高自适应：切换宽高自动重新绘制画布内容","designInfoList":[{"id":"4f9dfeaa-727d-11eb-9fe2-0242ac110006","tunnelId":"92627b5b5b4240acb67c0078f2b312da","paramTunnelTrunk":"353e9b1ec6b846baad0296434c73e4b6","tunnelTrunkName":"单洞","startPileNo":"0","endPileNo":"1100","startPileNoStr":"K000+000","endPileNoStr":"K1+100","levelId":"fad026e8e09741d987c4b7346e3783d4","levelName":"Ⅰ级","levelCode":"surrounding_rock_classification-Ⅰ","levelType":"0","remark":""},{"id":"4f9e0095-727d-11eb-9fe2-0242ac110006","tunnelId":"92627b5b5b4240acb67c0078f2b312da","paramTunnelTrunk":"353e9b1ec6b846baad0296434c73e4b6","tunnelTrunkName":"单洞","startPileNo":"1100","endPileNo":"2200","startPileNoStr":"K1+100","endPileNoStr":"K2+200","levelId":"96f81ff4bd504b17a630b266147bad06","levelName":"Ⅲ级","levelCode":"surrounding_rock_classification-Ⅲ","levelType":"0","remark":""},{"id":"4f9e0120-727d-11eb-9fe2-0242ac110006","tunnelId":"92627b5b5b4240acb67c0078f2b312da","paramTunnelTrunk":"353e9b1ec6b846baad0296434c73e4b6","tunnelTrunkName":"单洞","startPileNo":"2200","endPileNo":"3300","startPileNoStr":"K2+200","endPileNoStr":"K3+300","levelId":"820aed7377274d1e9aa09f6c57eb5524","levelName":"Ⅴ级","levelCode":"surrounding_rock_classification-Ⅴ","levelType":"0","remark":""},{"id":"4f9e01a3-727d-11eb-9fe2-0242ac110006","tunnelId":"92627b5b5b4240acb67c0078f2b312da","paramTunnelTrunk":"353e9b1ec6b846baad0296434c73e4b6","tunnelTrunkName":"单洞","startPileNo":"3300","endPileNo":"4400","startPileNoStr":"K3+300","endPileNoStr":"K4+400","levelId":"f4e852ba0c414f25855ab961eccc97cc","levelName":"Ⅱ级","levelCode":"surrounding_rock_classification-Ⅱ","levelType":"0","remark":""},{"id":"4f9e0213-727d-11eb-9fe2-0242ac110006","tunnelId":"92627b5b5b4240acb67c0078f2b312da","paramTunnelTrunk":"353e9b1ec6b846baad0296434c73e4b6","tunnelTrunkName":"单洞","startPileNo":"4400","endPileNo":"4600","startPileNoStr":"K4+400","endPileNoStr":"K4+600","levelId":"10b2f3b220ab44acbef990aa6945697e","levelName":"Ⅳ级","levelCode":"surrounding_rock_classification-Ⅳ","levelType":"0","remark":""},{"id":"4f9e028f-727d-11eb-9fe2-0242ac110006","tunnelId":"92627b5b5b4240acb67c0078f2b312da","paramTunnelTrunk":"353e9b1ec6b846baad0296434c73e4b6","tunnelTrunkName":"单洞","startPileNo":"4600","endPileNo":"5000","startPileNoStr":"K4+600","endPileNoStr":"K5+000","levelId":"53bc75c179a141179ce9da05913544df","levelName":"Ⅵ级","levelCode":"surrounding_rock_classification-Ⅵ","levelType":"0","remark":""}],"slopeAndShaftList":[],"constructionProgress":null,"qualityInspection":null,"processIma":[{"name":"明洞及洞门","progressPercent":null,"subList":[{"name":"明洞回填","progressPercent":null,"subList":null,"dataList":[{"id":"a4928b7c-84a7-43a9-83ec-dc91ede81960","name":null,"startPileStr":"K0+080","startPileNo":"80","endPileStr":"K0+090","endPileNo":"90","progressPercent":null,"scoreLevel":"0"}]},{"name":"挡墙砌筑","progressPercent":null,"subList":null,"dataList":[{"id":"efa81292-3982-48a2-8512-589a714f813a","name":null,"startPileStr":"K0+060","startPileNo":"60","endPileStr":"K0+080","endPileNo":"80","progressPercent":null,"scoreLevel":"2"},{"id":"8e15aa7e-641b-4ebf-ba57-5dfc4443a11a","name":null,"startPileStr":"K0+050","startPileNo":"50","endPileStr":"K0+055","endPileNo":"55","progressPercent":null,"scoreLevel":"0"},{"id":"c7b0a35f-953a-4c69-adb2-8a80fe46601d","name":null,"startPileStr":"K4+050","startPileNo":"4050","endPileStr":"K4+100","endPileNo":"4100","progressPercent":null,"scoreLevel":"3"}]},{"name":"明洞排水","progressPercent":null,"subList":null,"dataList":[{"id":"b69cd7e2-bfca-4d34-93c8-816a762bc57b","name":null,"startPileStr":"K0+070","startPileNo":"70","endPileStr":"K0+080","endPileNo":"80","progressPercent":null,"scoreLevel":"4"}]},{"name":"明洞钢筋","progressPercent":null,"subList":null,"dataList":[{"id":"0f40f1fb-d2ce-47d8-b4d0-7d43cd6d4853","name":null,"startPileStr":"K0+120","startPileNo":"120","endPileStr":"K0+150","endPileNo":"150","progressPercent":null,"scoreLevel":"5"},{"id":"8bd22b76-a1f0-4ae6-a057-e88f490393ae","name":null,"startPileStr":"K0+100","startPileNo":"100","endPileStr":"K0+130","endPileNo":"130","progressPercent":null,"scoreLevel":"4"},{"id":"52e58e95-5482-446c-9ea0-e9b321123253","name":null,"startPileStr":"K0+050","startPileNo":"50","endPileStr":"K0+060","endPileNo":"60","progressPercent":null,"scoreLevel":"2"}]},{"name":"基础","progressPercent":null,"subList":null,"dataList":[{"id":"7642d7fe-a424-4506-8c17-873f2eab253a","name":null,"startPileStr":"K0+050","startPileNo":"50","endPileStr":"K0+055","endPileNo":"55","progressPercent":null,"scoreLevel":"1"},{"id":"315ff61c-5ea2-4cdb-8cb4-eb87765e4950","name":null,"startPileStr":"K0+045","startPileNo":"45","endPileStr":"K0+050","endPileNo":"50","progressPercent":null,"scoreLevel":"5"},{"id":"3d1d40b9-89f5-4dff-b532-8b54033b31b9","name":null,"startPileStr":"K0+030","startPileNo":"30","endPileStr":"K0+035","endPileNo":"35","progressPercent":null,"scoreLevel":"4"},{"id":"42db56ef-f0bd-4dd4-a82a-7abefac3f6ef","name":null,"startPileStr":"K0+010","startPileNo":"10","endPileStr":"K0+020","endPileNo":"20","progressPercent":null,"scoreLevel":"4"},{"id":"2ddc5007-31c9-4715-90ef-7f06a409b951","name":null,"startPileStr":"K0+000","startPileNo":"0","endPileStr":"K0+010","endPileNo":"10","progressPercent":null,"scoreLevel":"4"},{"id":"132d486f-86ce-452c-9a35-aaf199cd57b8","name":null,"startPileStr":"K0+020","startPileNo":"20","endPileStr":"K0+050","endPileNo":"50","progressPercent":null,"scoreLevel":"5"},{"id":"8f7e12a1-ec2f-41e1-bf62-9fa64ce16d23","name":null,"startPileStr":"K4+250","startPileNo":"4250","endPileStr":"K4+250","endPileNo":"4250","progressPercent":null,"scoreLevel":"4"},{"id":"db6ba73d-1bae-4753-901b-23aa61f6444a","name":null,"startPileStr":"K4+415","startPileNo":"4415","endPileStr":"K4+250","endPileNo":"4250","progressPercent":null,"scoreLevel":"5"},{"id":"23a138fb-53fa-4dd1-b93a-0cacf2975223","name":null,"startPileStr":"K4+300","startPileNo":"4300","endPileStr":"K4+400","endPileNo":"4400","progressPercent":null,"scoreLevel":"2"},{"id":"3d5e1179-a29c-4c0e-bb95-b169eb2dbbf0","name":null,"startPileStr":"K4+100","startPileNo":"4100","endPileStr":"K4+200","endPileNo":"4200","progressPercent":null,"scoreLevel":"5"},{"id":"a9db3c00-4284-4d87-a036-a96a2148cb25","name":null,"startPileStr":"K53+100","startPileNo":"53100","endPileStr":"K55+200","endPileNo":"55200","progressPercent":null,"scoreLevel":"0"}]},{"name":"明洞衬砌","progressPercent":null,"subList":null,"dataList":[{"id":"6a6d815b-d2c6-4d7e-bc22-91b773cc54dd","name":null,"startPileStr":"K0+090","startPileNo":"90","endPileStr":"K0+110","endPileNo":"110","progressPercent":null,"scoreLevel":"4"},{"id":"3b296752-9f9f-42ea-ae9b-d4570133912a","name":null,"startPileStr":"K0+060","startPileNo":"60","endPileStr":"K0+070","endPileNo":"70","progressPercent":null,"scoreLevel":"3"},{"id":"46537ffc-6755-45c3-a87a-696778b7ae50","name":null,"startPileStr":"K0+020","startPileNo":"20","endPileStr":"K0+030","endPileNo":"30","progressPercent":null,"scoreLevel":"4"}]}],"dataList":null},{"name":"仰拱及铺底","progressPercent":null,"subList":[{"name":"仰拱防水层铺设","progressPercent":null,"subList":null,"dataList":[{"id":"3c9570e6-791e-4c46-bb2b-1072c242d218","name":null,"startPileStr":"K0+035","startPileNo":"35","endPileStr":"K0+045","endPileNo":"45","progressPercent":null,"scoreLevel":"3"}]},{"name":"仰拱初支钢筋网","progressPercent":null,"subList":null,"dataList":[{"id":"6898ff39-7813-4c3a-9f26-32aa1e856cd6","name":null,"startPileStr":"K0+020","startPileNo":"20","endPileStr":"K0+030","endPileNo":"30","progressPercent":null,"scoreLevel":"2"}]},{"name":"开挖","progressPercent":null,"subList":null,"dataList":[{"id":"c0c20b71-cf60-4597-8241-2c113c776ac1","name":null,"startPileStr":"K0+003","startPileNo":"3","endPileStr":"K0+005","endPileNo":"5","progressPercent":null,"scoreLevel":"5"},{"id":"8c7db21c-54f7-40f8-af75-3f3dbd708d94","name":null,"startPileStr":"K4+200","startPileNo":"4200","endPileStr":"K4+300","endPileNo":"4300","progressPercent":null,"scoreLevel":"4"}]}],"dataList":null},{"name":"初期支护","progressPercent":null,"subList":[{"name":"初喷","progressPercent":null,"subList":null,"dataList":[{"id":"016f1190-6974-46df-ab12-db1f074694e2","name":null,"startPileStr":"K0+080","startPileNo":"80","endPileStr":"K0+085","endPileNo":"85","progressPercent":null,"scoreLevel":"0"},{"id":"12ad55ab-6e86-459e-b60d-51f67ca5990a","name":null,"startPileStr":"K4+450","startPileNo":"4450","endPileStr":"K4+500","endPileNo":"4500","progressPercent":null,"scoreLevel":"4"},{"id":"dd8a7f7e-b95d-4678-a7c5-bf0335be3699","name":null,"startPileStr":"K4+200","startPileNo":"4200","endPileStr":"K4+200","endPileNo":"4200","progressPercent":null,"scoreLevel":"3"}]},{"name":"钢筋网","progressPercent":null,"subList":null,"dataList":[{"id":"09d8faa2-1ad3-4c03-aa9d-ea572227fa38","name":null,"startPileStr":"K0+100","startPileNo":"100","endPileStr":"K0+110","endPileNo":"110","progressPercent":null,"scoreLevel":"1"}]}],"dataList":null},{"name":"电缆槽、中心排水沟","progressPercent":null,"subList":[{"name":"钢筋","progressPercent":null,"subList":null,"dataList":[{"id":"65bd2a67-ea01-4fa5-8e17-f11d8ba082f9","name":null,"startPileStr":"K0+055","startPileNo":"55","endPileStr":"K0+075","endPileNo":"75","progressPercent":null,"scoreLevel":"4"},{"id":"db3f29fe-f22f-468d-8175-b5e55a347abd","name":null,"startPileStr":"K0+002","startPileNo":"2","endPileStr":"K0+005","endPileNo":"5","progressPercent":null,"scoreLevel":"2"}]},{"name":"开挖","progressPercent":null,"subList":null,"dataList":[{"id":"eb2fba6c-4fca-45d8-8298-ec3785fca436","name":null,"startPileStr":"K0+055","startPileNo":"55","endPileStr":"K0+060","endPileNo":"60","progressPercent":null,"scoreLevel":"0"},{"id":"e8f3cebb-946d-411c-8a70-df58ae1d6589","name":null,"startPileStr":"K0+050","startPileNo":"50","endPileStr":"K0+055","endPileNo":"55","progressPercent":null,"scoreLevel":"0"},{"id":"c4d13f3d-7f24-47c8-bca6-1ac8d21c625c","name":null,"startPileStr":"K4+700","startPileNo":"4700","endPileStr":"K4+800","endPileNo":"4800","progressPercent":null,"scoreLevel":"4"}]}],"dataList":null},{"name":"防寒泄水洞出水口","progressPercent":null,"subList":[{"name":"分层铺筑过程","progressPercent":null,"subList":null,"dataList":[{"id":"feb7f696-1292-43cf-a00e-aaa524ef19c0","name":null,"startPileStr":"K0+085","startPileNo":"85","endPileStr":"K0+089","endPileNo":"89","progressPercent":null,"scoreLevel":"4"}]}],"dataList":null},{"name":"拱墙防排水","progressPercent":null,"subList":[{"name":"防水层铺设前初支状况","progressPercent":null,"subList":null,"dataList":[{"id":"d5f220d6-43b6-4ca1-b0cb-692da371cb1d","name":null,"startPileStr":"K0+000","startPileNo":"0","endPileStr":"K0+010","endPileNo":"10","progressPercent":null,"scoreLevel":"0"},{"id":"742e29f2-bbb4-4be7-b76b-fc2d3138d946","name":null,"startPileStr":"K4+300","startPileNo":"4300","endPileStr":"K4+350","endPileNo":"4350","progressPercent":null,"scoreLevel":"3"}]},{"name":"排水管","progressPercent":null,"subList":null,"dataList":[{"id":"ee47c454-1d74-4201-ba12-d1e803b2d6f0","name":null,"startPileStr":"K0+010","startPileNo":"10","endPileStr":"K0+050","endPileNo":"50","progressPercent":null,"scoreLevel":"5"}]},{"name":"预留洞室防水层铺设前初支状况","progressPercent":null,"subList":null,"dataList":[{"id":"2808a70b-c56e-4418-85cf-17de67a37589","name":null,"startPileStr":"K0+030","startPileNo":"30","endPileStr":"K0+030","endPileNo":"30","progressPercent":null,"scoreLevel":"5"}]}],"dataList":null},{"name":"外置保温层","progressPercent":null,"subList":[{"name":"保温层","progressPercent":null,"subList":null,"dataList":[{"id":"27960d36-0a36-435d-ad9b-2249b0240fbc","name":null,"startPileStr":"K0+010","startPileNo":"10","endPileStr":"K0+030","endPileNo":"30","progressPercent":null,"scoreLevel":"5"},{"id":"e37196d3-5430-427c-8352-1ac79938ead6","name":null,"startPileStr":"K0+004","startPileNo":"4","endPileStr":"K0+004","endPileNo":"4","progressPercent":null,"scoreLevel":"3"}]}],"dataList":null},{"name":"二衬","progressPercent":null,"subList":[{"name":"衬砌钢筋","progressPercent":null,"subList":null,"dataList":[{"id":"a7fca37d-a96b-4bb4-80c6-34d42dad3744","name":null,"startPileStr":"K4+550","startPileNo":"4550","endPileStr":"K4+600","endPileNo":"4600","progressPercent":null,"scoreLevel":"5"}]},{"name":"内置保温层","progressPercent":null,"subList":null,"dataList":[{"id":"3ca2dd7e-c990-4cf1-b0fe-524656d0ad87","name":null,"startPileStr":"K0+004","startPileNo":"4","endPileStr":"K0+009","endPileNo":"9","progressPercent":null,"scoreLevel":"1"}]}],"dataList":null},{"name":"开挖","progressPercent":null,"subList":[{"name":"掌子面围岩","progressPercent":null,"subList":null,"dataList":[{"id":"ef077ad8-3c9f-472b-8d15-e256fbe5ae76","name":null,"startPileStr":"K0+110","startPileNo":"110","endPileStr":null,"endPileNo":null,"progressPercent":null,"scoreLevel":"5"},{"id":"bc0f6638-3682-4021-87e5-1766c62e6bba","name":null,"startPileStr":"K0+090","startPileNo":"90","endPileStr":null,"endPileNo":null,"progressPercent":null,"scoreLevel":"4"},{"id":"d54c4a90-d92c-41c3-85aa-addc7658a857","name":null,"startPileStr":"K0+070","startPileNo":"70","endPileStr":null,"endPileNo":null,"progressPercent":null,"scoreLevel":"1"},{"id":"3617bc1c-1e4b-4ef0-aa09-4ab90930cf5e","name":null,"startPileStr":"K0+030","startPileNo":"30","endPileStr":null,"endPileNo":null,"progressPercent":null,"scoreLevel":"4"},{"id":"9b77c577-7d94-4b60-ad4d-aaa179f5b42b","name":null,"startPileStr":"K4+200","startPileNo":"4200","endPileStr":"K4+200","endPileNo":"4200","progressPercent":null,"scoreLevel":"4"}]}],"dataList":null}]}`)

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
