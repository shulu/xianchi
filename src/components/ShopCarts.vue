<template>
  <div class="carts">
    <img src="https://fakeimg.pl/100x30/?text=xianchi"
         alt=""
         class="carts-add">
    <div class="count">去结算</div>
  </div>
</template>

<script>
export default {
  name: 'ShopCarts'
}
</script>

<style lang="scss" scoped>
.carts {
  position: fixed;
  margin: auto;
  bottom: 2rem;
  left: 20rem;
  right: 0;
  z-index: 101;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 1rem rgba($color: #000000, $alpha: 0.3),
    -0.3rem -0.3rem 1rem rgba($color: #000000, $alpha: 0.3);
  height: 4rem;
  width: 40rem;
  background-color: aliceblue;

  display: flex;
  justify-content: space-between;

  .carts-add {
    flex: 2;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  .count {
    flex: 1;
    height: 100%;
    line-height: 4rem;
    background-color: #f37626;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    color: #fff;
  }
}
</style>
