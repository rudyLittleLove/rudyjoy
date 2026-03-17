<script lang="ts" setup>
import { ref, watch } from 'vue'
import style from './index.module.scss'
import { CirclePlusFilled, RemoveFilled, CaretBottom } from '@element-plus/icons-vue'

const props = withDefaults(
  defineProps<{
    graph: any
  }>(),
  {},
)

const isScaleDrop = ref(false)
const activeScale = ref(100)
// 导航栏
const scaleMaps = ref([150, 100, 75, 50, 20])
function triggerZoom(zoomMethod: string) {
  transform(zoomMethod)
}

// watch(
//   () => props.graph?.scale,
//   () => {
//     console.log('----------');
//   }
// );

watch(
  () => props.graph,
  () => {
    if (props.graph) {
      props.graph.on('scale', (ratio: any) => {
        const zoom = (ratio * 100).toFixed(0)
        activeScale.value = Number(zoom)
      })
    }
  },
  {
    immediate: true,
  },
)

function handleChangePercent(percent: number) {
  activeScale.value = percent
  transform(percent)
}
// 如果是数字，直接缩放到指定大小；如果是zoomin 或者 zoomout，就调用x6的api来缩放
function transform(commandOrNumber: string | number) {
  if (typeof commandOrNumber === 'number') {
    props.graph.zoomTo(commandOrNumber / 100)
  } else {
    const ratio = activeScale.value / 100
    switch (commandOrNumber) {
      case 'zoomIn':
        if (ratio < 1.5) {
          props.graph.zoomTo(ratio + 0.05)
        }
        break
      case 'zoomOut':
        if (ratio > 0.2) {
          props.graph.zoomTo(ratio - 0.05)
        }
        break
      case 'centerContent':
        props.graph.centerContent()
        break
      default:
        break
    }
  }
  // const zoom = (props.graph.zoom() * 100).toFixed(0);
  // activeScale.value = Number(zoom);
}
</script>

<template>
  <div :class="style['scale-operation']" class="scale-operation" >
    <el-tooltip content="放大">
      <el-button type="text" @click="triggerZoom('zoomIn')">
        <el-icon size="20"><CirclePlusFilled /></el-icon>
      </el-button>
    </el-tooltip>
    <el-tooltip content="缩小">
      <el-button type="text" @click="triggerZoom('zoomOut')">
        <el-icon size="20"><RemoveFilled /></el-icon>
      </el-button>
    </el-tooltip>
    <el-dropdown @command="handleChangePercent" @visible-change="isScaleDrop = $event">
      <el-button type="text">
        <span>{{ activeScale }}%</span>
        <el-icon>
          <CaretBottom />
        </el-icon>
        <!-- <em class="el-icon-caret-bottom dropicon-rotate" :class="{ rotate: isScaleDrop }"></em> -->
      </el-button>
      <template #dropdown>
        <el-dropdown-menu class="dropdown-menu">
          <el-dropdown-item v-for="item in scaleMaps" :key="item" :command="item">
            {{ item }}%
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
