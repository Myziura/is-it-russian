<template>
  <div class="container p-4 h-full mx-auto flex flex-col">
    <ProductItem v-if="product" :product="product" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import ProductItem from '@/components/Products/ProductsItem.vue'
import { useProductsStore } from '@/stores/products'

const route = useRoute()
const products = useProductsStore()

const productId = computed(() => route.params.productId as string)

const product = computed(() =>
  productId.value ? products.getProductById(productId.value) : null
)
</script>
