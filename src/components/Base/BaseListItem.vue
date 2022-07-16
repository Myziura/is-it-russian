<template>
  <li class="w-full flex flex-col">
    <img
      class="max-h-full max-w-full mb-4"
      :src="props.image"
      :alt="props.name"
    />
    <span class="font-bold">{{ props.name }}</span>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
  name: string
}>()
</script>
