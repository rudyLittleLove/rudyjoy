<template lang="pug">
.menu-wrap( :class="{show: showHeader}")
  .logo-title
    .logo-icon( @click="toPathHandle({routeName: 'baseInfo'})" )
    .mini-angle 多一点点爱
  nav.menu
    .menu-icon( @click="showMenu = !showMenu" :class="{close: showMenu}")
    ul( @click="showMenu = false")
      li( v-for="item in menuData" @click.stop="toPathHandle(item)")
        span {{ item.label }}
        ul( v-if="item.children && item.children.length")
          li( v-for="item2 in item.children" @click="toPathHandle(item2)")
            span( :style="{fontSize: item2.fontSize}") {{item2.label}}
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router';
const $router = useRouter();

const props = defineProps({
  showHeader: {
    type: Boolean,
    default: true
  }
})

interface Tree {
  label?: string,
  routeName?: string,
  href?: string,
  fontSize?: string,
  children?: Tree[]
}

var showMenu = ref<boolean>(false)

const menuData:Tree[] = [
  {
    label: '简单聊聊',
    routeName: 'baseInfo'
  },
  {
    label: '博文详情',
    routeName: 'blogs'
  },
  {
    label: '博客信息',
    children: [
      {
        label: 'CSDN',
        href: 'https://blog.csdn.net/rudy_zhou'
      },
      {
        label: '掘金',
        href: 'https://juejin.im/user/5e01e88f6fb9a0164b4ef199'
      }
    ]
  },
  {
    label: '个人社交',
    children: [
      {
        href: 'https://github.com/rudyLittleLove',
        label: 'GitHub'
      },
      {
        label: 'Stack Overflow',
        href: 'https://stackoverflow.com/users/12598378/%e5%a4%9a%e4%b8%80%e7%82%b9%e7%82%b9%e7%88%b1',
        fontSize: '14px'
      },
      {
        label: 'JSRUN',
        href: 'https://jsrun.net/u/rudylittlelove'
        // fontSize: '14px'
      },
      {
        label: 'MAKEAPIE',
        href: 'https://www.makeapie.com/user.html?u=obd-o2SdpVu0xEEq5kDTO4FCDMKLB-xKSBD&type=work'
      }
    ]
  },
  {
    label: '游戏库',
    children: [
      {
        label: '勇者斗恶龙',
        routeName: 'games'
      },
      {
        label: '轩辕剑之天之痕',
        routeName: 'XuanYuanSwordStashes'
      }
    ]
  },
  {
    label: 'more',
    children: [
      {
        label: 'getImageColor',
        routeName: 'getImageColor'
      },
      {
        label: 'gitCommands',
        routeName: 'gitCommands'
      },
      {
        label: 'dishes',
        routeName: 'dishes'
      },
      {
        label: 'render',
        routeName: 'render'
      },
      // {
      //   label: 'rectRandom',
      //   routeName: 'rectRandom'
      // },
      // {
      //   label: 'flipPage',
      //   routeName: 'flipPage'
      // },
      {
        label: 'drawRect',
        routeName: 'drawRect'
      },
      {
        label: 'compressImage',
        routeName: 'compressImage'
      },
      {
        label: 'coordinate',
        routeName: 'coordinates'
      },
      {
        label: 'topology',
        routeName: 'topology'
      }
    ]
  }
]

const toPathHandle = (item:any):void => {
  if (item.href) {
    window.open(item.href)
    showMenu.value = false
  } else if (item.routeName) {
    $router.push({ name: item.routeName })
    showMenu.value = false
  }
}
</script>

<style lang="stylus">
.menu-wrap
  position fixed
  top -45px
  left 0
  width 100vw
  height 45px
  background-color rgba(0, 0, 0, .6)
  transition top 1s
  z-index 50
  font-family 'miniangle'
  &.show
    top 0
  .logo-title
    padding-right 10px
    float right
    .logo-icon
      width 40px
      height 40px
      background-image url('../../assets/img/rudy.jpg')
      background-size 100% auto
      float right
      border 1px solid rgba(255, 255, 255, .1)
      margin-top 2px
      margin-left 5px
      cursor pointer
    .mini-angle
      float right
      font-size 22px
      padding-top 12px
      color #EEEEEE
  nav.menu
    // height 100%
    > ul
      padding-left 10px
      > li
        height 45px
        color #eeeeee
        font-size 18px
        float left
        position relative
        transform skewX(25deg)
        cursor pointer
        // padding 0 20px
        text-align center
        width 110px
        // background-image linear-gradient(0, rgba(176, 234, 236, .5), rgba(8, 15, 25, .5))
        background-image linear-gradient(90deg, #ffffff, rgba(9, 16, 26, 0)), linear-gradient(0deg, rgba(9, 16, 26, 0), #ffffff), linear-gradient(0deg, #c2ebff, #c2ebff)
        background-repeat no-repeat
        background-size 100% 2px, 2px 100%, 100% 100%
        background-position 112px 0, 112px 0, 113px 3px
        background-repeat no-repeat
        transition background-position .2s
        &:hover
          background-position 0 0, 0 0, 3px 3px
          color #333333
          > ul
            height auto
            > li
              &:nth-child(even)
                margin-left 0px
              &:nth-child(odd)
                margin-left 0px
        > ul
          color #EEEEEE
          cursor default
          transform-origin 0 0
          transform skewX(-25deg)
          position absolute
          left -35px
          height 0
          overflow hidden
          padding 0 10px
          width 150px
          // transition max-height .2s
          > li
            cursor pointer
            margin-top 2px
            height 40px
            line-height 40px
            text-align center
            background-color rgba(9, 16, 26, .5)
            position relative
            width 100%
            // margin 0 10px
            background-repeat no-repeat
            background-size 100% 1px, 1px 100%
            transition margin .2s
            background-image linear-gradient(90deg, #ffffff, rgba(9, 16, 26, 0)), linear-gradient(0deg, rgba(9, 16, 26, 0), #ffffff)
            &:hover
              background-color #c2ebff
              color #333333
            &:nth-child(even)
              transform skewX(25deg)
              // background-image linear-gradient(90deg, #ffffff, rgba(9, 16, 26, 0)), linear-gradient(0deg, rgba(9, 16, 26, 0), #ffffff)
              margin-left 30px
              > span
                transform skewX(-25deg)
            &:nth-child(odd)
              transform skewX(-25deg)
              // background-image linear-gradient(90deg, rgba(9, 16, 26, 0), #ffffff), linear-gradient(0deg, rgba(9, 16, 26, 0), #ffffff)
              // background-position top left, top right
              margin-left -30px
              > span
                transform skewX(25deg)
            > span
              display block
        > span
          line-height 45px
          display block
          transform skewX(-25deg)
  .menu-icon
    height 45px
    display none
    cursor pointer
  @media screen and (max-width 1000px)
    nav.menu
      .menu-icon
        display block
        width 40px
        margin-left 10px
        background-image linear-gradient(0deg, #FFFFFF, #FFFFFF)
        background-size 30px 4px
        background-repeat no-repeat
        background-position 5px center
        transform scale(.7, .7)
        overflow hidden
        &::before
        &::after
          content ''
          margin-top 12px
          display block
          width 30px
          height 4px
          background-color #ffffff
          margin-left 5px
          transition transform .2s
        &::after
          margin-top 14px
        &.close
          background none
          &::before
            transform rotate(45deg)  translate(7px, 7px)
          &::after
            transform rotate(-45deg)  translate(5px, -5px)
          & + ul
            margin-left 0
            height calc(100vh - 45px)
            transition margin-left .2s
      > ul
        margin-left -100%
        transition margin-left .2s, height 0.1s .2s
        overflow auto
        height 0
        width 100%
        box-sizing border-box
        background-color rgba(0, 0, 0, .6)
        > li
          float none
          width 100px
          &:hover
            > ul
              > li
                &:nth-child(even)
                  margin-left 0
                &:nth-child(odd)
                  margin-left 0
          > ul
            left 103px
            top 2px
            > li
              // background-image linear-gradient(90deg, #ffffff, rgba(9, 16, 26, 0)), linear-gradient(0deg, rgba(9, 16, 26, 0), #ffffff)!important
              // background-position top left!important
              &:last-child
                margin-bottom 70px
              &:nth-child(even)
                transform skewX(-25deg)
                // background-image linear-gradient(90deg, #ffffff, rgba(9, 16, 26, 0)), linear-gradient(0deg, rgba(9, 16, 26, 0), #ffffff)
                // margin-left 30px
                > span
                  transform skewX(25deg)
              &:nth-child(odd)
                transform skewX(25deg)
                // background-image linear-gradient(90deg, rgba(9, 16, 26, 0), #ffffff), linear-gradient(0deg, rgba(9, 16, 26, 0), #ffffff)
                // background-position top left, top right
                // margin-left -30px
                > span
                  transform skewX(-25deg)
// .content-wrap
//   height 100%
//   .test
//     background-size 250px 250px
//     background-image linear-gradient(-45deg, #f5f7fa 0%, #cccccc 25%, transparent 25%, transparent 50%,#f5f7fa 50%, #cccccc 75%, transparent 75%, transparent 100%),
//       linear-gradient(45deg, #f5f7fa 0%, #cccccc 25%, transparent 25%, transparent 50%,#f5f7fa 50%, #cccccc 75%, transparent 75%, transparent 100%)
</style>
