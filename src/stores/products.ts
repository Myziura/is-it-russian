import { defineStore } from 'pinia'

// import { useFirebase } from '@/use/useFirebase'

import type { Product } from '@/types/products'

// const api = useFirebase()

import api from '@/api/api.json'

type State = { list: Product[] }

export const useProductsStore = defineStore({
  id: 'products',

  state: (): State => ({
    list: [...api.products]
    // isLoading: false
  }),

  getters: {
    getProductById:
      (state) =>
      (id: string): Product =>
        state.list.find((product) => product.id === id)!
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
