<template>
  <div class="rounded-full p-px border bg-third-gray"
    :class="[coloredBorder && 'bg-gradient-to-r from-grdb via-grdm to-grde']" @mouseover="hover = true"
    @mouseleave="hover = false">
    <component :is="tag"
      class="rounded-full bg-white dark:bg-black px-8 text-black-2 dark:text-white text-[15x] font-['Montserrat']"
      :class="[high ? 'py-4' : 'py-2.5', uppercase && 'uppercase', classText]"
      :href="href"
      :target="href ? '_blank' : undefined"
      :rel="href ? 'noopener noreferrer' : undefined">
      {{ btnText }}
    </component>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  classText: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    required: true,
  },
  uppercase: {
    type: Boolean,
    default: false,
  },
  high: {
    type: Boolean,
    default: false,
  },
  coloredBorder: {
    type: Boolean,
    default: false,
  },
  changeText: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: '',
  },
})

const hover = ref(false)
const btnText = computed(() => {
  return props.text
})

const tag = computed(() => props.href ? 'a' : 'button')
</script>
