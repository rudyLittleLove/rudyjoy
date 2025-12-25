<template lang="pug">
.reactive-panel
  .reactive-catalog( :class="{hide: hideMenu}" @click="hideMenu = !hideMenu")
    slot( name="catalog")
  div.content
    slot( name="content")
</template>

<script lang="ts" setup>
import { ref } from 'vue'
var hideMenu =  ref<boolean>(true)

</script>

<style lang="stylus" scoped>
.reactive-panel
  width 1200px
  max-width 100%
  margin auto
  font-size 16px
  color #eeeeee
  .reactive-catalog
    position sticky
    top 50px
    background-repeat no-repeat
    background-size 100% 1px, 1px 100%
    background-image linear-gradient(90deg, #ffffff, rgba(9, 16, 26, 0)), linear-gradient(0deg, rgba(9, 16, 26, 0), #ffffff)
    float left
    width 300px
    box-sizing border-box
    margin-right 10px
    height calc(100vh - 53px)
  div.content
    // float left
    margin-top 45px
    margin-left 310px
    width 890px
    background-repeat no-repeat
    background-size 100% 1px, 1px 100%
    background-image linear-gradient(90deg, #ffffff, rgba(9, 16, 26, 0)), linear-gradient(0deg, rgba(9, 16, 26, 0), #ffffff)
    box-sizing border-box
    font-size 0
    min-height calc(100vh - 53px)
@media screen and (max-width 1270px)
  .reactive-panel
    width 890px
    .reactive-catalog
      position absolute
      top 50px
      left 0
      background-image linear-gradient(90deg, rgba(9, 16, 26, 0), #ffffff), linear-gradient(0deg, rgba(9, 16, 26, 0), #ffffff)
      background-color rgba(9, 16, 26, .9)
      background-position right top
      height calc(100vh - 53px)
      width 250px
      transition margin-left .2s
      z-index 5
      &.hide
        margin-left -250px
        &::before
          transform rotate(0deg)
          right -20px
          // text-indent -17px
      &::before
        overflow hidden
        // ◀
        content '▶'
        line-height 31px
        width 20px
        height 30px
        background rgba(255, 255, 255, .5)
        position absolute
        right 0
        top calc(50% - 15px)
        // border-radius 0 5px 5px 0
        border-radius 2px
        transform rotate(180deg)
        // word-spacing 1px
        white-space nowrap
        text-indent 2px
        transition text-indent .2s
      &:not(.hide)
        &::after
          content ''
          position absolute
          left 0
          top -50px
          bottom 0
          width 100vw
          background-image linear-gradient(90deg, transparent 250px, rgba(255, 255, 255, .2) 250px), linear-gradient(180deg, rgba(255, 255, 255, .2) 50px, transparent 50px)
          background-size 100% 100%, 250px 50px
          background-repeat no-repeat
    div.content
      margin-left 0
      background-image none
      max-width 100%
</style>
