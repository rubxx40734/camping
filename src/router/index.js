import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/coupongame',
    component: () => import('../views/Coupongame.vue')
  },
  {
    path: '/fontproducts',
    component: () => import('../views/FontProducts.vue')
  },
  {
    path: '/oneproduct/:id',
    component: () => import('../views/OneProduct.vue')
  },
  {
    path: '/carts',
    component: () => import('../views/Carts.vue')
  },
  {
    path: '/buyform',
    component: () => import('../views/BuyForm.vue')
  },
  {
    path: '/payorder/:orderId',
    component: () => import('../views/PayOrder.vue')
  },
  {
    path: '/successpay',
    component: () => import('../views/SuccessPay.vue')
  },
  // 這邊是後台的路由
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Coupons.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
