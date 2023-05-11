export default[
  {
    path: '/video&:id',
    name: 'videoPlayPage',
    component: ()=> import('../views/videoPlay')
  },

  {
    path: '/video/collection',
    name: 'videoCollection',
    component:()=> import(`../views/collectVideo.vue`)
  },

  {
    path: '/resume',
    name: 'resume',
    component:()=> import(`../views/resume.vue`)
  }
]