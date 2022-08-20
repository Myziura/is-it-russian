<template>
  <div class="p-4 flex flex-col bg-white font-bold">
    <span class="mb-4">
      {{ dayjs(props.item.date).locale('uk').format('DD MMMM YYYY') }}
    </span>

    <span class="whitespace-pre-wrap" v-html="normalizedText" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import 'dayjs/locale/uk'
import dayjs from 'dayjs'

import type { Notification } from '@/types/notifications'

interface Props {
  item: Notification
}

const props = defineProps<Props>()

const normalizeText = () => {
  let text = props.item.text

  if (!text) return

  const regExp = new RegExp(/\((.*?)\)\[(.*?)\]/, 'gm')

  let match = text.match(regExp)

  if (!match) return text

  const defineTo = (from: string) => {
    const splitted = from.split(')[')

    const name = splitted[0].slice(1)
    const link = splitted[1].slice(0, -1)

    return `<a class="text-pink-600 underline decoration-2 underline-offset-2" href="${link}" target="_blank">${name}</a>`
  }

  const toReplace = match.map((from) => ({ from, to: defineTo(from) }))

  Object.values(toReplace).forEach(({ from, to }) => {
    text = text.replace(from, to)
  })

  return text
}

const normalizedText = normalizeText()
</script>
