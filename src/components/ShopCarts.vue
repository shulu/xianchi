<template>
  <div class="carts-list"
       v-if="cartsDisplay">
    <div class="title">
      <div class="shop-cart">购物车</div>
      <div class="clear"
           @click="CLEAR_CARTS()">
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
    <div class="date-cart-list"
         v-if="cartsCount > 0">
      <div class="date-list"
           v-for="item, index in carts"
           :key="index"
           v-show="item.length > 0">
        <div class="order-date">
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512">
            <rect fill="none"
                  stroke="#000"
                  stroke-linejoin="round"
                  stroke-width="32"
                  x="48"
                  y="80"
                  width="416"
                  height="384"
                  rx="48" />
            <circle cx="296"
                    cy="232"
                    r="24" />
            <circle cx="376"
                    cy="232"
                    r="24" />
            <circle cx="296"
                    cy="312"
                    r="24" />
            <circle cx="376"
                    cy="312"
                    r="24" />
            <circle cx="136"
                    cy="312"
                    r="24" />
            <circle cx="216"
                    cy="312"
                    r="24" />
            <circle cx="136"
                    cy="392"
                    r="24" />
            <circle cx="216"
                    cy="392"
                    r="24" />
            <circle cx="296"
                    cy="392"
                    r="24" />
            <line fill="none"
                  stroke="#000"
                  stroke-linejoin="round"
                  stroke-width="32"
                  stroke-linecap="round"
                  x1="128"
                  y1="48"
                  x2="128"
                  y2="80" />
            <line fill="none"
                  stroke="#000"
                  stroke-linejoin="round"
                  stroke-width="32"
                  stroke-linecap="round"
                  x1="384"
                  y1="48"
                  x2="384"
                  y2="80" />
            <line fill="none"
                  stroke="#000"
                  stroke-linejoin="round"
                  stroke-width="32"
                  x1="464"
                  y1="160"
                  x2="48"
                  y2="160" />
          </svg>
          <div class="content">{{ dateInfo[index] }}</div>
          <div class="line"></div>
        </div>
        <div class="order-meal">
          <div class="period-meal-order"
               v-for="meal,val in item"
               :key="val">
            <div class="period-mark"
                 :class="{
              breakfast: meal.period == 'mor',
              lunch: meal.period == 'noon',
              dinner: meal.period == 'eve'}
              ">
              {{periodMapCn[meal.period]}}</div>
            <div class="period-meal">{{meal.name}}</div>
            <div class="period-meal-del"
                 @click="REMOVE_MEAL(meal.id)">-</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else
         class="none-carts">暂未点餐</div>
    <div class="pos-blank"></div>
  </div>
  <div class="carts">
    <div class="carts-add"
         @click="SHOW_CARTS()">
      <img src="@/assets/images/active-carts.png"
           alt=""
           class="carts-add"
           v-if="cartsCount > 0">
      <img src="@/assets/images/deactive-carts.png"
           alt=""
           class="carts-add"
           v-else>
    </div>
    <div class="carts-count"
         v-if="cartsCount > 0">{{cartsCount}}</div>
    <div class="count">去结算</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ShopCarts',
  methods: {
    ...mapActions(['SHOW_CARTS', 'CLEAR_CARTS', 'REMOVE_MEAL'])
  },
  computed: {
    ...mapState(['carts', 'cartsDisplay', 'cartsCount', 'dateInfo', 'periodMapCn'])
  }
}
</script>

<style lang="scss" scoped>
.carts-list {
  position: fixed;
  bottom: 1.7rem;
  left: 0;
  right: 0;
  z-index: 100;
  width: 30.6rem;
  min-height: 21rem;
  border-radius: 1rem;
  border: 0.3rem solid #f37626;
  background-color: #fff;

  .title {
    height: 4rem;
    // border-bottom: 1px solid lightgray;
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
    .date-list {
      .order-date {
        margin-left: 1rem;
        display: flex;
        flex-direction: row;

        svg {
          width: 1.5rem;
          line-height: 3rem;
          margin-right: 1rem;
        }

        .content {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .line {
          height: 1px;
          margin: 1rem 0.5rem;
          border: 1px solid lightgray;
          opacity: 0.6;
          flex: 2;
        }
      }

      .order-meal {
        .period-meal-order {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin: 1rem 1rem;

          .period-mark {
            float: left;
            width: 1.5rem;
            height: 1.5rem;
            color: #fff;
            border-radius: 1rem;
            margin-left: 2rem;
          }

          .breakfast {
            background: #75d4a9;
          }

          .lunch {
            background-color: #fbcf4d;
          }

          .dinner {
            background-color: #d77c64;
          }

          .period-meal {
            display: inline;
            border-bottom: 1px dashed red;
            line-height: 2rem;
            font-size: 1.7rem;
            font-weight: 800;
          }

          .period-meal-del {
            font-size: 3rem;
            line-height: 1.5rem;
            height: 2rem;
            width: 2rem;
            color: #fff;
            background-color: #f37626;
            border-radius: 1rem;
          }
        }
      }
    }
  }

  .none-carts {
    font-size: 2rem;
    font-weight: 800;
    line-height: 8rem;
  }

  .pos-blank {
    height: 5rem;
  }
}

.carts {
  position: fixed;
  margin: auto;
  bottom: 2rem;
  left: 0;
  right: 0;
  z-index: 101;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 1rem rgba($color: #000000, $alpha: 0.3),
    -0.3rem -0.3rem 1rem rgba($color: #000000, $alpha: 0.3);
  height: 4rem;
  width: 20rem;
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

  .carts-count {
    position: absolute;
    height: 1.5rem;
    line-height: 1.5rem;
    left: 3.6rem;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: #e21e1e;
    color: #fff;
    border-radius: 0.5rem;
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
