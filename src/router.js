import Vue from 'vue'
import Router from 'vue-router'
import Questions from './views/Questions'
import Help from './views/Help'

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
      path: '/Help',
      name: 'Help',
      component: Help
    }
  ]
})


