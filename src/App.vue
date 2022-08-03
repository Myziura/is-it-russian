<template>
  <div class="w-full py-8 flex flex-col tracking-normal sm:py-16">
    <BasePigModal v-if="geo.isCountryRussia" />

    <div
      v-else
      class="w-full mx-auto flex flex-col justify-center"
      style="max-width: 1024px"
    >
      <BaseHeader class="mb-4" />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMeta } from 'vue-meta'

import BaseHeader from '@/components/Base/BaseHeader.vue'
import BasePigModal from '@/components/Base/BasePigModal.vue'

import { useDataBaseStore } from '@/stores/db'
import { useGeoStore } from '@/stores/geo'

import logo from '@/assets/logo.png'

useMeta({
  meta: [
    {
      name: 'description',
      content: 'Ці продукти створені в рф, та фінансують її воєнну машину'
    },
    { name: 'og:image', content: logo }
  ]
})

const db = useDataBaseStore()
db.fetchAll()

const geo = useGeoStore()
geo.fetch()
</script>
