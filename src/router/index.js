import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
// import Chatroom from '../views/Chatroom.vue'
import Home from '../views/Home.vue'
import AddProject from '../views/AddProject.vue'
import CreateProfile from '../views/CreateProfile.vue'
import AddDonation from '../views/AddDonation.vue'
import Display from '../views/Display.vue'
import UserProfile from '../views/UserProfile.vue'
import HowItWorks from '../views/HowItWorks.vue'
import FAQ from '../views/FAQ.vue'
import AboutUs from '../views/AboutUs.vue'
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
    beforeEnter: requireAuth,


  },
  {
    path: '/add',
    name: 'addProject',
    component: AddProject,
  },
  {
    path: '/donation/:id/:nama',
    name: 'adddDonation',
    component: AddDonation,
  },
  {
    path: '/display',
    name: 'display',
    component: Display,
  },
  {
    path: '/createprofile',
    name: 'createprofile',
    component: CreateProfile,
  },
  {
    path: '/userprofile/:id/',
    name: 'UserProfile',
    component: UserProfile,
    // beforeEnter: requireAuth,
    // props: true
  },
  {
    path: '/howitworks',
    name: 'HowItWorks',
    component: HowItWorks,

  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: AboutUs,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
