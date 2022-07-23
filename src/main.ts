import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueGtag from 'vue-gtag'

import App from '@/App.vue'
import router from '@/router'
import i18n from '@/i18n'

import '@/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(VueGtag, {
  config: { id: 'G-EYTBX786DV' }
})

app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
