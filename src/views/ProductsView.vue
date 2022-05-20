<template>
  <div class="container p-4 h-full mx-auto flex flex-col">
    <ProductsList :products="filteredProductsList" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import { useProductsStore } from '@/stores/products'
import ProductsList from '@/components/Products/ProductsList.vue'

const products = useProductsStore()
const route = useRoute()

const filteredProductsList = products.list.filter(
  (product) => product.categoryId === route.params.categoryId
)
</script>
