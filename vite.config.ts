import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import { defineConfig } from 'vite'
import * as path from 'path'

export default defineConfig(() => ({
  base: process.env.NODE_ENV === 'production' ? '/is-it-russian/' : '',
  plugins: [vue(), eslint()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}))
