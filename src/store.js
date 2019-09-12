import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routeInfo: {}
  },
  mutations: {
    SET_ROUTE(state, info) {
      state.routeInfo = info;
    }
  },
  actions: {
    setRoute({ commit }, info) {
      commit('SET_ROUTE', info);
    }
  }
})