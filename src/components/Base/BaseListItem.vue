<template>
  <li
    class="relative h-44 w-full bg-cover bg-center cursor-pointer xl:h-56"
    :style="{
      'background-image': `url(${props.image})`
    }"
  >
    <div
      class="absolute inset-0 h-full w-full p-2 flex items-center justify-center text-center bg-red-400 bg-opacity-50 hover:bg-opacity-90"
    >
      <span class="text-2xl text-white font-semibold">{{ props.name }}</span>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
  name: string
}>()
</script>
