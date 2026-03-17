<template lang="pug">
.prop-wrap
  el-tabs( v-model="type")
    el-tab-pane( v-for="(item, i) in data" :key="i" :label="item.titles[1]" :name="'index' + i")
      template( v-if="type === 'index'+ i")
        table( cellspacing="0" cellpadding="0" border="0")
          thead
            tr
              th( v-for="item2 in item.titles") {{item2.trim() ? item2 : '序号'}}
          tbody
            tr( v-for="item2 in item.data")
              td( v-for="item3 in item2") {{item3}}
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import propData from "../../../../static/propData.json";

const data = propData
const type = ref<string>('index0')

</script>
<style lang="stylus" scoped>
.prop-wrap
  padding 0 5px 70px
  width 100%
  height 100%
  margin auto
  font-size 16px
  :deep()
    .el-tabs__item
      color #ffffff
      &.is-active
        color #409EFF
  :deep()
    .el-icon-arrow-left:before
    .el-icon-arrow-right:before
      color #409EFF
      text-shadow 0 0 1px #ffffff
  table
    width 100%
    table-layout fixed
  th
    text-align left
    &:nth-child(1)
      width 35px
  td
    padding 2px 4px
    border-bottom 1px solid #EBEEF5
  tr:nth-child(2n)
    td
      background-color rgba(0, 0, 0, .2)
@media (max-width 1200px)
  .prop-wrap
    min-width 300px
    width 95%
</style>
