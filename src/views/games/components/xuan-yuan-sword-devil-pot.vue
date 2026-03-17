<template lang="pug">
.devil-pot-wrapper( ref="resize")
  h1 {{title}}
  el-form( label-width="100px" :inline="isInline")
    el-form-item( label="选择素材1：")
      el-select( v-model="value1" clearable placeholder="请选择素材1" popper-class="devil-pot-popper" @change="changeHandle")
        el-option( v-for="item,i in baseInfo.options1" :value="item" :label="item")
    el-form-item( label="选择素材2：")
      el-select( v-model="value2" clearable placeholder="请选择素材2" popper-class="devil-pot-popper" @change="changeHandle")
        el-option( v-for="item,i in baseInfo.options2" :value="item" :label="item")
    el-form-item( label="合成结果：")
      el-select( v-model="value3" clearable placeholder="选择查询" popper-class="devil-pot-popper" @change="value1 = '';value2 = ''")
        el-option( v-for="item,i in baseInfo.options3" :value="item" :label="item")
  .content
    h2 {{value3}} 合成表
    el-table( :data="filterTable")
      el-table-column( prop="value1" label="素材1")
      el-table-column( prop="value2" label="素材2")
      el-table-column( prop="value3" label="合成")
</template>

<script lang="ts" setup>
import { useEventListener, useResizeObserver } from '@vueuse/core'
// 引入DOM大小监听器
// import {
//   addResizeListener,
//   removeResizeListener
// } from "element-plus/lib/utils/dom/resize-event.js";
import { ref, watch, onMounted, onUnmounted } from 'vue'

import data from "../../../../static/XuanYuanSword/DevilPot.json";

const title = "轩辕剑之天之痕 炼妖表"
const value1 = ref<string>('')
const value2 = ref<string>('')
const value3 = ref<string>('')
const resize:any = ref(null)

var isInline = ref<boolean>(true)
const baseInfo = data
const filterTable:any = ref([])

watch(value3, (val) => {
  let arr = baseInfo.total.filter((item:any) => item.includes(`=${val}`));
  filterTable.value = arr.map((item:any) => {
    let newArr = item.split(/\+|\=/);
    return {
      value1: newArr[0],
      value2: newArr[1],
      value3: newArr[2]
    };
  });
}, {
  immediate: true
})

const resize$ = ref<HTMLElement>()
let stopResizeObserver: (() => void) | undefined = undefined
let stopResizeListener: (() => void) | undefined = undefined

onMounted(() => {
  ;({ stop: stopResizeObserver } = useResizeObserver(resize$, resizeWrapHandle))
    stopResizeListener = useEventListener('resize', resizeWrapHandle)
  // addResizeListener(resize.value, resizeWrapHandle);
})
onUnmounted(() => {
  stopResizeObserver?.()
  stopResizeListener?.()
  // removeResizeListener(resize.value, resizeWrapHandle);
})

const changeHandle = ():void => {
  var search = `${value1.value}+${value2.value}=`;
  var result = baseInfo.total.filter(item => item.includes(search));
  value3.value = result.length ? result[0].replace(search, "") : value3.value;
}
const resizeWrapHandle = ():void => {
  if(resize.value){
    isInline.value = resize.value.offsetWidth > 880;
  }
}

</script>

<style lang="stylus" scoped>
.devil-pot-wrapper
  font-size 1rem
  > h1
    text-align center
    padding 10px 0
    height 44px
    box-sizing border-box
  .el-form
    &.el-form--inline
      :deep() .el-input__inner
        width 175px
    &:not(.el-form--inline)
      padding 0 20px 0 10px
      .el-select
        display block
        :deep() .el-input__inner
          width 100%
  .el-form-item
    :deep() .el-form-item__label
      color #fff
  .el-select
    :deep() input,
    :deep() .el-input__wrapper
      color #ffffff
      background-color transparent
      &::placeholder
        color #FFF
  .content
    padding 0 20px 80px
    h2
      padding 10px 0
      text-align right
    .el-table
      background-color transparent
      :deep() tr
      :deep() th
      :deep() .el-table__empty-text
        background-color transparent
        color #ffffff
      :deep() tr:hover
        td
          background-color rgba(255, 255, 255, .2)
.el-select-dropdown__item
  max-width 80vw
</style>
