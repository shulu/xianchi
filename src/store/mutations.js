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
      const preDateInfo = {
        date: preDate.getDate() < 10 ? '0' + preDate.getDate() : preDate.getDate(),
        day: preDate.getDay(),
        dayCN: state.dayMapCn[preDate.getDay()]
      }
      state.pickDates.push(preDateInfo)
      j++
    }
    console.log(state.pickDates)

    while (i < 5) {
      const preDate = new Date(nowDate.getTime() + n * countMiles)
      const preDateInfo = {
        date: preDate.getDate() < 10 ? '0' + preDate.getDate() : preDate.getDate(),
        day: preDate.getDay(),
        dayCN: state.dayMapCn[preDate.getDay()]
      }
      state.pickDates.push(preDateInfo)
      i++
      n++
    }
    console.log(state.pickDates)
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
    state.carts.push(payload)
  }
}
