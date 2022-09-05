import { defineStore } from 'pinia'

import type { Notification } from '@/types/notifications'

type State = { list: Notification[] }

export const useNotificationsStore = defineStore({
  id: 'notifications',

  state: (): State => ({
    list: []
  }),

  getters: {
    newestNotif: (state): Notification | undefined =>
      [...state.list].sort((a, b) => b.date - a.date)[0],
    newestNotifDate(): number {
      return this.newestNotif?.date || 0
    },

    isSome: (state): boolean => state.list.length > 0,
    isSomeNewNotifs(): boolean {
      console.log(localStorage.getItem('newestNotifDate'))

      return (
        this.newestNotifDate > (localStorage.getItem('newestNotifDate') || 0)
      )
    }
  }

  // actions: {
  //   updateLocalStorageWithNewestNotif() {
  //     localStorage.setItem('newestNotifDate', this.newestNotifDate.toString())
  //   }
  // }
})
