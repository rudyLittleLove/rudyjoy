<template lang="pug">
div.topology-wrapper
  div.topology-box( ref="El" @mousewheel.prevent.stop="mousewheelHandle" @mousedown="addMouseMove")
    div.translate-wrap( ref="mapRef" :style="translateStyle")
      TopologyItem( :data="treeData" :style="scaleStyle")
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref, onMounted, onUnmounted, provide } from 'vue'
import TopologyItem from './TopologyItem.vue'
import { debounce } from 'lodash-es'

export default defineComponent({
  name: 'Topology',
  components: {
    TopologyItem
  },
  setup(props) { 
    const mapRef = ref<null | HTMLElement>(null);
    const mapHeight = ref<number>(0);
    // 切换节点展开关闭，判断画布卡片容器高度变化，自动移动容器，平滑展开关闭效果
    provide('action-change', () => {
      if(mapRef.value){
        const y = mapRef.value.clientHeight - mapHeight.value
        translateY.value -= y / 2
        mapHeight.value = mapRef.value.clientHeight
      }
    })

    const treeData = reactive({
      label: '1级目录',
      content: '顶层content',
      expand: false
    })

    const translateX = ref<number>(100);
    const translateY = ref<number>(100);
    const translateStyle = computed(() => {
      return `margin-left: ${translateX.value}px; margin-top: ${translateY.value}px`
    })
    const scaleStyle = computed(() => {
      return `zoom: ${scale.value}`
    })

    const scale = ref<number>(1);
    var scaleStep = 0.05;
    var maxScale = 2;
    var minScale = 0.2;
    const El = ref<null | HTMLElement>(null)

    var targetX = 0;
    var targetY = 0;

    onMounted(() => {
      document.addEventListener('mouseup', removeMouseMove)
      mapHeight.value = mapRef.value?.clientHeight as number
    })
    onUnmounted(() => {
      document.removeEventListener('mouseup', removeMouseMove);
    })
    const mousewheelHandle = (e: Event | any) => {
      let boundingRect = e.currentTarget.getBoundingClientRect();

      if(e.wheelDelta){
        let x = e.clientX - translateX.value - boundingRect.left;
        let y = e.clientY - translateY.value - boundingRect.top;
        let clientX = (x / scale.value ) * scaleStep;
        let clientY = (y / scale.value ) * scaleStep;
        if (e.wheelDelta > 0) {
          translateX.value -= scale.value >= maxScale ? 0 : clientX;
          translateY.value -= scale.value >= maxScale ? 0 : clientY;
          scale.value += scaleStep;
        } else {
          translateX.value += scale.value <= minScale ? 0 : clientX;
          translateY.value += scale.value <= minScale ? 0 : clientY;
          scale.value -= scaleStep;
          scale.value = Math.min(maxScale, Math.max(scale.value, minScale))
        }
      }
    }
    const addMouseMove = (e: Event | any) => {
      (El.value as any).style.cursor = 'grabbing';
      targetX = e.clientX;
      targetY = e.clientY;

      (El.value as any).addEventListener('mousemove', moveCanvasFunc, false);

      document.onselectstart = () => false;
      document.ondragstart = () => false;
    }
    const removeMouseMove = () => {
      (El.value as any).style.cursor = '';
      (El.value as any).removeEventListener('mousemove', moveCanvasFunc, false);

      document.onselectstart = null;
      document.ondragstart = null;
    }
    const moveCanvasFunc = (e: Event | any) => {
      e.preventDefault();
      let moveX = e.clientX - targetX;
      let moveY = e.clientY - targetY;

      translateX.value += moveX;
      translateY.value += moveY;

      targetX = e.clientX;
      targetY = e.clientY;
    }

    return {
      El,
      mapRef,
      treeData,
      translateStyle,
      scaleStyle,
      mousewheelHandle,
      addMouseMove
    }
  }
})
</script>

<style lang="stylus" scoped>
.topology-wrapper {
  height: 100%;
  --bg-color: #5a9; // 背景色，与覆盖线条颜色一致，不支持背景图，因为覆盖背景线条与图样式差异过大
  background-color: var(--bg-color);
  .topology-box {
    overflow: hidden;
    height: 100%;
    cursor: grab;
    box-sizing: border-box;
  }
}
</style>