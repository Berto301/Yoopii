import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'
import Login from '../views/connexion/Login.vue'
import SignUp from "../views/connexion/Signup.vue"
import ResetView from "../views/connexion/ResetPassword.vue"
import Layout from "../views/admin/layout/index.vue"

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
      path:'/admin',
      name:"homeAdmin",
      component:Layout
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
