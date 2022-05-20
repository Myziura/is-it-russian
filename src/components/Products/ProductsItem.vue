<template>
  <div class="flex">
    <img
      class="h-44 w-44 mr-8 object-cover"
      :src="props.product.image"
      :alt="props.product.name"
    />

    <div class="flex flex-col">
      <span class="whitespace-pre-line">{{ props.product.text }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/types/products'

const props = defineProps<{
  product: Product
}>()
</script>
