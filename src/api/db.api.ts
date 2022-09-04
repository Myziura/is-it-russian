import type { DataBase } from '@/types/db'

export default () => {
  return {
    async fetch() {
      type Result = { isSuccess: boolean; db: Partial<DataBase> }

      let result: Result = { isSuccess: false, db: {} }

      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/amatviychuk/is-it-images/main/api.json'
        )
        const db = (await response.json()) as DataBase

        result = { isSuccess: true, db }
      } catch {
        console.error()
      }

      return { ...result, db: result.db as DataBase }
    }
  }
}
