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
  PICK_DAY({ commit }, { day, date }) {
    let payload = {
      day: day,
      date: date
    }
    console.log('pick day', payload)
    commit('CHANGE_DAY', payload)
    getMeals()
    commit('SET_GOODSLIST')
    commit('SET_STORELIST')
  },
  PICK_PERIOD({ commit }, period) {
    commit('CHANGE_PERIOD', period)
    getMeals()
    commit('SET_GOODSLIST')
    commit('SET_STORELIST')
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
  },
  async CONFIRM_ORDER({ commit }) {
    let goods = []
    state.carts.map((cart) => {
      cart.map((item) => {
        console.log(item)
        let goodsInfo = {
          useDate: item.date,
          goodName: item.name,
          intervalNo: item.period,
          hotDegree: item.hot,
          merchantStoreId: item.shop,
          merchantStoreName: item.shopName,
          goodNum: 1,
          isTaste: false,
          goodPrice: item.price,
          numberOfPurchased: 0,
          orderLimit: 0,
          specsList: '',
          hidePrice: 0,
          week: item.weekDay,
          goodId: item.id,
          goodImgUrl: item.img
        }
        goods.push(goodsInfo)
      })
    })
    console.log('confirm order goods: ', goods)
    await confirmOrder(goods).then((res) => {
      console.log('confirm order orders: ', res)
      commit('SET_ORDERINFO', res)
    })
  },
  async PAY_ORDER() {
    let orderInfos = state.orderInfo
    let orders = []
    orderInfos.cartVoList.map((orderinfo) => {
      console.log('PAY_ORDER orders: ', orderinfo)
      orderinfo.goodList.map((order) => {
        let orderGoods = {
          actualPrice: order.actualPrice,
          availableMoney: order.availableMoney,
          companyPrice: order.companyPrice,
          companyRemainMoney: order.companyRemainMoney,
          couponPrice: order.couponPrice,
          couponType: order.couponType,
          goodId: order.goodId,
          goodName: order.goodName,
          goodNum: order.goodNum,
          goodPrice: order.goodsPrice,
          hotDegree: order.hotDegree,
          intervalNo: order.intervalNo,
          isTaste: order.isTaste,
          merchantStoreId: order.merchantStoreId,
          merchantStoreName: order.merchantStoreName,
          needPersonPay: order.needPersonPay,
          remainAvailableMoney: order.remainAvailableMoney,
          specsList: order.specsList,
          staffCouponId: order.staffCouponId,
          thirdWalletPrice: order.thirdWalletPrice,
          thirdWalletRemainMoney: order.thirdWalletPrice,
          todayBalance: order.todayBalance,
          useDate: order.useDate,
          walletPrice: order.walletPrice,
          walletRemainMoney: order.walletRemainMoney,
          week: order.week
        }
        orders.push(orderGoods)
      })
    })
    await payCartForFree(orders, orderInfos.nonceStr, orderInfos.timestamp).then((payRes) => {
      console.log('payRes', payRes)
      reqCartInfo(payRes).then((reqRes) => {
        console.log('reqRes', reqRes)
        if (reqRes.orderResult == 'ALL_SUCCESS') {
          window.alert('下单成功')
          router.push({ name: 'home' })
        }
      })
    })
  }
}

export async function reqCartInfo(cartId) {
  let params = {
    cartId: cartId,
    doNum: 1,
    code: localStorage.getItem('auth_code'),
    client_type: 'app',
    appNum: 0,
    corpId: 0,
    appType: 'IOS'
  }
  console.log('reqCartInfo api', params)
  let reqInfo = null
  await api.reqCartInfo(params).then((res) => {
    if (res.data.code != '200') {
      console.log('下单-查询-失败')
      router.push({ name: 'home' })
    }
    console.log('下单-查询-成功', res)
    reqInfo = res.data.data
  })
  return reqInfo
}

export async function payCartForFree(orders, nonceStr, timestamp) {
  let params = {
    shoppingCartVoListJson: JSON.stringify(orders),
    nonceStr: nonceStr,
    timestamp: timestamp,
    code: localStorage.getItem('auth_code'),
    client_type: 'app',
    appNum: 0,
    corpId: 0,
    appType: 'IOS'
  }
  let cartId = ''
  console.log('payCartForFree api', params)
  await api.payCartForFree(params).then((res) => {
    console.log('paycart res', res)
    if (res.data.code != '200') {
      console.log('下单失败')
      router.push({ name: 'home' })
    }
    cartId = res.data.data.cartId
  })
  return cartId
}

export async function confirmOrder(goodsList) {
  let params = {
    shoppingCartVoListJson: JSON.stringify(goodsList),
    staffCouponId: -1,
    useSubsidy: 0,
    code: localStorage.getItem('auth_code'),
    client_type: 'app',
    appNum: 0,
    corpId: 0,
    appType: 'IOS'
  }
  console.log('confirm order api', params)
  let orderInfo = ''
  await api.confirmOrder(params).then((res) => {
    if (res.data.code != '200') {
      console.log('确认订单失败')
      router.push({ name: 'home' })
    }
    console.log('confirm 下单成功', res)
    orderInfo = res.data.data
  })
  return orderInfo
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
    if (res.data.code != '200') {
      console.log('获取商品失败')
    } else {
      let storelist = JSON.stringify(res.data.data.merchantStoreList)
      let goodslist = JSON.stringify(res.data.data.goodVoList)
      localStorage.setItem('goodslist', goodslist)
      localStorage.setItem('storelist', storelist)
    }
  })
}
