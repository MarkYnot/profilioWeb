export default[
  {
    path: '/game1',
    name: 'Game1',
    component: () => import('../views/game.vue')
  },

  {
    path: '/game2',
    name: 'Game2',
    component: () => import('../views/game2.vue')
  },

]