import { createI18n } from 'vue-i18n'

import ua from '@/i18n/ua.json'
import en from '@/i18n/en.json'

const i18n = createI18n({
  locale: 'ua',
  fallbackLocale: 'ua',
  messages: { ua, en }
})

export default i18n
