<template>
  <ul
    class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-8"
  >
    <ListItem
      v-for="product of props.products"
      :key="product.id"
      v-bind="product"
      @click="() => handleSelect(product)"
    />
  </ul>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

import type { Product } from '@/types/products'
import ListItem from '@/components/Base/BaseListItem.vue'

interface Props {
  products: Product[]
}
const props = defineProps<Props>()

const route = useRoute()
const router = useRouter()

const categoryId = route.params.categoryId

const handleSelect = (product: Product) => {
  router.push({
    name: 'product',
    params: { categoryId, productId: product.id }
  })
}
</script>
