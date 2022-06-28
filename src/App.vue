<template>
  <router-view />
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  created() {
    this.checkScreen()
    window.addEventListener('resize', this.checkScreen)
    if (this.isLogin) {
      this.INIT_USERINFO()
      this.INIT_ADDRLIST()
      this.INIT_DATES()
      this.INIT_PERIOD()
      this.INIT_MEALS()
    } else {
      this.CHECK_LOGIN()
    }
  },
  methods: {
    ...mapActions([
      'INIT_DATES',
      'INIT_PERIOD',
      'CHECK_LOGIN',
      'INIT_USERINFO',
      'INIT_ADDRLIST',
      'INIT_MEALS'
    ]),
    checkScreen() {
      const windowWidth = window.innerWidth
      if (windowWidth <= 750) {
        this.isScroll = false
        return
      }
      this.isScroll = true
    }
  },
  computed: { ...mapState(['isLogin', 'isScroll']) }
}
</script>

<style>
:root {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
