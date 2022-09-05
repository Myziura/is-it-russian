<template>
  <div class="relative flex-inline">
    <slot />

    <div
      v-if="!props.isDisabled"
      class="absolute top-0 right-0 h-4 w-4 -mt-0.5 -mr-0.5 bg-red-500 rounded-full"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  isDisabled?: boolean
}>()
</script>
