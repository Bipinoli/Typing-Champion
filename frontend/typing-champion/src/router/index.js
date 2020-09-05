import Vue from 'vue'
import VueRouter from 'vue-router'
import Join from '../views/Join.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Join',
    component: Join
  },
  {
    path: '/game/:signature',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Game.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
