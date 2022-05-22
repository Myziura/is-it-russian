<template>
  <div class="h-full w-full py-8 flex flex-col sm:py-16">
    <BasePigModal v-if="geo.isCountryRussia" />

    <template v-else>
      <BaseHeader class="mb-4 sm:mb-8" />
      <router-view />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseHeader from '@/components/Base/BaseHeader.vue'
import BasePigModal from '@/components/Base/BasePigModal.vue'

import { useGeoStore } from '@/stores/geo'

const geo = useGeoStore()
geo.fetch()
</script>
