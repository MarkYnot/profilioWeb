import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import Test from '../views/test'
import modeSelection from '../views/modeSelection'
import videoCentre from '../views/videoCentre'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/test',
    name: 'Book',
    component: Test
  },

  {
    path: '/modeSelection',
    name: 'modeSelection',
    component: modeSelection
  },

  {
    path: '/videoCentre',
    name: 'videoCentre',
    component: videoCentre
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
