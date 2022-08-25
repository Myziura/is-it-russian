<template>
  <Teleport to="#app-main">
    <transition name="fade" appear>
      <div
        v-if="isVisibleMask"
        class="Sidebar fixed inset-0 h-full w-full flex justify-end cursor-pointer z-10"
        @click.self="handleClose"
      >
        <transition name="slide-left" appear>
          <div
            v-if="isVisibleContent"
            class="relative w-11/12 h-full flex flex-col bg-white shadow-lg cursor-default overflow-hidden"
            :style="`max-width: 552px;`"
          >
            <div
              class="h-full w-full flex flex-col overflow-auto"
              :class="props.contentClass"
            >
              <slot />
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useScrollLock } from '@vueuse/core'

interface Props {
  contentClass: string | object
}
interface Emits {
  (e: '@close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const bodyEl = ref<HTMLBodyElement | null>(null)
const isScrollLocked = useScrollLock(bodyEl)

onMounted(() => {
  bodyEl.value = document.querySelector('body')
  isScrollLocked.value = true
})

onBeforeUnmount(() => {
  isScrollLocked.value = false
})

const isVisibleMask = ref(true)
const isVisibleContent = ref(true)

const handleClose = () => {
  isVisibleContent.value = false

  setTimeout(() => (isVisibleMask.value = false))

  setTimeout(() => emit('@close'), 300)
}

defineExpose({ handleClose })
</script>

<style scoped>
.Sidebar {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
