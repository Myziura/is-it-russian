<template>
  <button
    class="p-4 px-12 flex items-center font-bold text-center"
    :class="{
      'bg-red-500 text-white': normalized.type.isPrimary,
      'bg-gray-200': normalized.type.isSecondary
    }"
    @click="handleClick"
  >
    <BaseIcon v-if="props.icon" class="mr-4" :icon="props.icon" />
    <span class="text-sm">{{ props.label }}</span>
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'

import BaseIcon from '@/components/Base/BaseIcon.vue'
import type { Icon } from '@/components/Base/BaseIcon.vue'

const TYPE = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
} as const

type Type = ValueOf<typeof TYPE>

export { TYPE }
export type { Type }
</script>

<script setup lang="ts">
interface Props {
  label: string
  type: Type
  icon?: Icon
}
interface Emits {
  (e: '@input'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const normalized = computed(() => ({
  type: {
    isPrimary: props.type === TYPE.PRIMARY,
    isSecondary: props.type === TYPE.SECONDARY
  }
}))

const handleClick = () => emit('@input')
</script>

<style scoped></style>
