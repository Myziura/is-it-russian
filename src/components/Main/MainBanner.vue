<template>
  <div class="px-4 py-8 text-center font-semibold bg-red-50 sm:p-16">
    <div class="max-w-3xl m-auto flex flex-col items-center">
      <p class="mb-8">
        Чи варто підтримувати російський бізнес та російську економіку в той
        час, як тисячі українських підприємств знищені, а мільйони українських
        громадян вимушено залишили свої домівки?
      </p>
      <p class="mb-8">
        Допоможіть нам зібрати перелік російських ІТ-продуктів та компаній, які
        намагаються заробляти в Україні.
      </p>

      <div class="flex justify-center items-center">
        <BaseButton label="Повідомити про продукт" type="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/Base/BaseButton.vue'
</script>

<style scoped></style>
