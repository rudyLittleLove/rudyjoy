<template lang="pug">
.base-info
  h1 多一点点爱的小破站
  .line
  p 本站纯个人开发学习(vue3 + TypeScript + elementUI3.0 + vite 重构版)
  p 整体样式由站主设计。
  p 
    span 网站主要存放了一些站主发布的
    el-link( type="primary" href="http://rudyjoy.cn/blogs" ) 博客信息
    span 、小工具
    span (
    el-link( type="primary" href="http://rudyjoy.cn/getImageColor" ) 图片颜色获取
    span 、
    el-link( type="primary" href="http://rudyjoy.cn/render" ) canvas 绘制进度分析图
    span 、
    el-link( type="primary" href="http://rudyjoy.cn/drawRect" ) canvas 绘制基础交互
    span 、
    el-link( type="primary" href=" http://rudyjoy.cn/compressImage" ) 图片压缩
    span 等) 、插件、游戏资料数据攻略等，也归纳了一些站主常用的社交学习分享网站，比如
    el-link( type="primary" href="https://blog.csdn.net/rudy_zhou" target="_blank") CSDN
    span 、
    el-link( type="primary" href="https://juejin.im/user/5e01e88f6fb9a0164b4ef199" target="_blank") 掘金
    span 博客网站，个人
    el-link( type="primary" href="https://github.com/rudyLittleLove" target="_blank") github
    span ，
    el-link( type="primary" href="https://stackoverflow.com/users/12598378/%e5%a4%9a%e4%b8%80%e7%82%b9%e7%82%b9%e7%88%b1" target="_blank") Stack Overflow
    span （较为活跃的一个技术问答网站，访问较慢，某些js资源等链接只能翻墙才能获取）等。
  p 
  p 
    span 为了高效部署访问（服务器较差，带宽较差，毕竟是个人学习网站）使用了
    //- el-link( type="primary" href="http://rudyjoy.cn:8080/" target="_blank") jenkins 
    span jenkins
    span 自动部署的方式。
  p 同时 nginx 配置Gzip压缩（访问量较小，服务器没啥压力），也考虑后续不使用nginx，前端也在打包时添加了Gzip 压缩，后续根据具体使用的 服务工具配置返回压缩格式文件，降低带宽压力。
  p 页面的优化
  P 背景图压缩，1920*1080大小图片压缩至36.5kb，尽量保留图片细节。
  p 个性化字体文件压缩（取出菜单使用到的个性化字体《迷你简菱心》，放入新增字体中）。
  p 路由异步加载，根据访问路径单独加载页面。
  p 页面交互
  P 本站是响应式的，网站主体支持移动端、PC端展示等。
  p 个人介绍
  p 站主从事前端工作从2017-2月至今，最初使用jQuery 、artTemplate、bootstrap等，中间逐渐转移至Vue、Vue-router、ElementUI、iview 等开发，也使用React、antd 开发过一个钉钉H5部门流程管理。
  p 主要开发交互繁杂的后台管理平台，包含流程管理、Canvas绘制施工进度交互、大屏特效展示、APP H5等功能。
  p 最近使用 vue3 + TypeScript + elementUI3.0 + vite 重构当前网站主体功能
  p 也开发过原生小程序 
    el-link( type="success") 移动云计费器
    |（微信搜索资费计算），
    el-link( type="success") 云综漫步
    |（一个江苏移动内部综合管理小程序）。在开源基础上开发过 
    el-link( type="success") 爱好文具订制品
    | 等。
  p 写过插件，参与过开源项目iview bug维护，常写博客分享技术。
</template>

<style lang="stylus" scoped>
.base-info
  color #EEEEEE
  padding-bottom 100px
  > h1
    text-align center
    font-size 5em
    margin 80px auto 30px
  .line
    background-image linear-gradient(90deg, transparent, #EEEEEE, transparent )
    height 1px
    width 800px
    max-width 95%
    margin 0 auto
  > p
    margin 20px auto
    width 800px
    max-width 95%
    font-size 15px
    span,
    a
      vertical-align bottom
@media screen and (max-width 900px)
  .base-info
    > h1
      font-size 2em
      margin-top 60px
</style>
