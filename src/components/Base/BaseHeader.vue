<template>
  <div
    class="container mx-auto px-4 flex items-start justify-between font-semibold"
  >
    <div class="flex flex-col text-3xl tracking-wide sm:flex-row">
      <router-link
        to="/"
        class="hover:underline leading-8 decoration-2 underline-offset-4"
      >
        <h1>is it <span class="text-red-500">russian?</span></h1>
      </router-link>

      <div class="flex flex-col sm:flex-row leading-8">
        <div v-if="isProductsListPage && category">
          <span class="mr-4 sm:m-0 sm:mx-4">></span>
          <span>{{ category.name }}</span>
        </div>

        <div v-if="isProductItemPage && product">
          <span class="mr-4 sm:m-0 sm:mx-4">></span>
          <span>{{ product.name }}</span>
        </div>
      </div>
    </div>

    <select class="h-8 font-semibold" v-model="$i18n.locale">
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

import type { Category } from '@/types/categories'
import type { Product } from '@/types/products'
import { useCategoriesStore } from '@/stores/categories'
import { useProductsStore } from '@/stores/products'

const route = useRoute()
const categories = useCategoriesStore()
const products = useProductsStore()

let category = ref<Category | null>(null)
let product = ref<Product | null>(null)

enum Pages {
  ProductsList = 'products',
  ProductItem = 'product'
}

let isProductsListPage = ref<boolean>(false)
let isProductItemPage = ref<boolean>(false)

watch(
  () => route.name,
  () => {
    isProductsListPage.value = route.name === Pages.ProductsList
    isProductItemPage.value = route.name === Pages.ProductItem

    const categoryId = route.params.categoryId as string
    const productId = route.params.productId as string

    category.value = categoryId ? categories.getCategoryById(categoryId) : null
    product.value = productId ? products.getProductById(productId) : null
  }
)
</script>
