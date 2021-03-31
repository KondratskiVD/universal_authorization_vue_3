import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    component: () => import('@/layouts/auth/AuthLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/pages/Login/Login.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/pages/Register/Register.vue'),
      },
    ]
  },
  {
    path: '',
    component: () => import('@/layouts/main/MainLayout.vue'),
    children: [
      {
        path: '/',
        redirect: '/dashboard'
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/pages/Dashboard/Dashboard.vue'),
        meta: { auth: true },
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
