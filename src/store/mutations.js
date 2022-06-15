export default {
  GEN_WEEK_BY_DATE(state) {
    const nowDate = new Date()
    const nowDay = nowDate.getDay()
    state.nowDay = nowDay
    const countMiles = 24 * 60 * 60 * 1000
    let j = 0
    let n = 1
    let i = nowDay
    while (j < nowDay) {
      const preDate = new Date(nowDate.getTime() + -j * countMiles)
      const countDay = preDate.getDay()
      const countDate = preDate.getDate()

      const preDateInfo = {
        date: countDate < 10 ? '0' + countDate : countDate,
        dateInfo: preDate.getFullYear() + '-' + (preDate.getMonth() + 1) + '-' + countDate,
        day: countDay,
        dayCN: state.dayMapCn[countDay]
      }
      const dateFull = preDate.getFullYear() + '-' + (preDate.getMonth() + 1) + '-' + countDate + ' ' + state.dayMapCn[countDay]
      state.dateInfo[countDay] = dateFull
      state.pickDates.push(preDateInfo)
      j++
    }

    while (i < 5) {
      const preDate = new Date(nowDate.getTime() + n * countMiles)
      const countDay = preDate.getDay()
      const countDate = preDate.getDate()
      const preDateInfo = {
        date: countDate < 10 ? '0' + countDate : countDate,
        day: countDay,
        dayCN: state.dayMapCn[countDay]
      }
      const dateFull = preDate.getFullYear() + '-' + (preDate.getMonth() + 1) + '-' + countDate + ' ' + state.dayMapCn[countDay]
      state.dateInfo[countDay] = dateFull
      state.pickDates.push(preDateInfo)
      i++
      n++
    }
    state.pickDates.sort((a, b) => a.day - b.day)
  },
  CHANGE_DAY(state, payload) {
    state.nowDay = payload
  },
  CHANGE_PERIOD(state, period) {
    const nowDate = new Date()
    let hours = nowDate.getHours() //获取当前小时数(0-23)
    if (period) {
      state.nowPeriod = period
    } else {
      if (1 <= hours && hours < 8) {
        state.nowPeriod = 'mor'
      } else if (8 <= hours && hours < 16) {
        state.nowPeriod = 'noon'
      } else {
        state.nowPeriod = 'eve'
      }
    }
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
  }
}
