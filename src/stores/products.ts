import { defineStore } from 'pinia'

import type { Product } from '@/types/products'

type State = { list: Product[] }

export const useProductsStore = defineStore({
  id: 'products',

  state: (): State => ({
    list: []
  }),

  getters: {
    getProductById:
      (state) =>
      (id: string): Product =>
        state.list.find((product) => product.id === id)!
  }
})
