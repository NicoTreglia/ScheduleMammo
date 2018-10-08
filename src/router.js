import Vue from 'vue'
import Router from 'vue-router'
import Questions from './views/Questions'
import Locations from './views/Locations'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/Locations',
      name: 'Locations',
      component: Locations

    }
  ]
})
