<script setup>
import PhotoCard from '@/components/PhotoCard.vue'

const photos = [
  {
    title: 'Festa Junina',
    name: 'festajunina',
    description:
      'Festa junina na escola em que eu trabalhava, foi muito legal, eu até dancei na quadrilha!!'
  },
  {
    title: 'Caminhada',
    name: 'caminhada',
    description: 'Acho esse pedaço do meu bairro muito lindo e único, a luz é linda.'
  }
]
</script>

<template>
  <main class="flex flex-col items-center justify-center gap-16 !my-[5rem] !mx-[6em]">
    <PhotoCard
      v-for="photo in photos"
      :key="photo"
      :title="photo.title"
      :name="photo.name"
      :description="photo.description"
    />
  </main>
</template>
