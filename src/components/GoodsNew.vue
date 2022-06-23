<template>
  <div class="goods-list"
       :class="{goodslistgreat:isScroll, goodslistsmall:!isScroll}">
    <div class="goods-grid"
         v-for="item, index in goodsList"
         :key="index">
      <div class="goods-pic">
        <img :src="'https://img.youfantech.cn/' +item.goodImgUrl"
             alt="" />
      </div>
      <div class="goods-info">
        <div class="goods-name">{{item.goodName}}</div>
        <div class="goods-hot">辣度{{item.hotDegree}}</div>
        <div class="add-cart"
             @click="addToCart(index, idx, item.goodName, item.hotDegree, item.merchantStoreId, item.goodImgUrl)">+</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'GoodsNew',
  data() {
    return {}
  },
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
    ...mapState(['goodsList', 'carts', 'nowPeriod', 'isScroll'])
  }
}
</script>

<style lang="scss" scoped>
.goods-list {
  margin-top: 5rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;

  .goods-grid {
    border: 1px solid #e2e9f9;
    // border-top-left-radius: 1rem;
    // border-top-right-radius: 1rem;
    border-radius: 1rem;
    .goods-pic {
      img {
        width: 100%;
        height: 14rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
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

    .goods-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
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
  }
}

.goodslistgreat {
  margin-left: 22rem;
}

.goodslistsmall {
  margin-left: 8rem;
}
</style>