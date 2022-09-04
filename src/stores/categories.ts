import { defineStore } from 'pinia'

import type { Category } from '@/types/categories'

type State = { list: Category[] }

export const useCategoriesStore = defineStore({
  id: 'categories',

  state: (): State => ({
    list: []
  }),

  getters: {
    getCategoryById:
      (state) =>
      (id: string): Category | null =>
        state.list.find((category) => category.id === id) || null
  }
})
