import { getDatabase, ref, get, push, update } from 'firebase/database'

import type { FirebaseApp } from 'firebase/app'
import type { Category, BaseUrl } from '@/types/categories'

const formatCategories = (categories: any): Category[] =>
  Object.keys(categories).map((categoryId) => ({
    id: categoryId,
    ...categories[categoryId]
  }))

export default (app: FirebaseApp, BASE_URL: BaseUrl) => {
  const URLs = {
    base: `${BASE_URL}/categories`
  }

  return {
    async fetchAll() {
      const db = getDatabase(app)

      const query = ref(db, URLs.base)

      type Result = { isSuccess: boolean; list: Category[] }
      let result: Result = { isSuccess: false, list: [] }

      try {
        const snapshot = await get(query)

        if (snapshot.exists()) {
          result = {
            isSuccess: true,
            list: formatCategories(snapshot.val())
          }
        }
      } catch {}

      return result
    },

    async create(payload: Category) {
      const db = getDatabase(app)

      const category = {
        // name: 'Games',
        // image: 'htpps://image.png',
        ...payload,
        products: []
      }

      const query = ref(db, URLs.base)
      const categoryId = push(query).key
      const updates = { [`/${categoryId}`]: category }

      let isSuccess = true

      try {
        await update(query, updates)
      } catch (error) {
        isSuccess = false
      }

      return isSuccess
    }
  }
}
