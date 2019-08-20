import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    formJump: false,
    finished: true,
    frontUrl: '',
    backUrl: '',
    avataUrl: '',
    ICRQA: '',
    plat: '',
    heightLight: 'one',
    EndSession: false
}
const getters = {
  timeStampStore (state) {
    return state.times
  }
}
const mutations = {
  heightLightFun (state, val) {
    state.heightLight = val
  },
  formJumpFun (state, val) {
    state.formJump = val
  },
  finishedFun (state, val) {
    state.finished = val
  },
  frontUrlFun (state, val) {
    state.frontUrl = val
  },
  backUrlFun (state, val) {
    state.backUrl = val
  },
  avataUrlFun (state, val) {
    state.avataUrl = val
  },
  ICRQAFun (state, val) {
    state.ICRQA = val
  },
  platFun (state, val) {
    state.plat = val
  },
  EndSessionFun (state, val) {
    state.EndSession = val
  }
}
const store = new Vuex.Store({
  state,
  getters,
  mutations
})
export default store
