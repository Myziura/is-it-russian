<template>
  <div
    id="app-main"
    class="h-full w-full py-8 flex flex-col tracking-normal overflow-auto sm:py-16"
  >
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
import BaseHeader from '@/components/Base/BaseHeader.vue'
import BasePigModal from '@/components/Base/BasePigModal.vue'

import { useDataBaseStore } from '@/stores/db'
import { useGeoStore } from '@/stores/geo'

const db = useDataBaseStore()
db.fetchAll()

const geo = useGeoStore()
geo.fetch()
</script>
