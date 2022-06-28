<template>
  <SideBar v-show="isScroll" />
  <SideBarSmall v-show="!isScroll" />
  <div class="carts-list"
       :class="{cartslistbig:isScroll,cartslistsmall:!isScroll}">
    <div class="title">
      购物车
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
              breakfast: meal.period == '1',
              lunch: meal.period == '2',
              dinner: meal.period == '3'}
              ">
              {{periodMapCn[meal.period]}}</div>
            <div class="period-meal">{{meal.name}}</div>
            <div class="period-meal-del"
                 @click="REMOVE_MEAL(meal.id)">-</div>
          </div>
        </div>
        <div class="order-button"
             @click="PAY_ORDER()">确认下单</div>
      </div>
    </div>
    <div v-else
         class="none-carts">暂未点餐</div>
    <div class="pos-blank"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SideBar from '@/components/SideBar.vue'
import SideBarSmall from '@/components/SideBarSmall.vue'

export default {
  name: 'ListOrder',
  data() {
    return {
      cartsCount: 0,
      carts: null
    }
  },
  created() {
    console.log(this.$route.params.carts)
    if (this.$route.params.carts) {
      let carts = JSON.parse(this.$route.params.carts)
      let cartsCount = 0
      carts.map((cart) => {
        cartsCount = cartsCount + cart.length
      })
      if (cartsCount < 1) {
        console.log('购物车为空', carts)
        this.$router.push({ name: 'home' })
      } else {
        console.log('parse carts', carts)
        this.cartsCount = cartsCount
        this.carts = carts
      }
    } else {
      console.log('购物车为空')
      this.$router.push({ name: 'home' })
    }
  },
  methods: {
    ...mapActions(['PAY_ORDER'])
  },
  computed: {
    ...mapState(['isScroll', 'periodMapCn', 'dateInfo', 'orderInfo'])
  },
  components: {
    SideBar,
    SideBarSmall
  }
}
</script>


<style lang="scss" scoped>
.carts-list {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 100;
  width: 32.6rem;
  min-height: 21rem;
  border-radius: 1rem;
  border: 0.3rem solid #f37626;
  background-color: #fff;

  .title {
    height: 4rem;
    line-height: 4rem;
    font-size: 2rem;
    font-weight: 600;
    border-bottom: 0.3rem solid #f37626;
  }

  .date-cart-list {
    margin-top: 2rem;
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

  .order-button {
    height: 4rem;
    line-height: 4rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: #fff;
    background-color: #f37626;
    margin: 1rem 3rem;
    border-radius: 1rem;
  }
}

.cartslistsmall {
  margin-left: 6rem;
}

.cartslistbig {
  margin-left: 22rem;
}
</style>