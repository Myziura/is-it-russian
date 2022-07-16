<template>
  <div class="container p-4 h-full mx-auto flex flex-col">
    <ProductsList :products="filteredProductsList" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import ProductsList from '@/components/Products/ProductsList.vue'
import { useProductsStore } from '@/stores/products'

const products = useProductsStore()
const route = useRoute()

let filteredProductsList = computed(() =>
  products.list.filter(
    (product) => product.categoryId === route.params.categoryId
  )
)
</script>
