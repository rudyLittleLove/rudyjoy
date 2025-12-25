<template lang="pug">
.table-wrap
  div( class="table-box" :style="`height: ${maxHeight - 130}px`")
    table( v-if="type === 'list'" cellspacing="0" cellpadding="0" border="0")
      colgroup
        col( width="80px")
      thead
        tr
          th
            span.width-80 图片
          th 名称
          th 普通掉落
          th 稀有掉落
          th 出现地点
          th 备注
      tbody
        tr( v-for="item in dataList")
          td
            el-image( class="el-img" :key="item.imgSrc" :src="`http://rudyjoy.cn/static/yzdel/${item.url}`" :preview-src-list="item.urlList || []" lazy)
              div( slot="error")
                i.el-icon-picture-outline
          td
            span {{item.name}}
          td
            span {{item.ordinaryDrop}}
          td
            span {{item.rareDrop}}
          td
            span {{item.address}}
          td
            span {{item.description}}
    ul.item-wrap( v-else)
      li( v-for="(item, i) in dataList")
        div
          //- img( ref="img" :src="item.imgSrc" :listen="listen")
          el-image( class="el-img" :key="item.imgSrc" :src="`http://rudyjoy.cn/static/yzdel/${item.url}`" :preview-src-list="item.urlList || []" lazy)
            div( slot="error")
              i.el-icon-picture-outline
          span No: {{item.No}}
          span 名称：{{item.name}}
          span 普通掉落：{{item.ordinaryDrop}}
          span 稀有掉落：{{item.rareDrop}}
          span 出现地点：{{item.address}}
          span 备注：{{item.description}}
  div.page-wrap
    el-pagination(
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-sizes="[10, 20, 50, 100, 200, 500]"
      :page-size="pageSize"
      small
      layout="total, sizes, prev, pager, next, jumper"
      :total="total")
    el-button( type="success" size="small" @click="switchTypeHandle" class="switch-button") 切换视图
    el-input( v-model="searchVal" size="small" @keyup.native.enter="calcList" placeholder="请输入搜索值，回车确认")
      el-button( slot="append" icon="el-icon-search" @click="calcList")
</template>

<script lang="ts" setup>
import jsonData from "../../../../static/monsterData.json";
import { ref, reactive, onMounted } from 'vue'

const type = ref<string>('list');
const data:any = jsonData.map((v:any, i:number) => {
  v.No = i+1
  return v
})
const dataList:any = reactive([])
const total = ref<number>(0)
const pageNum = ref<number>(1)
const pageSize = ref<number>(10)
const searchVal = ref<string>('')
const maxHeight = ref<number>(document.documentElement.clientHeight)

onMounted(() => {
  calcList()
  window.onresize = () => {
    maxHeight.value = document.documentElement.clientHeight
  }
})

const switchTypeHandle = ():void => {
  type.value = type.value === "list" ? "item":"list";
}
const handleSizeChange = (v:number):void => {
  pageSize.value = v
  pageNum.value = 1
  calcList()
}
const handleCurrentChange = (v:number):void => {
  pageNum.value = v
  calcList()
}
const getAssetsImages = (url:string) => new URL(url, import.meta.url).href
const calcList = ():void => {
  let filterData = calcPage(data, pageNum.value, pageSize.value, {
    key: ["name", "ordinaryDrop", "rareDrop", "description", "address"],
    val: searchVal.value
  });
  // let arr = filterData.data.map((item:any, i:number) => {
  //   let urlList = filterData.data.map(
  //     (e:any) => e.url && import(`../../../../static/yzdel/${e.url}`)
  //   );
  //   item.urlList = [
  //     ...urlList.slice(i, pageSize.value),
  //     ...urlList.slice(0, i)
  //   ];
  //   return item;
  // });
  pageNum.value = filterData.pageNum;
  total.value = filterData.count;
  dataList.splice(0)
  dataList.push(...filterData.data)
}
const calcPage = (data:any, num:number, size:number, searchObj:object, xor?:boolean):any => {
  // 浅拷贝data
  let filterData = Object.assign([], data);

  if (searchObj) {
    let filterFun = (filter:any) => {
      return Array.isArray(filter.key)
        ? (item:any) =>
            !!filter.key.filter(
              (key:string) => (item[key] || "").indexOf(filter.val) !== -1
            ).length
        : (item:any) => (item[filter.key] || "").indexOf(filter.val) !== -1;
    };

    if (Array.isArray(searchObj)) {
      let datas:any = [];
      if (xor) {
        searchObj.forEach(filter => {
          filterData = filterData.filter((item:string) => filterFun(filter)(item));
        });
      } else {
        searchObj.forEach(filter => {
          datas.push(filterData.filter((item:string) => filterFun(filter)(item)));
        });
        filterData = Array.from(new Set([].concat.apply([], datas)));
      }
    } else {
      filterData = filterData.filter((item:string) => filterFun(searchObj)(item));
    }
  }

  let pageCount = Math.ceil(filterData.length / size);
  let pageNum = (pageCount >= num ? num : pageCount) || 1;

  return {
    data: filterData.slice(size * (pageNum - 1), size * pageNum),
    pageSize: size,
    pageNum: pageNum,
    pageCount: pageCount,
    count: filterData.length
  };
}


</script>
<style lang="stylus" scoped>
.table-wrap
  width 100%
  margin auto
  height 100%
  font-size 16px
  .el-img
    width 80px
    height 80px
    background-image linear-gradient(-45deg, #f5f7fa 0%, #cccccc 25%, transparent 25%, transparent 50%,#f5f7fa 50%, #cccccc 75%, transparent 75%, transparent 100%)
    background-size 15px 15px
    text-align center
    .el-icon-picture-outline
      font-size 30px
      line-height 80px
      vertical-align middle
      color #909399
  > div
    overflow auto
    height calc(100% - 50px)
  &::after
    content ''
    display block
    clear both
  // > button
  //   position fixed
  //   top 50%
  //   right calc(50% - 700px)
  //   border 1px solid #ccc
  //   padding 3px 5px
  //   margin-top 5px
  //   border-radius 3px
  //   background-color cornsilk
  table
    table-layout fixed
    width 100%
    thead
      // padding 0
      // position fixed
      // z-index 1
      // top 0
      color #FFFFFF
      box-shadow 0 0 3px rgba(0, 0, 0, .3)
    th
      padding 5px
      text-align left
      height 25px
      line-height 25px
      // width 222px
      background-color rgba(0, 0, 0, .5)
      .width-80
        display block
        width 80px
      &:nth-child(1)
        width 80px
    tbody
      img
        width 80px
        height 80px
      td
        border-bottom 1px solid #EBEEF5
        padding 3px 5px
      // tr:nth-child(1)
      //   td
      //     padding-top 30px
      tr
        td:nth-child(1)
          padding-left 0
      tr:nth-child(2n -1)
        td
          background-color rgba(0, 0, 0, .3)
      // tr:nth-child(2n)
      //   td
      //     background-color rgba(122, 23, 111,.1)
  .item-wrap
    padding-left 10px
    .el-img
      float left
      margin-right 10px
      margin-bottom 40px
    img
      width 80px
      height 80px
      float left
      margin-right 10px
      margin-bottom 40px
    li
      height 120px
      float left
      width calc(100% / 3)
      box-sizing border-box
      margin-top 10px
      // background-color rgba(32,42,233, .1)
      background-color rgba(255, 255, 255, .2)
      overflow hidden
      border-radius 2px
      padding-right 10px
      background-clip content-box
      .marquee-line
        width calc(100% - 2px)
        background-image linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, orange 100%), linear-gradient(0deg, orange 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, orange 100%), linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, orange 100%)
        animation moveLine 4s infinite linear
      span
        display block
        line-height 20px
        font-size 14px
  .page-wrap
    height 80px
    margin 10px auto
    .el-pagination
      float none
      // --el-text-color-regular #ffffff
    .el-input
      float left
      width 250px
      margin 5px 10px 0 0
    .switch-button
      float right
      margin 5px 10px 0 0
      padding 6px 5px
@media (max-width: 1200px)
  .table-wrap
    width 100%
    > button
      position visible
    > div
      height calc(100% - 80px)
    .item-wrap
      li
        width calc(100% / 3)
    // .page-wrap
    //   height 80px
    //   .el-pagination
    //     float none
    //   .el-input
    //     float left
@media (max-width: 900px)
  .table-wrap
    .item-wrap
      li
        width calc(100% / 2)
@media (max-width: 600px)
  .table-wrap
    min-width 300px
    .item-wrap
      li
        width calc(100% / 1)
</style>
<style lang="stylus">
@media (max-width: 800px)
  .table-wrap
    .page-wrap
      .number
        display none
        &.active
          display block
      .more
        display none
    .el-pagination
      padding 2px 2px
      .el-select
        .el-input
          width 88px
      .el-pagination__sizes
        margin-right 0
    .el-pagination button,
    .el-pagination span:not([class*=suffix])
    .el-pager li
      min-width 20px
@media (max-width: 600px)
  .table-wrap
    .el-pagination__jump
      margin-left 0
</style>
