<template>
  <div class="container p-4 h-full mx-auto flex flex-col">
    <h3 v-if="category" class="mb-4 text-sm text-gray-400 font-bold uppercase">
      {{ category.name }}
    </h3>
    <ProductsList :products="filteredProductsList" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useCategoriesStore } from '@/stores/categories'
import { useProductsStore } from '@/stores/products'

import ProductsList from '@/components/Products/ProductsList.vue'

const categories = useCategoriesStore()
const products = useProductsStore()
const route = useRoute()

const categoryId = computed(() => route.params.categoryId as string)

const category = computed(() =>
  categoryId.value ? categories.getCategoryById(categoryId.value) : null
)

const filteredProductsList = computed(() =>
  products.list.filter(
    (product) => product.categoryId === route.params.categoryId
  )
)
</script>
