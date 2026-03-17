<template lang="pug">
.stashes-wrapper
  h1 {{title}}
  el-select( v-model="active" clearable placeholder="请选择位置与任务定位" popper-class="stashes-popper" value-key="title")
    el-option( v-for="item,i in baseInfo" :value="item" :label="item.title")
      a( :href="`#${item.title}`") {{item.title}}
  .content
    ul
      li( v-for="item,i in baseInfo" :key="i")
        h2( :id="item.title" ) {{item.title}}
        p( v-for="item2,i2 in item.items" :key="i2") {{i2 + 1}}. 
          span {{item2.title}}
          | {{item2.text}}
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import baseInfo from "../../../../static/XuanYuanSword/Stashes.json";

const title = "轩辕剑之天之痕 隐藏物品位置"
var active = ref<string>("")
</script>

<style lang="stylus" scoped>
.stashes-wrapper
  font-size 1rem
  > h1
    text-align center
    padding 10px 0
    height 44px
    box-sizing border-box
  .el-select
    margin-left 20px
    :deep() .el-input__wrapper
      color #fff
      background-color transparent
    :deep() input
      &::placeholder
        color #FFF
  .content
    padding 0 20px 80px
    ul
      display inline-block
    li
      padding 5px 5px
      margin 10px 0
      background-color rgba(255, 255, 255, .1)
      border-radius 5px
      h2
        padding-bottom 5px
      p
        line-height 1.5
        padding 2
        font-size 15px
        span
          color #0cb0e4
          font-weight bold
.el-select-dropdown__item
  line-height 1.4
  height auto
  a
    display block
    margin 0 -20px
    padding 5px 20px
    color #606266
    max-width 80vw
    word-break break-all
    white-space normal
  &.selected
    a
      color #409EFF
</style>
