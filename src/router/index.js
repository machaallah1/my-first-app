import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
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
    path: '/slot',
    name: 'slot',
    component: () => import('../views/SlotView.vue')
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import('../views/LearnView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
