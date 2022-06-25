import { defineStore } from 'pinia'
// import { useFirebase } from '@/use/useFirebase'

import type { Category } from '@/types/categories'

// const api = useFirebase()

import api from '@/api/api.json'

type State = { list: Category[] }

export const useCategoriesStore = defineStore({
  id: 'categories',

  state: (): State => ({
    list: [...api.categories]
    // isLoading: false
  }),

  getters: {
    getCategoryById:
      (state) =>
      (id: string): Category =>
        state.list.find((category) => category.id === id)!
  }

  // actions: {
  //   async fetchAll() {
  //     this.isLoading = true

  //     try {
  //       const { isSuccess, list } = await api.categories.fetchAll()
  //       this.list = isSuccess ? list : []
  //     } catch {}

  //     this.isLoading = false
  //   },
  //   async create(payload: Category) {
  //     this.isLoading = true

  //     try {
  //       await api.categories.create(payload)
  //     } catch {}

  //     this.isLoading = false
  //   }
  // }
})
