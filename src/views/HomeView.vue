<template>
  <SideBar />
  <MainBoard />
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import MainBoard from '@/components/MainBoard.vue'

export default {
  name: 'HomeView',
  components: {
    SideBar,
    MainBoard
  }
}
</script>
