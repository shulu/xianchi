<template>
  <div class="scroll">
    <img :src="scrollImg"
         alt=""
         @click="scrollBar()">
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ScrollModal',
  data() {
    return {
      scrollImg: require('@/assets/arrow-back-circle-outline.svg')
    }
  },
  created() {
    if (this.isScroll) {
      this.scrollImg = require('@/assets/arrow-back-circle-outline.svg')
    } else {
      this.scrollImg = require('@/assets/arrow-forward-circle-outline.svg')
    }
  },
  methods: {
    ...mapActions(['SCROLL_BAR']),
    scrollBar() {
      this.SCROLL_BAR()
      if (this.isScroll) {
        this.scrollImg = require('@/assets/arrow-forward-circle-outline.svg')
      } else {
        this.scrollImg = require('@/assets/arrow-back-circle-outline.svg')
      }
    }
  },
  computed: {
    ...mapState(['isScroll'])
  }
}
</script>

<style lang="scss" scoped>
.scroll {
  position: fixed;
  bottom: 0;
  left: 0;

  height: 4rem;
  width: inherit;

  border-top: 1px solid lightgray;
  box-shadow: 0rem 0rem 1rem rgba($color: #000000, $alpha: 1);

  background-color: #fff;

  img {
    height: 4rem;
    width: 4rem;
    float: right;
  }
}
</style>