<template>
  <div class="flex flex-col">
    <div v-if="props.isSortable" class="mb-4 flex select-none">
      <div class="pr-4 flex cursor-pointer" @click="handleToggleFilters">
        <button v-if="sortKey === SortKeys.Popular" class="flex">
          <img class="mr-2" src="@/assets/icons/filter.svg" />
          <span class="font-bold">Популярні</span>
        </button>

        <button v-else class="flex">
          <img class="mr-2" src="@/assets/icons/filter.svg" />
          <span class="font-bold">Нові</span>
        </button>
      </div>
    </div>

    <TransitionGroup
      name="list"
      tag="div"
      class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-8"
    >
      <ListItem
        v-for="product of limitedProducts"
        :key="product.id"
        class="cursor-pointer"
        :image="product.image"
        :name="product.name"
        @click="() => handleSelect(product)"
      />
    </TransitionGroup>

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
  isSortable?: boolean
}
const props = defineProps<Props>()

const router = useRouter()

enum SortKeys {
  Popular = 'popularity',
  New = 'date'
}

const sortKey = ref(SortKeys.Popular)

const handleToggleFilters = () => {
  sortKey.value =
    sortKey.value === SortKeys.Popular ? SortKeys.New : SortKeys.Popular
}

const offset = 10
const limit = ref(offset)
const limitedProducts = computed(() => {
  const sorted = props.isSortable
    ? props.products.sort((a, b) => b[sortKey.value] - a[sortKey.value])
    : props.products

  const limited = sorted.slice(0, limit.value)

  return limited
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
