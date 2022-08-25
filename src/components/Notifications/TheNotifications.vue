<template>
  <BaseSidebar
    ref="sidebarRef"
    @@close="emit('@close')"
    content-class="bg-gray-100"
  >
    <div class="flex flex-col">
      <div class="p-4 flex justify-between">
        <div class="p-4">
          <span class="font-bold text-xl">Повідомлення</span>
        </div>

        <div
          class="p-4 flex items-center cursor-pointer rounded-full"
          @click="handleClose"
        >
          <img src="@/assets/icons/close.svg" alt="close" />
        </div>
      </div>

      <NotificationsList
        class="p-4 pt-0 sm:p-8 sm:pt-0"
        :list="notifications.list"
      >
        <template #default="{ item }">
          <NotificationsListItem :item="item" />
        </template>
      </NotificationsList>
    </div>
  </BaseSidebar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useNotificationsStore } from '@/stores/notifications'

import BaseSidebar from '@/components/Base/BaseSidebar.vue'

import NotificationsList from '@/components/Notifications/NotificationsList.vue'
import NotificationsListItem from '@/components/Notifications/NotificationsListItem.vue'

interface Emits {
  (e: '@close'): void
}

const emit = defineEmits<Emits>()

const notifications = useNotificationsStore()

const sidebarRef = ref<InstanceType<typeof BaseSidebar>>()

const handleClose = () => {
  sidebarRef.value?.handleClose()
}
</script>
