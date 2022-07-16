<template>
  <div class="container mx-auto px-4 flex flex-col">
    <h2 class="mb-4 font-bold">
      Ці продукти створені в рф та фінансують воєнну машину.
    </h2>

    <h3 class="mb-4 text-sm text-gray-400 font-bold uppercase">Категорії</h3>
    <CategoriesList :categories="categories.list" />

    <MainBanner class="my-16" />

    <h3 class="mb-4 text-sm text-gray-400 font-bold uppercase">Продукти</h3>
    <ProductsList class="mb-32" :products="products.list" />
  </div>
</template>

<script lang="ts" setup>
import { useCategoriesStore } from '@/stores/categories'
import { useProductsStore } from '@/stores/products'

import MainBanner from '@/components/Main/MainBanner.vue'
import CategoriesList from '@/components/Categories/CategoriesList.vue'
import ProductsList from '@/components/Products/ProductsList.vue'

const categories = useCategoriesStore()
const products = useProductsStore()
</script>

<style lang="scss" scoped></style>
