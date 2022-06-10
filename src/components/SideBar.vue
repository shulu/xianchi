<template>
  <div class="sidebar">
    <div class="logo">
      <img src="@/assets/logo-short.png" />
    </div>
    <div class="user">
      <div class="user-avatar">
        <img src="https://fakeimg.pl/100x100/?text=xianchi" alt="" />
      </div>
      <div class="user-name">User_XXXXX</div>
    </div>
    <OptionsBoard />
    <div class="order">查看订单</div>
    <div class="order-place">订餐地点</div>
  </div>
</template>

<script>
import OptionsBoard from '@/components/OptionsBoard.vue';

export default {
  name: 'SideBar',
  components: { OptionsBoard }
};
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

  .logo {
    img {
      width: 20rem;
      height: 10rem;
    }
  }

  .user {
    margin: 1rem 0;
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
