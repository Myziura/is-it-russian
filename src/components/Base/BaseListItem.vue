<template>
  <button class="group w-full flex flex-col text-left">
    <img
      class="mb-2 sm:mb-4"
      :src="props.image"
      :alt="props.name"
      @load="handleLoaded"
      :style="`max-height: ${imageMaxHeight}px; max-width: ${imageMaxWidth}px`"
    />
    <span class="font-bold group-hover:underline">{{ props.name }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  image: string
  name: string
}>()

const imageMaxHeight = ref<number | string>('auto')
const imageMaxWidth = ref<number | string>('auto')

const handleLoaded = (event: Event) => {
  const target = event.target as HTMLImageElement

  imageMaxHeight.value = target.clientHeight
  imageMaxWidth.value = target.clientWidth
}
</script>
