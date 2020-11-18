import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Friends from '../views/Friends'
import Home from '../views/Home.vue'
import Dynamic from '../views/Dynamic'

const routes = [
{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/',
  name: 'Admin',
  component: Admin,
  redirect:'/friends',
  children: [
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/dynamic',
      name: 'Dynamic',
      component: Dynamic
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
  ]
},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router