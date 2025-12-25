<template lang="pug">
reactive-panel
  template( v-slot:catalog)
    h3.title 文章目录
    ul.blogs-ul
      li( v-for="(item, i) in catalogs" :key="i" :class="{active: activeLabel === item.label}")
        span( @click="targetHandle(item)") {{ i+1 }}. {{ item.label }}
  template( v-slot:content)
    iframe( ref="iframe")
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import ReactivePanel from "@/views/components/reactive-panel.vue";
import { useRouter } from 'vue-router';
const $router = useRouter();

interface fileInfo {
  label: string,
  html: any
}

var activeLabel = ref<string>('')

const catalogs:fileInfo[] = [
  {
    label: "只需一个DOM，纯CSS实现线性跑马灯特效",
    html: import('../../../static/htmlFile/marquee.html?raw')
  },
  {
    label: "前端如何理解正则-由浅入深的学习",
    html: import("../../../static/htmlFile/regexpLearn.html?raw")
  },
  {
    label: "DOM property 和 attribute 的区别详解",
    html: import("../../../static/htmlFile/propAndAttr.html?raw")
  },
  {
    label:
      "CSS 预编译语言 变量全局引用方式 vue-cli@3.0 stylus/sass/less 使用方法",
    html: import("../../../static/htmlFile/preStyle.html?raw")
  },
  {
    label: "JavaScript 有哪些数据类型 以及获取与判断的方法",
    html: import("../../../static/htmlFile/jsType.html?raw")
  },
  {
    label:
      "进入debugger调试时, this 输出 undefined的问题，箭头函数与babel造成的调试不便",
    html: import("../../../static/htmlFile/debuggerConsole.html?raw")
  },
  {
    label:
      "JavaScript 多线程处理计算密集型或高延迟的任务时，避免页面卡顿的方法",
    html: import("../../../static/htmlFile/jsWorker.html?raw")
  },
  {
    label:
      "Vue-router 不允许导航到当前位置（'/path'）错误原因以及修复方式",
    html: import("../../../static/htmlFile/vue-rouerr-error.html?raw")
  },
  {
    label: "CSS制作类似 Photoshop 模糊蒙版效果",
    html: import("../../../static/htmlFile/masking.html?raw")
  },
  {
    label: "开发小技巧之调试DOM",
    html: import("../../../static/htmlFile/debugger-dom.html?raw")
  },
  {
    label:
      "JavaScript 数组高性能去重 千万级数据去重效率测试 高效去重详解",
    html: import("../../../static/htmlFile/distinct.html?raw")
  },
  {
    label: "vscode 自定义编辑器样式 CSS修改",
    html: import("../../../static/htmlFile/vscode-style-edit.html?raw")
  },
  {
    label:
      "vue中 iframe 引入 本地静态html文件，vue-cli2与vue-cli3引用的差异",
    html: import("../../../static/htmlFile/iframe-load.html?raw")
  },
  {
    label: "canvas 绘制特效 小球连接线动画",
    html: import("../../../static/htmlFile/circle-connect.html?raw")
  },
  {
    label: "使用canvas 如何绘制形状并支持拖拽、缩放功能",
    html: import("../../../static/htmlFile/canvas-scale-offset.html?raw")
  },
  {
    label:
      "elementUI el-form 组件 验证 提示不能为空，以及验证不生效的详细原因",
    html: import("../../../static/htmlFile/el-form-valid.html?raw")
  },
  {
    label: "vue 组件选项的推荐顺序 与 自动排序",
    html: import("../../../static/htmlFile/vue-prop-sort.html?raw")
  },
  {
    label: "删除列表中一个DOM，其余DOM动态过渡的方法",
    html: import("../../../static/htmlFile/dom-transition.html?raw")
  },
  {
    label: "深入理解CSS之 如何使子元素撑宽 设置了 block 的父元素",
    html: import("../../../static/htmlFile/strut-block-dom.html?raw")
  },
  {
    label: "遮罩覆盖的DOM，如果触发点击 等一系列事件",
    html: import("../../../static/htmlFile/pointer-event.html?raw")
  },
  {
    label: "iView DatePicker 组件 选择年_月 下拉框异常收缩",
    html: import("../../../static/htmlFile/iViewDatePickerError.html?raw")
  }
]
var html = ref<string>('')
const iframe = ref(null)

const addIframeStyle = (element:any, style:string):void => {
  var nod = document.createElement("style");
  nod.type = "text/css";
  nod.innerHTML = style;

  element.getElementsByTagName("head")[0].appendChild(nod);
}
const activeHandle = (label:any):void => {
  let activeItem =
    catalogs.filter(item => item.label === label)[0] ||
    catalogs[0];

  activeLabel.value = activeItem.label;
  html.value = activeItem.html;
}

const targetHandle = (item:fileInfo):void => {
  $router.push({
    name: "blogs",
    query: {
      label: item.label
    }
  });
}

onMounted(() => {
  activeHandle($router.currentRoute.value.query.label)
})

watch(() => $router.currentRoute.value, (val) => {
  activeHandle(val.query.label)
})

watch(html, (val:any) => {
  if(iframe.value){
    const iframeDom:any = iframe.value || document.createElement("iframe");
    const rootDom = iframeDom.contentWindow.document || document
    val.then((data:any):void => {
      rootDom.documentElement.innerHTML = data.default.replace('</head>',`
        <style type="text/css">
          ::-webkit-scrollbar{
            width: 7px;
            height: 7px;
          }
          ::-webkit-scrollbar-thumb{
            background-color: rgba(255, 255, 255, .2);
            border-radius: 3px;
          }
          body { color: #eeeeee }
          pre>code { background-color: rgba(255,255,255,.1) }
          h1:after, h2:after { border-color: rgba(255, 255, 255, .8) }
        </style>
        </head>
      `)
      // rootDom.documentElement.innerHTML = data.default;
    })
    // addIframeStyle(
    //   rootDom.documentElement,
    //   `
    //   ::-webkit-scrollbar{
    //     width: 7px;
    //     height: 7px;
    //   }
    //   ::-webkit-scrollbar-thumb{
    //     background-color: rgba(255, 255, 255, .2);
    //     border-radius: 3px;
    //   }
    //   body { color: #eeeeee }
    //   pre>code { background-color: rgba(255,255,255,.1) }
    //   h1:after, h2:after { border-color: rgba(255, 255, 255, .8) }
    // `
    // );
    rootDom.body.scrollTop = 0;
  }
})
</script>

<style lang="stylus" scoped>
.reactive-panel
  .title
    font-size 16px
    padding 2px 5px
  .blogs-ul
    position relative
    z-index 1
    font-size 14px
    height calc(100% - 25px)
    box-sizing border-box
    overflow auto
    padding-bottom 70px
    > li
      padding 2px 5px
      margin-top 10px
      &.active
        color #0cb0e4
      > span
        cursor pointer
        &:hover
          text-decoration underline dashed
  iframe
    min-height calc(100vh - 53px)
    border none
    width 100%
</style>
