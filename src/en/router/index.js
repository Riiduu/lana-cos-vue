import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/en/views/HomeView'
import News from '@/en/views/NewsView'
import Pricing from '@/en/views/PricingView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: Pricing
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
