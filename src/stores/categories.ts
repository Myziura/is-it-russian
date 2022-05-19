import { defineStore } from 'pinia'

import { useFirebase } from '@/use/useFirebase'

import type { Category, CategoryList } from '@/types/categories'

const api = useFirebase()

type Store = { list: CategoryList[]; isLoading: boolean }

export const useCategoriesStore = defineStore({
  id: 'categories',

  state: (): Store => ({
    list: [],
    isLoading: false
  }),

  actions: {
    async fetchAll() {
      this.isLoading = true

      try {
        const { isSuccess, list } = await api.categories.fetchAll()
        this.list = isSuccess ? list : []
      } catch {}

      this.isLoading = false
    },
    async create(payload: Category) {
      this.isLoading = true

      try {
        await api.categories.create(payload)
      } catch {}

      this.isLoading = false
    }
  }
})
