import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default () => {
  return defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/is-it-russian/' : '',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  })
}
