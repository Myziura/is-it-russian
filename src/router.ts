import { createWebHashHistory, createRouter } from 'vue-router'

import MainView from '@/views/MainView.vue'
// import CategoriesView from '@/views/CategoriesView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductView from '@/views/ProductView.vue'

const routes = [
  {
    name: '',
    path: '/',
    component: MainView
  },
  // {
  //   name: '',
  //   path: '/',
  //   redirect: { name: 'categories' }
  // },
  // {
  //   name: 'categories',
  //   path: '/categories',
  //   component: CategoriesView
  // },
  {
    name: 'products',
    path: '/categories/:categoryId/products',
    component: ProductsView
  },
  {
    name: 'product',
    path: '/categories/:categoryId/products/:productId',
    component: ProductView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
