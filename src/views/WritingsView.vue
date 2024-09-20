<template>
  <div class="flex flex-col items-center justify-center gap-4 !my-[5rem]">
    <h1 class="text-3xl">Escrita</h1>
    <nav>
      <router-link class="underline" to="/writings/books">Recomendação de livros</router-link>
    </nav>
  </div>
  <main class="flex flex-col gap-20 !mx-[6rem] !mb-[5rem]">
    <router-view />
    <section class="w-full">
      <div class="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
        <div v-for="(writing, id) in writings" :key="id" class="cursor-pointer" @click="handleGoToArticle(writing.id)">
          <TheCard class="overflow-hidden">
            <template #header>
              <img :src="writing.imgSrc" alt="Image" class="w-full" />
            </template>
            <template #title>{{ writing.title }}</template>
            <template #content>
              <p>{{ writing.content }}</p>
            </template>
          </TheCard>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleGoToArticle = (id) => {
  //navegação programática
  router.push({ name: 'article', params: { id } })
}

const writings = ref([
  {
    id: 1,
    title: 'Livros de Agosto',
    imgSrc: new URL('../assets/images/lectures.png', import.meta.url).href,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'
  },
  {
    id: 2,
    title: 'Livros de Setembro',
    imgSrc: new URL('../assets/images/lectures.png', import.meta.url).href,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'
  },
  {
    id: 3,
    title: 'Livros de Outubro',
    imgSrc: new URL('../assets/images/lectures.png', import.meta.url).href,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'
  },
  {
    id: 4,
    title: 'Livros de Novembro',
    imgSrc: new URL('../assets/images/lectures.png', import.meta.url).href,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'
  }
])
</script>
