<template>
  <div class="container px-4 h-full mx-auto flex flex-col">
    <span class="font-semibold">{{ $t('subtitle') }}</span>
    <CategoriesList class="mt-4 sm:mt-8" :categories="categories.list" />
  </div>
</template>

<script setup lang="ts">
import CategoriesList from '@/components/Categories/CategoriesList.vue'

import { useCategoriesStore } from '@/stores/categories'

const categories = useCategoriesStore()
</script>
