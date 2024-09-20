<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  title: String,
  name: String,
  description: String
})

const imageUrl = ref(null)

onMounted(() => {
  imageUrl.value = new URL(`../assets/images/photos/${props.name}.png`, import.meta.url).href
})
</script>

<template>
  <main class="flex flex-col items-center justify-center gap-4">
    <h1 class="text-2xl">{{ title }}</h1>
    <figure class="flex flex-col items-center justify-start w-11/12">
      <div>
        <img class="w-full" :src="imageUrl" alt="Image" v-if="imageUrl" />
        <figcaption>{{ description }}</figcaption>
      </div>
    </figure>
  </main>
</template>
