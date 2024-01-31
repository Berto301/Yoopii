import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'
import Login from '../views/connexion/Login.vue'
import SignUp from "../views/connexion/Signup.vue"
import ResetView from "../views/connexion/ResetPassword.vue"
import Dashboard from "../views/admin/pages/dashboard/index.vue"
import Reports from "../views/admin/pages/Reports/index.vue"
import Customers from "../views/admin/pages/customers/index.vue"
import Property from "../views/admin/pages/Property/index.vue"
import AppLayout from "../views/admin/layout/index.vue"
import Terrain from "@/views/admin/pages/Terrain/index.vue"
import Settings from "../views/admin/pages/settings/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/sign-in',
      name:"sign-in",
      component:Login
    },
    {
      path:'/sign-up',
      name:"sign-up",
      component:SignUp
    },
    {
      path:'/reset-password',
      name:"reset-password",
      component:ResetView
    },
      {
        path: '/admin',
        name:"admin",
        meta: {
          requiresAuth: true,
        },
        component: AppLayout,
        children: [
          {
            path: 'dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: 'customers',
            name: 'admin-customers',
            component: Customers,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: 'reports',
            name: 'admin-reports',
            component: Reports,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: 'property',
            name: 'admin-property',
            component: Property,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: 'terrain',
            name: 'admin-terrain',
            component: Terrain,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: 'settings',
            name: 'admin-settings',
            component: Settings,
            meta: {
              requiresAuth: true,
            },
          }
          // Add more children routes as needed
        ]
      }
      
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
