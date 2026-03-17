import { throttle } from 'lodash-es'
import { ref } from 'vue'

export function useDraggable() {
  const style = ref('')
  const property: any = {
    // 拖拽节点层级
    draggingLevel: null,
    // 拖拽节点顺序
    draggingIndex: null,
    // 拖拽DOM数据
    draggingDom: null,
    // 拖拽目标DOM数据
    dropDom: null,
    // 拖拽数据
    draggingData: null,
    // 拖拽目标数据
    dropData: null,
    // 拖拽目标相邻位置
    dir: null,
    // 保存成功移动后需要执行的删除 拖拽数据方法
    removeHandle: null,
    // 保存成功移动后需要执行的添加 拖拽数据方法
    dropHandle: null,
  }

  const setStyle = throttle(
    () => {
      // 判断不能存在放置dom 或者 方向时，隐藏拖拽样式
      if (property.dropDom && property.dir) {
        const position = property.dropDom.getBoundingClientRect()
        const offset = position.height / 5
        const top = property.dir === 'prev' ? position.y - offset : position.y + position.height + offset
        style.value = `top: ${top}px; left: ${position.x}px; width: ${position.width}px`
      } else {
        style.value = ''
      }
    },
    100,
    { leading: false },
  )

  return {
    setData: (prop: string, value: any) => {
      // 判断触发更新拖动样式计算
      if (['dropDom', 'dir'].includes(prop) && property[prop] !== value) {
        setStyle()
      }
      property[prop] = value
    },
    setStyle: (str: string) => {
      style.value = str
    },
    getData: (prop: string) => {
      return prop ? property[prop] : property
    },
    style,
  }
}
