import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: {
      x: 220,
      y: 620
    }
  },
  mutations: {
    SET_POSY (state, payload) {
      state.position.y -= payload
    }
  },
  actions: {
  },
  modules: {
  }
})
