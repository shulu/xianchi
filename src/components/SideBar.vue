<template>
  <div class="sidebar">
    <div class="logo">
      <img src="@/assets/logo-short.png" />
    </div>
    <div class="user">
      <div class="user-avatar">
        <img :src="avatarUrl"
             alt="" />
      </div>
      <div class="user-name">{{this.UserInfo.ufanUser.nickName}}</div>
      <div class="position">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="512"
             height="512"
             viewBox="0 0 512 512">
          <title>ionicons-v5-n</title>
          <path d="M256,32C167.67,32,96,96.51,96,176c0,128,160,304,160,304S416,304,416,176C416,96.51,344.33,32,256,32Zm0,224a64,64,0,1,1,64-64A64.07,64.07,0,0,1,256,256Z" />
        </svg>
        <div v-for="item, index in this.addrList.positionList"
             :key="index"
             v-show="item.id == this.addrList.positionId"
             class="position-name">
          {{item.name}}
        </div>
      </div>
    </div>
    <OptionsBoard />
    <ScrollModal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OptionsBoard from '@/components/OptionsBoard.vue'
import ScrollModal from '@/components/ScrollModal.vue'

export default {
  name: 'SideBar',
  components: { OptionsBoard, ScrollModal },
  data() {
    return {
      avatarUrl: ''
    }
  },
  created() {
    this.initAvarta()
  },
  methods: {
    initAvarta() {
      this.avatarUrl = 'https://img.youfantech.cn/' + this.UserInfo.ufanUser.headImgUrl
    }
  },
  computed: { ...mapState(['UserInfo', 'addrList']) }
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  width: 20rem;
  top: 0;
  left: 0;
  bottom: 0;

  border-right: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  box-shadow: 0 0.3rem 1rem rgba($color: #000000, $alpha: 1);
  background-color: #fff;

  .logo {
    display: none;
    img {
      width: 20rem;
      height: 10rem;
    }
  }

  .user {
    margin: 1rem 0;

    .user-avatar {
      img {
        width: 15rem;
        height: 15rem;
        border-radius: 1rem;
      }
    }

    .user-name {
      font-size: 1.5rem;
      font-weight: 500;
    }

    .position {
      margin: 0.5rem 0;
      svg {
        width: 3rem;
        height: 3rem;
        float: left;
        fill: #f37626;
      }

      .position-name {
        font-size: 1.5rem;
        line-height: 3rem;
      }
    }
  }

  .order,
  .order-place {
    width: 8rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.5rem;
    margin: 1rem 0;
    border: 1px solid red;
    border-radius: 1rem;
  }
}
</style>
