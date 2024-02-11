import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },

  plugins: [
    vue(),
    vueJsx(),
    Pages(),
    AutoImport({
      imports: ['vue', 'vue-router'], //'@vueuse/core'
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/stores/**'], // 'src/composables', 'src/core/**', 'src/services/**'
      vueTemplate: true,
      resolvers: [ElementPlusResolver()]
    }),

    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ElementPlusResolver()],
      dts: 'src/components.d.ts'
    })
  ]
})
