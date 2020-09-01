import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Proposal from '../views/Proposal.vue'
import Accompany from '../views/Accompany.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },{
    path: '/proposal/:id',
    name: 'Proposal',
    component: Proposal
  },{
    path: '/accompany/:id',
    name: 'Accompany',
    component: Accompany
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
