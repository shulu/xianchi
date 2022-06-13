<template>
  <SideBar />
  <MainBoard />
</template>

<script>
import { mapActions } from 'vuex'

// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import MainBoard from '@/components/MainBoard.vue'

export default {
  name: 'HomeView',
  created() {
    this.INIT_DATES(), this.INIT_PERIOD()
  },
  methods: {
    ...mapActions(['INIT_DATES', 'INIT_PERIOD'])
  },
  components: {
    SideBar,
    MainBoard
  }
}
</script>
