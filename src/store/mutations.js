export default {
  SET_ORDERINFO(state, payload) {
    state.orderInfo = payload
  },
  CHANGE_STORE(state, payload) {
    state.nowShop = payload ? payload : 1
  },
  SET_GOODSLIST(state) {
    let goodslist = localStorage.getItem('goodslist')
    let goodsList = JSON.parse(goodslist)
    if (state.nowShop == 1) {
      //state.goodsList = SLICE_ARRAY(goodsList, 5)
      state.goodsList = goodsList
    } else {
      state.goodsList = goodsList.filter((good) => good.merchantStoreId == state.nowShop)
      //state.goodsList = SLICE_ARRAY(goodsList, 5)
    }
  },
  SET_STORELIST(state) {
    let storelist = localStorage.getItem('storelist')
    state.storeList = JSON.parse(storelist)
  },
  SET_ADDRLIST(state) {
    let addrList = localStorage.getItem('addrlist')
    state.addrList = JSON.parse(addrList)
  },
  CHANGE_LOGIN(state) {
    state.isLogin = !state.isLogin
  },
  SET_USERINFO(state) {
    let userinfo = localStorage.getItem('userinfo')
    state.UserInfo = JSON.parse(userinfo)
  },
  GEN_WEEK_BY_DATE(state) {
    const nowDate = new Date()
    const nowDay = nowDate.getDay()
    var countDate = nowDate.getDate()
    var countMonth = nowDate.getMonth() + 1
    state.nowDay = nowDay
    var nowCountDate = countDate < 10 ? '0' + countDate : countDate
    var nowCountMonth = countMonth < 10 ? '0' + countMonth : countMonth
    state.nowDate = nowDate.getFullYear() + '-' + nowCountMonth + '-' + nowCountDate
    const countMiles = 24 * 60 * 60 * 1000
    let j = 0
    let n = 1
    let i = nowDay
    while (j < nowDay) {
      const preDate = new Date(nowDate.getTime() + -j * countMiles)
      const countDay = preDate.getDay()
      const countDate = preDate.getDate()
      const nowCountDate = countDate < 10 ? '0' + countDate : countDate
      const countMonth = preDate.getMonth() + 1
      const nowCountMonth = countMonth < 10 ? '0' + countMonth : countMonth
      const preDateInfo = {
        date: countDate < 10 ? '0' + countDate : countDate,
        dateInfo: preDate.getFullYear() + '-' + (preDate.getMonth() + 1) + '-' + nowCountDate,
        nowdate: preDate.getFullYear() + '-' + nowCountMonth + '-' + nowCountDate,
        day: countDay,
        dayCN: state.dayMapCn[countDay]
      }
      const dateFull =
        preDate.getFullYear() +
        '-' +
        (preDate.getMonth() + 1) +
        '-' +
        countDate +
        ' ' +
        state.dayMapCn[countDay]
      state.dateInfo[countDay] = dateFull
      state.pickDates.push(preDateInfo)
      j++
    }

    while (i < 5) {
      const preDate = new Date(nowDate.getTime() + n * countMiles)
      const countDay = preDate.getDay()
      const countDate = preDate.getDate()
      const nowCountDate = countDate < 10 ? '0' + countDate : countDate
      const countMonth = preDate.getMonth() + 1
      const nowCountMonth = countMonth < 10 ? '0' + countMonth : countMonth
      const preDateInfo = {
        date: countDate < 10 ? '0' + countDate : countDate,
        dateInfo: preDate.getFullYear() + '-' + nowCountMonth + '-' + nowCountDate,
        nowdate: preDate.getFullYear() + '-' + nowCountMonth + '-' + nowCountDate,
        day: countDay,
        dayCN: state.dayMapCn[countDay]
      }
      const dateFull =
        preDate.getFullYear() +
        '-' +
        (preDate.getMonth() + 1) +
        '-' +
        countDate +
        ' ' +
        state.dayMapCn[countDay]
      state.dateInfo[countDay] = dateFull
      state.pickDates.push(preDateInfo)
      i++
      n++
    }
    state.pickDates.sort((a, b) => a.day - b.day)
  },
  CHANGE_DAY(state, payload) {
    state.nowDay = payload.day
    state.nowDate = payload.date
    console.log('now date', state.nowDate)
  },
  CHANGE_PERIOD(state, period) {
    const nowDate = new Date()
    let hours = nowDate.getHours() //获取当前小时数(0-23)
    if (period) {
      state.nowPeriod = period
      switch (period) {
        case 'mor':
          state.intervalNo = 1
          break
        case 'noon':
          state.intervalNo = 2
          break
        case 'eve':
          state.intervalNo = 3
          break
      }
    } else {
      if (1 <= hours && hours < 8) {
        state.nowPeriod = 'mor'
        state.intervalNo = 1
      } else if (8 <= hours && hours < 16) {
        state.nowPeriod = 'noon'
        state.intervalNo = 2
      } else {
        state.nowPeriod = 'eve'
        state.intervalNo = 3
      }
    }
    console.log('interval no', state.intervalNo)
  },
  CHANGE_CART(state, payload) {
    state.carts[state.nowDay].push(payload)
    state.cartsCount = state.cartsCount + 1
  },
  CHANGE_CARTS(state) {
    state.cartsDisplay = !state.cartsDisplay
  },
  CLEAR_CART_LIST(state) {
    state.carts = [[], [], [], [], [], []]
    state.cartsCount = 0
  },
  REMOVE_CART_MEAL(state, payload) {
    let count = 0
    state.carts = state.carts.map((cart) => {
      cart = cart.filter((item) => item.id !== payload)
      count = count + cart.length
      return cart
    })
    state.cartsCount = count
  },
  CHANGE_SCROLL(state) {
    state.isScroll = !state.isScroll
  }
}

export function SLICE_ARRAY(array, size) {
  var result = []
  for (var x = 0; x < Math.ceil(array.length / size); x++) {
    var start = x * size
    var end = start + size
    result.push(array.slice(start, end))
  }
  return result
}
