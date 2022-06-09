<template>
  <div class="sidebar">
    <div class="logo">
      <img src="https://fakeimg.pl/200x50/?text=xianchi">
    </div>
    <div class="user">
      <div class="user-avatar">
        <img src="https://fakeimg.pl/100x100/?text=xianchi"
             alt="">
      </div>
      <div class="user-name">
        User_XXXXX
      </div>
    </div>
    <div class="order">
      查看订单
    </div>
    <div class="order-place">
      订餐地点
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  width: 20rem;
  top: 0;
  left: 0;
  bottom: 0;

  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

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
