<template lang="pug">
.wrapper
  svg( viewBox="0 0 600 300")
    symbol( id="s-text")
      text( text-anchor="middle" x="50%" y="50%" dy=".35em") 404
    symbol( id="m-text")
      text( text-anchor="middle" x="50%" y="85%" dy=".50em") 您访问的页面找不到哦
    use( xlink:href="#s-text" class="text" v-for="v in 5")
    use( xlink:href="#m-text" class="text mi" v-for="v in 5")
  el-button( @click="$router.push({name: 'games'})" style="position: absolute;") 跳转
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const $router = useRouter();
</script>

<style lang="stylus" scoped>
@keyframes stroke
  100%
    stroke-dashoffset -400

.wrapper
  background-color #000000
  height 100%
  font 14.5em/1 Open Sans, Impact
  svg
    position absolute
    left 0
    width 100%
    height 100%
  .text
    fill none
    stroke-width 4
    stroke-linejoin round
    stroke-dasharray 70 330
    stroke-dashoffset 0
    animation stroke 6s infinite linear
  .mi
    stroke-width 1
    font-size 25px
  .text:nth-child(5n + 1)
    stroke #F2385A
    animation-delay -1.2s
  .text:nth-child(5n + 2)
    stroke #F5A503
    animation-delay -2.4s
  .text:nth-child(5n + 3)
    stroke #5D91F4
    animation-delay -3.6s
  .text:nth-child(5n + 4)
    stroke #56D9CD
    animation-delay -4.8s
  .text:nth-child(5n + 5)
    stroke #3AA1BF
    animation-delay -6s
</style>
