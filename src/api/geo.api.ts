import type { Geo } from '@/types/geo'

export default () => {
  return {
    async fetch() {
      type Result = { isSuccess: boolean; geo: Partial<Geo> }

      let result: Result = { isSuccess: false, geo: {} }

      try {
        const response = await fetch('https://ipapi.co/json/')
        const geo = (await response.json()) as Geo

        result = { isSuccess: true, geo }
      } catch {
        console.error()
      }

      return { ...result, geo: result.geo as Geo }
    }
  }
}
