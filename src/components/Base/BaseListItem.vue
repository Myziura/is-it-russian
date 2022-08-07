<template>
  <li class="group w-full flex flex-col">
    <img
      class="max-h-full max-w-full mb-2 sm:mb-4"
      :src="props.image"
      :alt="props.name"
    />
    <span class="font-bold group-hover:underline">{{ props.name }}</span>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
  name: string
}>()
</script>
