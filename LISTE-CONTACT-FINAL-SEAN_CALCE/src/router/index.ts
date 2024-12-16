import { createRouter, createWebHistory } from 'vue-router'
import ListePersonnes from '@/views/ListePersonnes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: ListePersonnes
    }
  ]
})

export default router