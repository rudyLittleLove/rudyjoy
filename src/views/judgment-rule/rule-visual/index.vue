<script lang="ts" setup>
import { ref, nextTick, computed, watch, provide, useTemplateRef, onMounted, onUnmounted } from 'vue'
import type { RuleItemBO } from './constants'
import { RULE_MODE } from '../constants'
import { useDraggable } from './drag'
import style from './index.module.scss'
import RuleItem from './rule-item/index.vue'
import { removeKey, setKey } from './utils'

const props = withDefaults(
  defineProps<{
    data?: any
    mode?: RULE_MODE
  }>(),
  {
    mode: RULE_MODE.EDIT,
  },
)

const { setData, getData, style: lineStyle, setStyle } = useDraggable()

const allData = ref<RuleItemBO>({
  key: `${Date.now() + Math.random()}`,
  parentRuleGroupId: null,
  ruleGroupId: null,
  ruleListAndor: null,
  ruleGroupAndor: 'And',
  children: [
    {
      key: `${Date.now() + Math.random()}`,
      parentRuleGroupId: null,
      ruleGroupId: null,
      ruleListAndor: null,
      ruleGroupAndor: null,
      children: null,
      ruleGroupList: [
        {
          value: ''
        },
      ],
    },
  ],
  ruleGroupList: null,
})

// 当前规则层级
const levelNum = computed(() => {
  const tree = [allData.value]
  // 递归函数，用于计算每个节点的深度
  const calculateDepth = (node: any) => {
    // 如果节点没有子节点，返回1（当前节点本身）
    if (!node.children || node.children.length === 0) {
      return 1
    }

    // 递归计算每个子节点的深度，并返回最大值加1（当前节点本身）
    return 1 + Math.max(...node.children.map((child: any) => calculateDepth(child)))
  }

  // 计算树中每个节点的深度，并返回最大值
  return Math.max(...tree.map(node => calculateDepth(node)))
})

provide('setDragData', setData)
provide('getDragData', getData)
provide('getLevelNum', () => levelNum.value)
provide('setDragLineStyle', setStyle)

watch(
  () => props.data,
  () => {
    if (props.data) {
      allData.value = props.data
    }
  },
  {
    immediate: true,
  },
)

// 缩放、偏移量、最大缩放、最小缩放、缩放率
const scale = ref(1)
const scaleStep = 0.05
const maxScale = 1.5
const minScale = 0.2
const translateX = ref(106)
const translateY = ref(100)
const wrapRef: any = useTemplateRef<HTMLDivElement>('wrapRef')
const ruleRef: any = useTemplateRef<HTMLDivElement>('ruleRef')

const translateStyle = computed(() => {
  return `margin-left: ${translateX.value}px; margin-top: ${translateY.value}px`
})
const scaleStyle = computed(() => {
  return `zoom: ${scale.value}`
})

// 位移基准位置
const targetX = ref(0)
const targetY = ref(0)

// 缩放画布
function mousewheelHandle(e: Event | any) {
  // 阻止默认滚动 目前通过事件修饰符阻止
  // e.preventDefault();

  // dom 位置
  const boundingRect = e.currentTarget.getBoundingClientRect()

  if (e.wheelDelta) {
    const x = e.clientX - translateX.value - boundingRect.left
    const y = e.clientY - translateY.value - boundingRect.top

    const clientX = (x / scale.value) * scaleStep
    const clientY = (y / scale.value) * scaleStep

    if (e.wheelDelta > 0) {
      translateX.value -= scale.value >= maxScale ? 0 : clientX
      translateY.value -= scale.value >= maxScale ? 0 : clientY

      scale.value += scaleStep
    } else {
      translateX.value += scale.value <= minScale ? 0 : clientX
      translateY.value += scale.value <= minScale ? 0 : clientY

      scale.value -= scaleStep
    }

    scale.value = Math.min(maxScale, Math.max(scale.value, minScale))
  }
}

// 居中画布内数据
function setCenter() {
  const wrapWidth = wrapRef.value.clientWidth
  const boxWidth = ruleRef.value.dom.clientWidth * scale.value
  const wrapHeight = wrapRef.value.clientHeight
  const boxHeight = ruleRef.value.dom.clientHeight * scale.value

  translateX.value = (wrapWidth - boxWidth) / 2
  translateY.value = (wrapHeight - boxHeight) / 2
  // debugger
}

// 根据画布中心设置缩放倍数
function setScale(currentScale: number) {
  const ca = scale.value - currentScale

  const boundingRect = wrapRef.value.getBoundingClientRect()
  const x = boundingRect.width / 2 - translateX.value
  // - boundingRect.left
  const y = boundingRect.height / 2 - translateY.value
  // - boundingRect.top

  const clientX = (x / scale.value) * ca
  const clientY = (y / scale.value) * ca

  translateX.value += clientX
  translateY.value += clientY
  scale.value = currentScale
}

const eventObj: any = {}

watch(
  () => scale.value,
  () => {
    eventObj.scale?.(scale.value)
  },
)

// 自适应判断规则，填充满当前画布范围
function fitScale() {
  setTimeout(() => {
    const wrapWidth = wrapRef.value.clientWidth
    const boxWidth = ruleRef.value.dom.clientWidth
    const wrapHeight = wrapRef.value.clientHeight
    const boxHeight = ruleRef.value.dom.clientHeight

    const heightRatio = +(wrapHeight / boxHeight).toFixed(2)

    setScale(Math.min(+(wrapWidth / boxWidth).toFixed(2) - 0.05, heightRatio, 1))
    nextTick(() => {
      setCenter()
    })
  }, 0)
}

defineExpose({
  zoomTo: setScale,
  setCenter,
  fitScale,
  on: (event: string, callback: any) => {
    eventObj[event] = callback
  },
  getData: () => {
    return removeKey(allData.value)
  },
  setData: (ruleData: RuleItemBO) => {
    allData.value = setKey(ruleData)
  },
})

// 添加鼠标移动 功能，获取保存当前点击坐标
// e: Event
function addMouseMove(e: Event | any) {
  wrapRef.value.style.cursor = 'grabbing'
  document.onselectstart = () => false
  document.ondragstart = () => false
  targetX.value = e.clientX
  targetY.value = e.clientY

  wrapRef.value.addEventListener('mousemove', moveCanvasFunc, false)

  document.onselectstart = () => false
  document.ondragstart = () => false
}
// 移除鼠标移动事件
function removeMouseMove() {
  wrapRef.value.style.cursor = ''
  document.onselectstart = () => null
  document.ondragstart = null
  wrapRef.value.removeEventListener('mousemove', moveCanvasFunc, false)

  document.onselectstart = null
  document.ondragstart = null
}

// 移动画布
function moveCanvasFunc(e: Event | any) {
  e.preventDefault()
  const moveX = e.clientX - targetX.value
  const moveY = e.clientY - targetY.value

  translateX.value += moveX
  translateY.value += moveY

  targetX.value = e.clientX
  targetY.value = e.clientY
}

function addHandle(data: any) {
  allData.value = data
}

function removeHandle() {
  [allData.value] = allData.value.children as any
}

onMounted(() => {
  document.addEventListener('mouseup', removeMouseMove)
  // 预览模式
  if (props.mode === RULE_MODE.PREVIEW) {
    fitScale()
  }
  setCenter()
})

onUnmounted(() => {
  document.removeEventListener('mouseup', removeMouseMove)
})
</script>

<template>
  <div :class="style['rule-visual-wrapper']" class="rule-visual-wrapper">
    <div ref="wrapRef" class="rule-visual-box" @wheel.prevent.stop="mousewheelHandle" @mousedown="addMouseMove">
      <div class="translate-wrap" :style="translateStyle">
        <div class="zoom-box" :style="scaleStyle">
          <RuleItem
            :key="allData.key"
            ref="ruleRef"
            v-model:node-data="allData"
            :mode="props.mode"
            :is-root="true"
            :level="1"
            :index="0"
            @add="addHandle"
            @remove="removeHandle"
          />
        </div>
      </div>
    </div>
    <div class="drag-line" :style="`${lineStyle}`" />
  </div>
</template>
