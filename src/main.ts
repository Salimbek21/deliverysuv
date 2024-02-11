import App from './App.vue'
import 'dayjs/locale/ru'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import locale from 'element-plus/dist/locale/ru.mjs'
import { PDFPlugin } from 'vue3-pdfmake'
import routes from 'virtual:generated-pages'

import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

import '~/styles/main.css'

const app = createApp(App)

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
app.use(PDFPlugin)
app.use(createPinia())
app.use(ElementPlus, {
  locale: locale
})
app.use(router)
app.mount('#app')
