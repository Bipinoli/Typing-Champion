import Vue from 'vue'
import VueRouter from 'vue-router'
import Join from '@/views/Join';
import Race from '@/components/game/Race';

Vue.use(VueRouter);

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
  },
  {
    path: '/game/:signature/race',
    name: 'Race',
    component: Race
  }
];

const router = new VueRouter({
  routes
});

export default router;
