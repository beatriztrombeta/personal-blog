<script setup>
import { ref } from 'vue'

const contacts = ref([
  { label: 'Email', url: 'mailto:beatriztrombeta@gmail.com', text: 'beatriztrombeta@gmail.com' },
  { label: 'Youtube', url: 'https://youtube.com/biatambem', text: 'youtube.com/biatambem' },
  { label: 'Pinterest', url: 'https://pinterest.com/beatriz_trombeta', text: 'pinterest.com/beatriz_trombeta' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/beatriz-trombeta', text: 'linkedin.com/in/beatriz-trombeta' }
])
</script>

<template>
  <main class="flex flex-col !my-[5rem] !mx-[6rem] items-center justify-center gap-8">
    <div class="!mb-[2rem]">
      <h1 class="text-3xl">Contato</h1>
    </div>
    <div class="text-lg gap-3 flex flex-col">
      <p v-for="(contact, index) in contacts" :key="index">
        {{ contact.label }}: 
        <a class="underline text-customRed" :href="contact.url">{{ contact.text }}</a>
      </p>
    </div>
  </main>
</template>
