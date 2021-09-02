import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
// import Chatroom from '../views/Chatroom.vue'
import Home from '../views/Home.vue'
import AddProject from '../views/AddProject.vue'
import AddDonation from '../views/AddDonation.vue'
import Display from '../views/Display.vue'
import ShowDonation from '../views/ShowDonation.vue'
import { projectAuth } from '../firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }

}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) {
    next({ name: 'Home' })
  } else {
    next()
  }

}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  // {
  //   path: '/chatroom',
  //   name: 'Chatroom',
  //   component: Chatroom,
  //   beforeEnter:  requireAuth
  // },
  {
    path: '/home',
    name: 'Home',
    component: Home,

  },

  {
    path: '/add',
    name: 'addProject',
    component: AddProject,
  },
  {
    path: '/donation/:id',
    name: 'adddDonation',
    component: AddDonation,
  },
  {
    path: '/display',
    name: 'display',
    component: Display,
  },
  {
    path: '/show',
    name: 'showDonation',
    component: ShowDonation,
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
