<template>
  <div class="container p-4 h-full mx-auto flex flex-col">
    <ProductItem v-if="product" :product="product" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import ProductItem from '@/components/Products/ProductsItem.vue'

import type { Product } from '@/types/products'

import { useProductsStore } from '@/stores/products'

const route = useRoute()
const products = useProductsStore()

let product = ref<Product | undefined>()

const productId = route.params.productId as string

if (productId) {
  product.value = products.getProductById(productId)
}
</script>
