<template lang="pug">
div.wrapper
  el-upload(
    class="upload-demo"
    ref="upload"
    action=""
    list-type="picture-card"
    :file-list="fileList"
    :auto-upload="false"
    :on-change="changeHandle"
    :on-remove="removeHandle"
    )
      //- div( slot="file" slot-scope="{file}")
      //-   img( class="el-upload-list__item-thumbnail" :src="file.url" alt="")
      template( #trigger)
        el-button( type="primary") 选择图片
      template( #tip)
        div( class="el-upload__tip") 只能选择jpg/png文件
  ul( v-for="(item,i) in fileList" :key="i" class="img-item")
    img( :src="item.url")
    h4 getColor(url)
    div.rect( :style="`background-color: ${item.color}`")
    h4 getPalette(url, 6)
    div.rect( v-for="(v,i) in item.colors" :key="Math.random()" :style="`background-color: ${v}`")
    h4 getPalette(url, 18)
    div.rect( v-for="(v,i) in item.colors18" :key="Math.random()" :style="`background-color: ${v}`")
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// @ts-ignore
import { getColor, getPalette } from '@/libs/color-thief.js'
import { getCurrentInstance } from "vue";
// const { getColor, getPalette }:any = require('@/libs/color-thief.js')

const fileList = ref<any>([])

const changeHandle = (file:any, list:any) => {
  let reader = new FileReader()
  reader.readAsDataURL(file.raw)
  reader.onload = (e:any) => {
    // img.src = e.target.result
    getColor(e.target.result).then((color:[]) => {
      file.color = `rgb(${color.join(',')})`

      updateRender(file, list)
    })

    getPalette(e.target.result, 6).then((colors:[]) => {
      file.colors = colors.map((v:[]) => `rgb(${v.join(',')})`)

      updateRender(file, list)
    })

    getPalette(e.target.result, 18).then((colors:[]) => {
      file.colors18 = colors.map((v:[]) => `rgb(${v.join(',')})`)

      updateRender(file, list)
    })
  }
}

const updateRender = (file:any, list:any) => {
  if(file.color && file.colors && file.colors18){
    fileList.value = [...list]
  }
}

const removeHandle = (file:any, list:any) => {
  fileList.value = list
}

</script>

<style lang="stylus" scoped>
.wrapper {
  width: 1000px;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 50px;
  .upload-demo {
    margin: auto;
  }
  .img-item {
    margin-top: 10px;
    padding: 20px;
    margin-top: 20px;
    border: 1px solid #cccccc;
    h4 {
      margin: 10px 0;
    }
    img {
      width: 100%;
      box-shadow: 0 0 3px rgba(0, 0, 0, .2);
      height: 200px;
      object-fit: scale-down;
    }
    .rect {
      display: inline-block;
      margin-right: 20px;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
