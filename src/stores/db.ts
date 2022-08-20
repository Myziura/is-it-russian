import { defineStore } from 'pinia'

import { useApi } from '@/use/useApi'

import { useCategoriesStore } from '@/stores/categories'
import { useProductsStore } from '@/stores/products'
import { useNotificationsStore } from '@/stores/notifications'

import type { DataBase } from '@/types/db'

const api = useApi()

type State = { db: Partial<DataBase>; isLoading: boolean }

const emptyDataBase: DataBase = {
  categories: [],
  products: [],
  notifications: []
}

export const useDataBaseStore = defineStore({
  id: 'db',

  state: (): State => ({
    db: emptyDataBase,
    isLoading: false
  }),

  actions: {
    async fetchAll() {
      this.isLoading = true

      const categories = useCategoriesStore()
      const products = useProductsStore()
      const notifications = useNotificationsStore()

      try {
        const { isSuccess, db } = await api.db.fetch()
        if (isSuccess) {
          this.db = db

          categories.list = db.categories
          products.list = db.products
          notifications.list = db.notifications || []
        }
      } catch {}

      this.isLoading = false
    }
  }
})
