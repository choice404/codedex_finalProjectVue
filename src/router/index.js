import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Order from '../views/Order.vue'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  // {
  //   path: '/menu',
  //   name: 'Menu',
  //   component: Menu
  // },
  {
    path: '/order',
    name: 'Order',
    component: Order
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
