import { FirebaseApp } from 'firebase/app'
import { getDatabase, ref, get, push, update } from 'firebase/database'

import type { Category, CategoryList } from '@/types/categories'

export default (app: FirebaseApp) => ({
  async fetchAll() {
    const db = getDatabase(app)

    const query = ref(db, '/categories')

    type Result = { isSuccess: boolean; list: CategoryList[] }
    let result: Result = { isSuccess: false, list: [] }

    try {
      const snapshot = await get(query)

      if (snapshot.exists()) {
        result = {
          isSuccess: true,
          list: snapshot.val()
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

    const query = ref(db, '/categories')
    const categoryId = push(query).key

    const updates = {
      [`/${categoryId}`]: category
    }

    let isSuccess = true

    try {
      await update(query, updates)
    } catch (error) {
      isSuccess = false
      console.error(error)
    }

    if (isSuccess) {
      console.log('updated')
    }
  }
})
