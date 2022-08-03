<template>
  <ul
    class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-8"
  >
    <ListItem
      v-for="category of props.categories"
      :key="category.id"
      class="cursor-pointer"
      :image="category.image"
      :name="category.name"
      @click="() => handleSelect(category)"
    />
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import type { Category } from '@/types/categories'
import ListItem from '@/components/Base/BaseListItem.vue'

interface Props {
  categories: Category[]
}
const props = defineProps<Props>()

const router = useRouter()

const handleSelect = (category: Category) => {
  router.push({ name: 'products', params: { categoryId: category.id } })
}
</script>
