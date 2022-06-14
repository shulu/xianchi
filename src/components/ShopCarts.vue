<template>
  <div class="carts-list">
    <div class="title">
      <div class="shop-cart">购物车</div>
      <div class="clear">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="512"
             height="512"
             viewBox="0 0 512 512">
          <title>ionicons-v5-e</title>
          <path d="M296,64H216a7.91,7.91,0,0,0-8,8V96h96V72A7.91,7.91,0,0,0,296,64Z"
                style="fill:none" />
          <path d="M432,96H336V72a40,40,0,0,0-40-40H216a40,40,0,0,0-40,40V96H80a16,16,0,0,0,0,32H97L116,432.92c1.42,26.85,22,47.08,48,47.08H348c26.13,0,46.3-19.78,48-47L415,128h17a16,16,0,0,0,0-32ZM192.57,416H192a16,16,0,0,1-16-15.43l-8-224a16,16,0,1,1,32-1.14l8,224A16,16,0,0,1,192.57,416ZM272,400a16,16,0,0,1-32,0V176a16,16,0,0,1,32,0ZM304,96H208V72a7.91,7.91,0,0,1,8-8h80a7.91,7.91,0,0,1,8,8Zm32,304.57A16,16,0,0,1,320,416h-.58A16,16,0,0,1,304,399.43l8-224a16,16,0,1,1,32,1.14Z" />
        </svg>
        <p>
          清空
        </p>
      </div>
    </div>
    <div class="date-cart-list">
      <div>2022-06-15 周三</div>
      <div>
        <div>早</div>
        <div>火腿包+小洲</div>
      </div>
    </div>
  </div>
  <div class="carts">
    <div class="carts-add">
      <img src="@/assets/images/bag.png"
           alt=""
           class="carts-add">
      <p>
        查看商品
      </p>
    </div>
    <div class="count">去结算</div>
  </div>
</template>

<script>
export default {
  name: 'ShopCarts'
}
</script>

<style lang="scss" scoped>
.carts-list {
  position: fixed;
  margin: auto;
  height: 3rem;
  bottom: 1.7rem;
  left: 20rem;
  right: 0;
  z-index: 100;
  width: 40.6rem;
  min-height: 21rem;
  border-radius: 1rem;
  border: 0.3rem solid #f37626;
  background-color: #fff;

  .title {
    height: 4rem;
    border-bottom: 1px solid lightgray;
    .shop-cart,
    .clear {
      line-height: 4rem;
    }

    .shop-cart {
      float: left;
      font-size: 1.8rem;
      font-weight: 800;
      margin-left: 1rem;
    }

    .clear {
      float: right;
      margin-right: 1rem;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: gray;
        margin: 1.2rem 0.5rem;
        float: left;
      }

      p {
        display: inline;
        float: right;
      }
    }
  }

  .date-cart-list {
    padding-bottom: rem;
  }
}

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

    p {
      line-height: 4rem;
      opacity: 0.3;
      font-size: 2rem;
    }

    img {
      float: left;
      width: 5rem;
    }
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
