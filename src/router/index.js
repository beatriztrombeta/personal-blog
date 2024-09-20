import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('../views/PhotosView.vue')
    },
    {
      path: '/arts',
      name: 'arts',
      component: () => import('../views/ArtsView.vue'),
      beforeEnter: () => {
        //eu usei essa rota como exemplo de como usar o beforeEnter
        //não conseguia pensar em mais nenhum exemplo executável
        alert('Esta página está em construção!')
        return false
      }
    },
    {
      path: '/writings',
      name: 'writings',
      component: () => import('../views/WritingsView.vue'),
      children: [
        {
          //rotas aninhadas
          path: 'books',
          component: () => import('../views/BooksView.vue')
        }
      ]
    },
    {
      //navegação dinâmica e parâmetros
      path: '/writings/:id',
      name: 'article',
      component: () => import('../views/ArticleView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  //também não consegui pensar em nenhum exemplo bom dentro da aplicação
  //pro beforeEach
  console.log(`Navegando para: ${to.name} a partir de ${from.name}`);
  next();
});


export default router
