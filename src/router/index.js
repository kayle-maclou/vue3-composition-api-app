import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstComponent from '../components/FirstComponent.vue'
import SecondComponent from '../components/SecondComponent.vue'
import ContainerComponent from '../components/ContainerComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/first-component',
      name: 'first-component',
      component: FirstComponent
    },
    {
      path: '/second-component',
      name: 'second-component',
      component: SecondComponent
    },
    {
      path: '/data-loading-component',
      name: 'data-loading-componentt',
      component: ContainerComponent
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
