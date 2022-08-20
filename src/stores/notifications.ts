import { defineStore } from 'pinia'

import type { Notification } from '@/types/notifications'

type State = { list: Notification[] }

export const useNotificationsStore = defineStore({
  id: 'notifications',

  state: (): State => ({
    list: []
  }),

  getters: {
    isSome: (state) => state.list.length > 0
  }
})
