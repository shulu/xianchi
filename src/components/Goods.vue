<template>
  <div class="goods-list">
    <div class="goods-grid"
         v-for="item, index in goodsList"
         :key="index">
      <div class="goods"
           v-for="good,idx in item"
           :key="idx">
        <div class="goods-pic">
          <img :src="'https://img.youfantech.cn/' +good.goodImgUrl"
               alt="" />
        </div>
        <div class="goods-info">
          <div class="goods-name">{{good.goodName}}</div>
          <div class="goods-hot">辣度{{good.hotDegree}}</div>
          <div class="add-cart"
               @click="addToCart(index, idx, good.goodName, good.hotDegree, good.merchantStoreId, good.goodImgUrl)">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'GoodsModal',
  methods: {
    ...mapActions(['ADD_CART']),
    addToCart(index, idx, name, hot, shop, pic) {
      let info = {
        id: this.nowPeriod + index + idx,
        name: name,
        hot: hot,
        shop: shop,
        img: pic,
        period: this.nowPeriod
      }
      this.ADD_CART(info)
    }
  },
  computed: {
    ...mapState(['goodsList', 'carts', 'nowPeriod'])
  }
}
</script>

<style lang="scss" scoped>
.goods-list {
  margin-top: 1rem;
  margin-left: 22rem;
  margin-right: 3rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  width: 80%;

  .goods-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3rem;
  }
  .goods {
    display: flex;
    justify-content: center;
    align-items: center;

    .goods-info {
      height: 100%;
      margin: 0 1rem;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      .goods-name,
      .goods-hot {
        flex: 2;
        font-size: 1.3rem;
        font-weight: 800;
      }

      .add-cart {
        flex: 1;
        border: 1px dashed f37626;
        border-radius: 0.5rem;
        font-size: 2.5rem;
      }

      .add-cart:hover {
        background-color: #f37626;
        color: #fff;
      }
    }

    .goods-pic {
      position: relative;
      img {
        width: 12rem;
        height: 12rem;
      }
    }

    .goods-pic:hover {
      animation: 1.5s scale-big;
      transform: scale(1.5);
      z-index: 101;
    }

    @keyframes scale-big {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(1.5);
      }
    }
  }
}
</style>
