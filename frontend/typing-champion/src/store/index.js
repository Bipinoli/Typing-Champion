import Vue from 'vue'
import Vuex from 'vuex'

import Chats from './modules/chats'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nickname: '',
    signature: '',
  },
  mutations: {
    setNickname(state, nickname) {
      state.nickname = nickname;
    }
  },
  actions: {
    setNickname({ commit }, nickname) {
      commit('setNickname', nickname);
    }
  },
  modules: {
    Chats,
  }
})
