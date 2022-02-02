import Vue from 'vue'
import Vuex from 'vuex'
// import CryptoJS from 'crypto-js'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    log_in: "",
  },
  mutations: {
    CHANGE_USER: (state, data) => {
      state.user = data
    },
    CHANGE_LOGIN: (state, data) => {
      state.log_in = data
    },

  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
})