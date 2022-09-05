<template>
  <div
    class="container mx-auto px-4 flex items-center justify-between font-semibold"
  >
    <router-link
      to="/"
      class="hover:underline leading-8 decoration-2 underline-offset-4"
    >
      <h1 v-if="geo.isCountryUkraine" class="text-3xl">
        Це 🐷<span class="text-red-500">?</span>
      </h1>
      <h1 v-else class="text-3xl">
        Is it <span class="text-red-500">russian?</span>
      </h1>
    </router-link>

    <div class="ml-auto flex">
      <BaseBadge
        v-if="notifications.isSome"
        class="mr-4"
        :is-disabled="!notifications.isSomeNewNotifs"
        @click="handleOpenNotificationsSidebar"
      >
        <button>
          <img class="h-10 w-10" src="@/assets/icons/notifs.svg" />
        </button>
      </BaseBadge>

      <a class="h-10 w-10" href="https://t.me/is_it_russian" target="_blank">
        <svg viewBox="8 8 34 34" class="hover:fill-blue-500 duration-100">
          <path
            d="M25,8c9.389,0,17,7.611,17,17s-7.611,17-17,17S8,34.389,8,25S15.611,8,25,8z M30.864,31.93 c0.312-0.959,1.778-10.521,1.958-12.405c0.055-0.571-0.126-0.95-0.478-1.119c-0.427-0.205-1.06-0.103-1.794,0.162 c-1.007,0.363-13.876,5.827-14.62,6.144c-0.704,0.3-1.372,0.626-1.372,1.1c0,0.333,0.198,0.52,0.742,0.714 c0.566,0.202,1.992,0.634,2.834,0.866c0.811,0.224,1.734,0.03,2.251-0.292c0.548-0.341,6.878-4.576,7.332-4.947 c0.454-0.371,0.816,0.104,0.445,0.476c-0.371,0.371-4.715,4.588-5.289,5.172c-0.696,0.709-0.202,1.443,0.265,1.738 c0.533,0.336,4.365,2.906,4.943,3.319c0.578,0.412,1.162,0.599,1.699,0.599C30.316,33.456,30.597,32.749,30.864,31.93z"
          />
        </svg>
      </a>
    </div>

    <!-- <select class="h-8 text-xl font-semibold" v-model="$i18n.locale">
      <option
        v-for="locale of $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select> -->

    <TheNotifications
      v-if="isVisible.notificationsSidebar"
      @@close="handleCloseNotificationsSidebar"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useGeoStore } from '@/stores/geo'
import { useNotificationsStore } from '@/stores/notifications'

import BaseBadge from '@/components/Base/BaseBadge.vue'

import TheNotifications from '@/components/Notifications/TheNotifications.vue'

const geo = useGeoStore()
const notifications = useNotificationsStore()

const isVisible = reactive({
  notificationsSidebar: false
})

const handleOpenNotificationsSidebar = () => {
  isVisible.notificationsSidebar = true
}
const handleCloseNotificationsSidebar = () => {
  isVisible.notificationsSidebar = false
}
</script>
