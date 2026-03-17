<template lang="pug">
.home-wrap( ref="wrap" @click="switchBgHandle")
  .container-wrap.marquee-line
    WebHeader( :show-header="true")
    .show-audio( :class="{close: !showAudio}")
      //- div.el-icon-d-arrow-right( @click="showAudio = !showAudio")
      el-icon( :size="30" color="#ffffff" @click="showAudio = !showAudio")
        i-ep-DArrowRight
      audio( loop src="../../../static/music/bg.mp3" ref="audio" controls class="audio")
        source( src="../../../static/music/bg.mp3" type="audio/mp3")
    div( class="custom-scrollbar")
      router-view
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { ref, reactive, onMounted } from 'vue'
// @ts-ignore
import Warpdrive from '@/assets/js/warpdrive.js'
// @ts-ignore
import circleConnect from '@/assets/js/circleConnect.js'
import WebHeader from '@/views/home/header.vue'
// const Warpdrive:any = require('@/assets/js/warpdrive.js')
// const circleConnect:any = require('@/assets/js/circleConnect.js')

var circle:any = ''
var warpdrive:any = ''
var showAudio = ref(false)
const clickNumber = ref(0)
const wrap = ref(null)

onMounted(() => {
  initBgAnimation()
})

const initBgAnimation = () => {
  let wrapDom = wrap.value || document.createElement('div')

  if (warpdrive) {
    warpdrive.distory()
    warpdrive = ''
    circle = new circleConnect(wrap.value, {
      // num: 50,
      width: wrapDom.clientWidth,
      height: wrapDom.clientHeight
    })
  } else {
    circle && circle.distory()
    warpdrive =
      warpdrive ||
      new Warpdrive(wrap.value, {
        width: wrapDom.clientWidth,
        height: wrapDom.clientHeight,
        autoResize: true,
        addMouseControls: false,
        addTouchControls: false,
        starCount: (wrapDom.clientWidth * wrapDom.clientHeight) / ('ActiveXObject' in window ? 2000 : 1000),
        starBgCount: 0,
        starfieldBackgroundColor: { r: 28, g: 39, b: 59 }
      })
  }
}
const switchBgHandle = () => {
  clickNumber.value++
  if (clickNumber.value % 5 === 0) {
    initBgAnimation()
  }
}

// export default {
//   name: 'Home',
//   components: { WebHeader },
//   data() {
//     return {
//       index: 0,
//       moving: true,
//       // backgorundImage: require("@/assets/img/bg_evening.jpg"),
//       x: 0,
//       y: 0,
//       activeX: 0,
//       activeY: 0,
//       targetX: 0,
//       targetY: 0,
//       warpdrive: '',
//       circle: '',
//       showHeader: true,
//       scrollTop: 0,
//       showAudio: true,
//       clickNumber: 0
//     }
//   },
//   computed: {
//     // blurPosition() {
//     //   return `left: ${this.x}px; top: ${this.y}px`;
//     // }
//   },
//   mounted() {
//     this.initBgAnimation()
//     // this.initBgAnimation();
//     // setInterval(() => {
//     //   this.initBgAnimation();
//     // }, 1000 * 30);
//     // this.$refs.audio.play();
//   },
//   destroyed() {
//     // window.removeEventListener("mouseup", this.eventListenHandle);
//     // window.removeEventListener("resize", this.resizeHandle);
//   },
//   methods: {
//     switchBgHandle() {
//       this.clickNumber++
//       if (this.clickNumber % 5 === 0) {
//         this.initBgAnimation()
//       }
//     },
//     scrollHandle(e) {
//       // this.showHeader = !(this.scrollTop < e.target.scrollTop)
//       this.scrollTop = e.target.scrollTop
//     },
//     initBgAnimation() {
//       // window.addEventListener("mouseup", this.removeEventListenerHandle);

//       // window.addEventListener("touchend", this.removeEventListenerHandle);

//       // window.addEventListener("resize", this.resizeHandle);
//       if (this.warpdrive) {
//         this.warpdrive.distory()
//         delete this.warpdrive
//         this.circle = new circle(this.$refs.wrap, {
//           // num: 50,
//           width: this.$refs.wrap.value.clientWidth,
//           height: this.$refs.wrap.value.clientHeight
//         })
//       } else {
//         this.circle && this.circle.distory()
//         this.warpdrive =
//           this.warpdrive ||
//           new warpdrive(this.$refs.wrap, {
//             width: this.$refs.wrap.value.clientWidth,
//             height: this.$refs.wrap.value.clientHeight,
//             autoResize: true,
//             addMouseControls: false,
//             addTouchControls: false,
//             starCount: (this.$refs.wrap.value.clientWidth * this.$refs.wrap.value.clientHeight) / (!!window.ActiveXObject || 'ActiveXObject' in window ? 2000 : 1000),
//             starBgCount: 0,
//             starfieldBackgroundColor: { r: 28, g: 39, b: 59 }
//           })
//       }
//     }
//   }
// }
</script>
<style lang="stylus" scoped>
// .button-group
//   padding-top 30px
//   padding-bottom 30px
//   .el-button
//     margin-right 10px
//     margin-top 10px
//     &+.el-button
//       margin-left 0
@keyframes upDow
  0%
    left -37px
  50%
    left -31px
  100%
    left -37px

.home-wrap
  height 100vh
  overflow hidden
  .show-audio
    // height 100px
    position fixed
    left calc(100% - 300px)
    width 300px
    bottom 10px
    z-index 1
    transition left .3s
    &.close
      left 100%
      > i.el-icon
        transform rotate(180deg)
    > i.el-icon
      color #ffffff
      // font-size 30px
      position absolute
      top calc(50% - 18px)
      left -37px
      transform rotate(0deg)
      animation upDow 3s infinite
      cursor pointer
  .container-wrap
    position absolute
    // height 100vh
    // width 100vw
    // // overflow hidden
    top 0
    left 0
    right 0
    bottom 0
    background-image linear-gradient(90deg, rgba(28, 39, 59, 0) 0%, #ffffff 100%), linear-gradient(0deg, #ffffff 0%, rgba(28, 39, 59, 0) 100%), linear-gradient(-90deg, rgba(28, 39, 59, 0) 0%, #ffffff 100%), linear-gradient(0deg, rgba(28, 39, 59, 0) 0%, #ffffff 100%)
    background-size 100px 2px, 2px 100px, 100px 2px, 2px 100px
    padding 1px
    background-clip content-box
    // > .rudy-scrollbar
    //   :deep()
    //     > .rudy-scrollbar__wrap
    //       > .rudy-scrollbar__view
    //         padding-top 50px
.home-wrap, .blur-bg
  background-color #000000
  background-image url('../../assets/img/bg_evening-yasuo.jpg')
  background-repeat no-repeat
  background-attachment fixed
  background-size cover
  background-position center center

.blur-box
  width 100px
  height 100px
  box-sizing border-box
  position absolute
  border 1px solid #cccccc
  overflow hidden
  transition margin-top .5s

.blur-bg
  content ''
  position absolute
  top -1000px
  left -1000px
  right -1000px
  bottom -1000px
  filter blur(4px)
</style>
