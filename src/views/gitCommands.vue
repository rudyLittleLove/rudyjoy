<template lang="pug">
.git-commands-wrap
  h2 git 命令
  h3 常用命令
  ul.common-commands
    li( v-for="(item, i) in gitData.commonCommands")
      span.command {{item.split('//')[0]}}
      span.annotation //{{item.split('//')[1]}}
  h3 团队配合流程
  ul.git-flow
    li( v-for="(item, i) in gitData.gitFlow")
      span.command {{item.split('//')[0]}}
      span.annotation //{{item.split('//')[1]}}
  h3 紧急切换分支处理
  ul.git-test
    li( v-for="(item, i) in gitData.gitTest")
      span.command {{item}}
</template>

<script lang="ts" setup>
import gitData from "../../static/gitCommonds.json";
</script>
<style lang="stylus" scoped>
.git-commands-wrap
  width 900px
  height 100%
  margin auto
  font-size 16px
  h2
    text-align center
  h3
    padding-left 10px
    border 1px solid #EBEEF5
    line-height 50px
    background-color #409EFF
    color #ffffff
  ul
    margin-bottom 20px
    border 1px solid #EBEEF5
    li:nth-child(odd)
      background-color #f5f7fa
    li
      border-bottom 1px solid #EBEEF5
      padding 3px 5px
      .command
        font-weight bold
        padding-right 10px
      .annotation
        letter-spacing 2px
        font-style italic
        font-size .8em
        color #999
@media (max-width 900px)
  .git-commands-wrap
    min-width 360px
    width 100%
</style>
