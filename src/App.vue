<template>
  <div class="h-full w-full py-8 flex flex-col sm:py-16">
    <BaseHeader class="mb-8" />
    <router-view />
  </div>
</template>
<script setup lang="ts">
import BaseHeader from '@/components/Base/BaseHeader.vue'
</script>
