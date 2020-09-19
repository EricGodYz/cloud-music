import Vue from 'vue'
import Vuex from 'vuex'
import recommend from './modules/recommend'
import singers from './modules/singers'
import rank from './modules/rank';
import songList from './modules/song-list';
import singer from './modules/singer'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    recommend,
    singers,
    rank,
    songList,
    singer
  }
})
