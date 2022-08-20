<template>
  <div>Sidebar</div>
</template>

<script setup lang="ts">
interface Props {}
interface Emits {
  (e: '@close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<style scoped></style>
