<template>
  <div class="container mx-auto px-4 flex items-center justify-between">
    <div class="flex text-3xl tracking-wide">
      <router-link to="/" class="hover:underline">
        <h1>is it <span class="text-red-500">russian?</span></h1>
      </router-link>

      <div v-if="category">
        <span class="mx-4">></span>

        <router-link
          v-if="product"
          :to="{ name: 'products', params: { categoryId: category.id } }"
          class="hover:underline"
        >
          {{ category.name }}
        </router-link>
        <span v-else>{{ category.name }}</span>
      </div>

      <div v-if="product">
        <span class="mx-4">></span>
        <span>{{ product.name }}</span>
      </div>
    </div>

    <select v-model="$i18n.locale">
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

watch(
  () => route.name,
  () => {
    const categoryId = route.params.categoryId as string
    const productId = route.params.productId as string

    category.value = categoryId ? categories.getCategoryById(categoryId) : null
    product.value = productId ? products.getProductById(productId) : null
  }
)
</script>
