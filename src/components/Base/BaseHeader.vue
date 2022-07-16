<template>
  <div
    class="container mx-auto px-4 flex items-start justify-between font-semibold"
  >
    <router-link
      to="/"
      class="hover:underline leading-8 decoration-2 underline-offset-4"
    >
      <h1 class="text-3xl">Це 🐷<span class="text-red-500"> ?</span></h1>
    </router-link>

    <select class="h-8 text-xl font-semibold" v-model="$i18n.locale">
      <option
        v-for="locale of $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts"></script>
