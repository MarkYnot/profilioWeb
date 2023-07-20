import Vue from 'vue'
import VueRouter from 'vue-router'
import Project from '../views/Project.vue'
// import Test from '../views/test'
import Ecommerce from '../views/Ecommerce'
import homePage from '../views/homePage'
// import gameRouter from './game'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'homePage',
    component: homePage
  },

  {
    path: '/project',
    name: 'Project',
    component: Project
  },


  {
    path: '/Ecommerce',
    name: 'Ecommerce',
    component: Ecommerce
  },

  {
    path: '/resume',
    name: 'resume',
    component:()=> import(`../views/resume.vue`)
  },

    {
    path: '/project/:name',
    name: 'projectDetailPage',
    component: ()=> import('../views/projectDetail.vue')
  },


  // {
  //   path: '/codeBlock',
  //   name: 'codeBlock',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/codeBlock.vue')
  // },

    // {
  //   path: '/modeSelection',
  //   name: 'modeSelection',
  //   component: modeSelection
  // },

  // {
  //   path: '/home',
  //   name: 'test',
  //   component: Home
  // },
  
  // {
  //   path: '/search&:text',
  //   name: 'Search',
  //   component: () => import('../views/search.vue')
  // },

  // {
  //   path: '/video&:id',
  //   name: 'videoPlayPage',
  //   component: ()=> import('../views/videoPlay')
  // },

  // {
  //   path: '/video/collection',
  //   name: 'videoCollection',
  //   component:()=> import(`../views/collectVideo.vue`)
  // },

    // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: () => import('../views/profile.vue')
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
