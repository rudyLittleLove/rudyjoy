<template lang="pug">
div.dishes-wrapper
  h1 土家菜馆菜单
  el-form( :model="formData" inline)
    el-form-item( label="人数")
      el-input-number( v-model="formData.peopleNumber" controls-position="right")
    el-form-item( label="桌数")
      el-input-number( v-model="formData.tableNumber" controls-position="right")
    el-form-item( label="单价")
      el-input-number( v-model="formData.price" controls-position="right")
    el-form-item( label="餐位费")
      el-input-number( v-model="formData.peoplePrice" controls-position="right")
    span.item 总金额 ￥{{count}}
    span.item 每桌金额 ￥{{total }}
  el-checkbox-group( v-model="formData.checked")
    ul
      li( v-for="(item, i) in dishes" :key="i")
        h2 {{item.type}}
        div.list-wrap
          el-checkbox( v-for="(item2, i2) in item.children" :key="`${i}.${i2}`" :label="item2.id" :class="{light: balance === +item2.price}") {{item2.name}} 
            span.price( v-if="item2.name !== '炒时蔬'") ￥{{item2.price}}
            el-input( v-else v-model="item2.price")
  .right-box
    h2 已点菜品
    ul
      li( v-for="(item, i) in formData.checked" :key="i" @click="formData.checked.splice(i, 1)") {{dishesObj[item].name}}
        span ￥{{dishesObj[item].price}}
    .box
      p 桌数
        span {{formData.tableNumber}} 桌
      p 每桌金额
        span ￥{{total}}
      p 已点菜品金额 
        span ￥{{totaled}}
      p( :class="{danger: total < totaled}") 剩余金额 
        span ￥{{balance}}
</template>

<script lang="ts" setup>
import { computed, ref, reactive, onMounted } from 'vue'
import dishesJson from './dishes.json'
const dishesObj:any = {}

const dishes = dishesJson.map((item:any) => {
  item.children.sort((a:any, b:any) => (a.price >>> 0) - (b.price >>> 0))

  item.children.map((v:any) => {
    v.id = v.name + v.price
    dishesObj[v.id] = v
    return v
  })
  return item
})

interface form {
  peopleNumber: number,
  tableNumber: number,
  price: number,
  peoplePrice: number,
  checked: []
}
const formData = reactive<form>({
  peopleNumber: 20,
  tableNumber: 2,
  price: 15,
  peoplePrice: 3,
  checked: []
})

const count = computed(() => {
  return formData.peopleNumber * (formData.price - formData.peoplePrice)
})
const total = computed(() => {
  return count.value / formData.tableNumber
})
const totaled = computed(() => {
  let arr = formData.checked.map(item => {
    return dishesObj[item].price
  })
  arr.push(0, 0)
  return arr.reduce((a, b) => +a + +b)
})
const balance = computed(() => {
  return total.value - totaled.value
})
</script>

<style lang="css">
.light > .el-checkbox__label {
  color: orange;
}
</style>

<style lang="stylus" scoped>
.dishes-wrapper
  width 1080px
  height 100%
  margin: 0 auto
  > h1
    text-align center
  .el-form
    margin-top 15px
    :deep() .el-form-item__content
      width 100px
      .el-input-number--mini
        width 100px
    .item
      font-size 14px
      line-height 28px
      display inline-block
      width 120px
  .el-checkbox-group
    h2
      font-size 20px
  .list-wrap
    padding 10px 0
    .el-checkbox
      min-width 180px
      padding: 5px 0
      .el-input
        width 80px
        float right
        margin-top -5px
      :deep() .el-checkbox__label
        font-size 16px
        width calc(100% - 20px)
      .price
        float right
  .right-box
    width 300px
    height 500px
    box-shadow 0 0 3px rgba(0, 0, 0, .2)
    position fixed
    top 50px
    left calc(50% + 530px)
    // overflow auto
    padding-bottom 70px
    h2
      padding 5px
      text-align center
    ul
      height calc(100% - 80px)
      overflow auto
    li
      font-size 14px
      padding 5px 10px
      &:hover
        box-shadow 0 0 3px rgba(255, 0, 0, 1) inset
      span
        float right
    .box
      position absolute
      border-top 1px solid #eeeeee
      bottom 0
      width 100%
      box-sizing border-box
      font-size 14px
      padding 5px
      p
        padding 3px 0
      .danger
        color red
      span
        float right
</style>
