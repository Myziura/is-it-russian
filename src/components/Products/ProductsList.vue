<template>
  <div class="flex flex-col">
    <ul
      class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-8"
    >
      <ListItem
        v-for="product of limitedProducts"
        :key="product.id"
        class="cursor-pointer"
        v-bind="product"
        @click="() => handleSelect(product)"
      />
    </ul>

    <div
      v-if="isVisibleLoadMore"
      class="mt-16 flex justify-center items-center"
    >
      <BaseButton
        label="Завантажити ще"
        type="secondary"
        icon="refresh"
        @click="handleLoadMore"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import type { Product } from '@/types/products'

import BaseButton from '@/components/Base/BaseButton.vue'
import ListItem from '@/components/Base/BaseListItem.vue'

interface Props {
  products: Product[]
}
const props = defineProps<Props>()

// const route = useRoute()
const router = useRouter()

// const categoryId = route.params.categoryId

const offset = 5
const limit = ref(offset)
const limitedProducts = computed(() => {
  return props.products.slice(0, limit.value)
})
const isVisibleLoadMore = computed(() => limit.value < props.products.length)

const handleSelect = (product: Product) => {
  router.push({
    name: 'product',
    params: { categoryId: product.categoryId, productId: product.id }
  })
}

const handleLoadMore = () => {
  limit.value += offset
}
</script>
