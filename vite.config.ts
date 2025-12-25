import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import { resolve } from 'path'  // 正确导入方式
// const path = require('path')



// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {
      'BASE_URL':"/"
    }
  },
  server: {
    host: '127.0.0.1'
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
        ElementPlusResolver()
      ],
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        ElementPlusResolver()
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      //设置别名
      '@': resolve(__dirname, './src'),
      // '@assets': path.resolve(__dirname, './src/assets')
    }
  }
})
