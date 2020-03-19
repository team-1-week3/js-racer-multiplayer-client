import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'
Vue.use(Vuex)
// const URL='http://localhost:3000'
export default new Vuex.Store({
  state: {
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
      console.log('>>> MASUK STORE: PLAYGAME')
      context.commit('SET_PLAYERNAME', payload.playerName)
      context.commit('SET_ISPLAYING', payload.isPlaying)
      // localStorage.setItem('playerName', this.playerName)
      // localStorage.setItem('isPlaying', this.isPlaying)
      localStorage.setItem('playerName', payload.playerName)
      localStorage.setItem('isPlaying', payload.isPlaying)
      router.push({ name: 'Game' })
    }
  },
  modules: {
  }
})
