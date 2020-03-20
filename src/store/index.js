import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: [
      {
        x: 340,
        y: 620
      },
      {
        x: 100,
        y: 620
      }
    ],
    playerName: '',
    isPlaying: false
  },
  mutations: {
    SET_PLAYERNAME (state, payload) {
      state.playerName = payload
    },
    SET_ISPLAYING (state, payload) {
      state.isPlaying = payload
    }
  },
  actions: {
    playGame (context, payload) {
      context.commit('SET_PLAYERNAME', payload.playerName)
      context.commit('SET_ISPLAYING', payload.isPlaying)
      localStorage.setItem('playerName', payload.playerName)
      localStorage.setItem('isPlaying', payload.isPlaying)
      router.push({ name: 'Game' })
    }
  },
  modules: {
  }
})
