<template>
  <div class="p-4 flex flex-col bg-white">
    <span class="mb-4 font-bold">
      {{ dayjs(props.item.date).locale('uk').format('DD MMMM YYYY') }}
    </span>

    <span class="whitespace-pre-wrap font-medium" v-html="normalizedText" />
  </div>
</template>

<script setup lang="ts">
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

  const match = text.match(regExp)

  if (!match) return text

  const defineTo = (from: string) => {
    const splitted = from.split(')[')

    const name = splitted[0].slice(1)
    const link = splitted[1].slice(0, -1)

    return `<a class="font-bold text-red-500 underline decoration-2 underline-offset-2" href="${link}" target="_blank">${name}</a>`
  }

  const toReplace = match.map((from) => ({ from, to: defineTo(from) }))

  Object.values(toReplace).forEach(({ from, to }) => {
    text = text.replace(from, to)
  })

  return text
}

const normalizedText = normalizeText()
</script>
