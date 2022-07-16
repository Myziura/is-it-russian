<template>
  <div class="flex flex-col sm:flex-row">
    <img
      class="h-44 w-44 mx-auto mb-8 object-cover sm:m-0 sm:mr-8"
      :src="props.product.image"
      :alt="props.product.name"
    />

    <div class="flex flex-col">
      <span class="mb-32 whitespace-pre-line">{{ props.product.text }}</span>

      <ProductRecommendations :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductRecommendations from '@/components/Products/ProductRecommendations.vue'
import type { Product } from '@/types/products'

const props = defineProps<{
  product: Product
}>()
</script>
