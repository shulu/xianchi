export default {
  SET_ADDRLIST(state, payload) {
    state.addrList = payload
  },
  SET_CUR_ADDR(state, payload) {
    state.addrChoose = payload
  },
  SET_PAGE_CHOOSE(state, payload) {
    state.pageChoose = payload
  }
}
