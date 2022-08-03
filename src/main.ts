import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'

import App from '@/App.vue'
import i18n from '@/i18n'
import router from '@/router'

import '@/index.css'

const app = createApp(App)
const pinia = createPinia()
const metaManager = createMetaManager()

app.use(i18n)
app.use(router)
app.use(pinia)
app.use(metaManager)

app.mount('#app')
