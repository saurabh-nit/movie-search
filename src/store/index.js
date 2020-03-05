import Vue from 'vue'
import Vuex from 'vuex'
import movieStore from './movie-store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movieStore
  }
})
