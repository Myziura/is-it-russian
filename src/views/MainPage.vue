<template>
  <div class="h-full w-full flex items-center justify-center">
    <h1 class="text-3xl tracking-wide">
      is it <span class="text-red-500">russian?</span>
    </h1>

    <pre>{{ categories.list }}</pre>
  </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories'

const categories = useCategoriesStore()

categories.fetchAll()
</script>
