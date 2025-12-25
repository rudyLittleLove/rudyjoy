import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import "@/assets/style.styl";
import "@/assets/reset.styl";

// 全局注册element3.0 组件
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

const app = createApp(App)

// 全局全量注册图标组件 需要安装依赖 @element-plus/icons-vue
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }

app
  // .use(ElementPlus)
  .use(router)
  .mount('#app')
