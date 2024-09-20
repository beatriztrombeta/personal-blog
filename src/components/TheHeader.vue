<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const paths = ref(['/', '/about', '/photos', '/arts', '/writings', '/contact'])
const titles = ref(['início', 'sobre', 'fotos', 'artes', 'escritas', 'contato'])
</script>

<template>
  <header>
    <div class="wrapper flex items-center justify-between">
      <img class="w-14" src="../components/icons/seashell.png" alt="green seashell" />
      <nav class="w-full flex justify-center font-homemade text-xl gap-14">
        <RouterLink
          class="hover:text-customRed active:text-customRed active:underline hover:underline"
          v-for="(path, index) in paths"
          :key="path"
          :to="path"
        >
          {{ titles[index] }}
        </RouterLink>
      </nav>
      <img class="w-6" src="../components/icons/search.svg" alt="search icon" />
    </div>
  </header>
</template>

<style>
.wrapper {
  margin: 2rem 6rem;
}
</style>
