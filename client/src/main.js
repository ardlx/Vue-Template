import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import JsonExcel from 'vue-json-excel'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import myPlugins from './plugins/myplugins'
import CryptoJS from 'crypto-js'

import io from 'socket.io-client';
const socket = io(`${window.location.protocol}//${window.location.hostname}:7000`);
Vue.prototype.$socket = socket;

Vue.config.productionTip = false
Vue.component('downloadExcel', JsonExcel)
Vue.use(Antd)
Vue.use(myPlugins)
Vue.prototype.$CryptoJS = CryptoJS

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
