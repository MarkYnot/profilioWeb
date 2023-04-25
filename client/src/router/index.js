import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
// import Test from '../views/test'
import Ecommerce from '../views/Ecommerce'
import modeSelection from '../views/modeSelection'
import videoCentre from '../views/videoCentre'
import videoRouter from './video' 
// import gameRouter from './game'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: videoCentre
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/book',
    name: 'Book',
    component: Book
  },


  {
    path: '/modeSelection',
    name: 'modeSelection',
    component: modeSelection
  },
  {
    path: '/Ecommerce',
    name: 'Ecommerce',
    component: Ecommerce
  },

  // {
  //   path: '/videoCentre',
  //   name: 'videoCentre',
  //   component: videoCentre
  // },
  
  {
    path: '/search&:text',
    name: 'Search',
    component: () => import('../views/search.vue')
  },

    ...videoRouter,

  

    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/profile.vue')
    },

    // {
    //   path: '/changePassword',
    //   name: 'changePassword',
    //   component: () => import('../views/changePassword.vue')
    // },

    // {
    //   path: '/forgetPassword',
    //   name: 'forgetPassword',
    //   component: () => import('../views/forgetPassword.vue')
    // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
