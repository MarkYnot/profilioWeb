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
    path: '/video/likes',
    name: 'likeVideo',
    component:()=> import(`../views/likeVideo.vue`)
  }
]