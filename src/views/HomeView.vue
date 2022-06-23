<template>
  <SideBar v-show="isScroll" />
  <SideBarSmall v-show="!isScroll" />
  <MainBoard />
</template>

<script>
import { mapState, mapActions } from 'vuex'

// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import SideBarSmall from '@/components/SideBarSmall.vue'
import MainBoard from '@/components/MainBoard.vue'

export default {
  name: 'HomeView',
  created() {
    this.CHECK_LOGIN(),
      this.INIT_USERINFO(),
      this.INIT_ADDRLIST(),
      this.INIT_DATES(),
      this.INIT_PERIOD(),
      this.INIT_MEALS()
  },
  methods: {
    ...mapActions([
      'INIT_DATES',
      'INIT_PERIOD',
      'CHECK_LOGIN',
      'INIT_USERINFO',
      'INIT_ADDRLIST',
      'INIT_MEALS'
    ])
  },
  computed: {
    ...mapState(['UserInfo', 'isScroll'])
  },
  components: {
    SideBar,
    SideBarSmall,
    MainBoard
  }
}
</script>
