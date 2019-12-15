import Vue from 'vue'
import Router from 'vue-router'
import Et from './components/Et.vue'
import Kahvaltilik from './components/Kahvaltilik.vue'

Vue.use(Router)

let Et = () => import('./components/Et.vue');

export default new Router({
    mode: 'history',

    routes: [
        {
          path: '/',
          component: home
        },
        {
          path: '/Et',
          component: Et
        },
        {
        path: '/kahvaltilik',
        component: Kahvaltilik
        }
    ]
  })