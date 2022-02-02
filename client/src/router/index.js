import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import CryptoJS from 'crypto-js'

import Main from '../views/MainForm.vue'
import LogIn from '../views/LogInForm.vue'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '*',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

let DecryptText = (text) => {
  var bytes  = CryptoJS.AES.decrypt(text, process.env.VUE_APP_SECRETKEY )
  var originalText = bytes.toString(CryptoJS.enc.Utf8)
  return originalText
}

router.beforeEach((to, from, next) => {
  if(DecryptText(store.state.log_in) !== "true" && to.path !== "/login")        {next("/login")}  // Go to Log In Page}
  else if(DecryptText(store.state.log_in) === "true" && to.path === "/login")   {next("/main")}   // Go to Main Page
  else if(DecryptText(store.state.log_in) === "true" && to.path === "/")        {next("/main")}   // Go to Main Page
  else                                                                          {next()}          // Go to Next Page
})

export default router