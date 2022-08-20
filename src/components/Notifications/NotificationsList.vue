<template>
  <ul>
    <li v-for="(item, index) of props.list" :key="index">
      <slot :item="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Notification } from '@/types/notifications'

interface Props {
  list: Notification[]
}

const props = defineProps<Props>()
</script>
