import { defineStore } from 'pinia'

import { useApi } from '@/use/useApi'

import type { Geo } from '@/types/geo'

const api = useApi()

enum Country {
  Russia = 'RU'
}
type State = Geo

export const useGeoStore = defineStore({
  id: 'geo',

  state: (): State => ({
    country: ''
  }),

  getters: {
    isCountryRussia: (state) => state.country === Country.Russia
  },

  actions: {
    async fetch() {
      try {
        const { isSuccess, geo } = await api.geo.fetch()
        this.country = isSuccess ? geo.country : ''
      } catch {}
    }
  }
})
