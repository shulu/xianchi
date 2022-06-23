import router from '../router'
import api from '@/api/api'
import state from './state'

export default {
  CHECK_LOGIN() {
    let authCode = localStorage.getItem('auth_code')
    if (!authCode) {
      router.push({ name: 'login' })
    }
    return false
  },
  async LOGIN({ commit }, params) {
    //登录
    await api.login(params).then((res) => {
      let authCode = res.data.data.code
      localStorage.setItem('auth_code', authCode)
      let authCookie = `client_type=app; appType=IOS; code=${authCode}`
      localStorage.setItem('auth_cookie', authCookie)
    })
    commit('CHANGE_LOGIN')
    // 命名的路由
    router.push({ name: 'home' })
  },
  async INIT_USERINFO({ commit }) {
    let userinfo = localStorage.getItem('userinfo')
    if (!userinfo) {
      let params = {
        code: localStorage.getItem('auth_code'),
        client_type: 'app',
        appNum: 0,
        corpId: 0,
        appType: 'IOS'
      }
      await api.getUser(params).then((res) => {
        let userinfo = JSON.stringify(res.data.data)
        localStorage.setItem('userinfo', userinfo)
      })
    }
    commit('SET_USERINFO')
  },
  async INIT_ADDRLIST({ commit }) {
    let addrList = localStorage.getItem('addrlist')
    if (!addrList) {
      let params = {
        code: localStorage.getItem('auth_code'),
        client_type: 'app',
        appNum: 0,
        corpId: 0,
        appType: 'IOS'
      }
      await api.getPositionList(params).then((res) => {
        let userinfo = JSON.stringify(res.data.data)
        localStorage.setItem('addrlist', userinfo)
      })
    }
    commit('SET_ADDRLIST')
  },
  INIT_MEALS({ commit }) {
    getMeals()
    commit('SET_GOODSLIST')
    commit('SET_STORELIST')
  },
  PICK_STORE({ commit }, storeId) {
    commit('CHANGE_STORE', storeId)
    commit('SET_GOODSLIST')
  },
  INIT_DATES({ commit }) {
    commit('GEN_WEEK_BY_DATE')
  },
  INIT_PERIOD({ commit }) {
    commit('CHANGE_PERIOD')
  },
  PICK_DAY({ commit }, day, date) {
    let payload = {
      day: day,
      date: date
    }
    commit('CHANGE_DAY', payload)
    getMeals()
    commit('SET_GOODSLIST')
  },
  PICK_PERIOD({ commit }, period) {
    commit('CHANGE_PERIOD', period)
    getMeals()
    commit('SET_GOODSLIST')
  },
  ADD_CART({ commit }, good) {
    commit('CHANGE_CART', good)
  },
  SHOW_CARTS({ commit }) {
    commit('CHANGE_CARTS')
  },
  CLEAR_CARTS({ commit }) {
    commit('CLEAR_CART_LIST')
  },
  REMOVE_MEAL({ commit }, idx) {
    commit('REMOVE_CART_MEAL', idx)
  },
  SCROLL_BAR({ commit }) {
    commit('CHANGE_SCROLL')
  }
}

export async function getMeals() {
  let params = {
    intervalNo: state.intervalNo,
    useDate: state.nowDate,
    code: localStorage.getItem('auth_code'),
    client_type: 'app',
    appNum: 0,
    corpId: 0,
    appType: 'IOS'
  }
  await api.getGoods(params).then((res) => {
    let storelist = JSON.stringify(res.data.data.merchantStoreList)
    let goodslist = JSON.stringify(res.data.data.goodVoList)
    localStorage.setItem('goodslist', goodslist)
    localStorage.setItem('storelist', storelist)
  })
}
