import Vue from 'vue'
import Router from 'vue-router'
import Father from '@/components/prop_emit/Father'
import Home from '@/components/Home'
import Parent from '@/components/parent_children/Parent'
import A from '@/components/provide_inject/A'
import app from '@/components/ref_refs/App'
import index from '@/components/eventBus/index'
import App from '@/components/vuex/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/1',
      name: 'Father',
      component: Father
    },
    {
      path: '/2',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/3',
      name: 'A',
      component: A
    },
    {
      path: '/4',
      name: 'app',
      component: app
    },
    {
      path: '/5',
      name: 'index',
      component: index
    },
    {
      path: '/6',
      name: 'App',
      component: App
    }
  ]
})
