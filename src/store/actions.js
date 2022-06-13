export default {
  INIT_ADDRLIST({ commit }) {
    const addrList = ['贪玩游戏B栋1F', '贪玩游戏B栋2F', '贪玩游戏B栋3F', '贪玩游戏B栋4F', '贪玩游戏B栋5F', '贪玩游戏B栋6F']
    commit('SET_ADDRLIST', addrList)
  },
  INIT_DATES({ commit }) {
    commit('GEN_WEEK_BY_DATE')
  },
  INIT_PERIOD({ commit }) {
    commit('CHANGE_PERIOD')
  },
  PICK_DAY({ commit }, day) {
    commit('CHANGE_DAY', day)
  },
  PICK_PERIOD({ commit }, period) {
    commit('CHANGE_PERIOD', period)
  },
  ADD_CART({ commit }, good) {
    commit('CHANGE_CART', good)
  }
}
