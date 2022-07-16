<template>
  <img class="h-4 w-4 mr-4" :src="iconPath" />
</template>

<script lang="ts">
const ICON = {
  REFRESH: 'refresh',
  PLUS: 'plus'
} as const

const ICON_PATHES = {
  [ICON.REFRESH]: 'refresh.png',
  [ICON.PLUS]: 'plus.png'
} as const

type Icon = ValueOf<typeof ICON>

export { ICON, ICON_PATHES }
export type { Icon }
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAssets } from '@/use/useAssets'

const props = defineProps<{
  icon: Icon
}>()

const { defineIconSrc } = useAssets()

const iconPath = computed(() => defineIconSrc(ICON_PATHES[props.icon]))
</script>
