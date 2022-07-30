import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default () => {
  console.log(process.env)

  return defineConfig({
    // base: process.env.PROD ? '/is-it-russian/' : '',
    base: '/is-it-russian/',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  })
}
