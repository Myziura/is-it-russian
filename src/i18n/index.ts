import { createI18n } from 'vue-i18n'

import ua from '@/i18n/ua.json'
import en from '@/i18n/en.json'

export default createI18n({
  locale: 'ua',
  fallbackLocale: 'ua',
  messages: { ua, en }
})
