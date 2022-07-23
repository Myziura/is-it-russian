<template>
  <div class="container mx-auto flex flex-col">
    <h3 class="mb-4 text-sm text-gray-400 font-bold uppercase">
      Інші продукти
    </h3>
    <ProductsList class="mb-32" :products="randomProductsList" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import sampleSize from 'lodash/sampleSize'

import ProductsList from '@/components/Products/ProductsList.vue'
import type { Product } from '@/types/products'

import { useProductsStore } from '@/stores/products'

const props = defineProps<{
  product: Product
}>()

const products = useProductsStore()

const randomProductsList = computed(() => {
  const withoutCurrent = products.list.filter(
    (item) => item.id !== props.product.id
  )
  return sampleSize(withoutCurrent, withoutCurrent.length)
})
</script>

<style lang="scss" scoped></style>
