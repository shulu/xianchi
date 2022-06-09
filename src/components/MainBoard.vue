<template>
  <OptionsBoard />
  <GoodsModal />
  <ShopCarts />
</template>

<script>
import OptionsBoard from '@/components/OptionsBoard.vue'
import GoodsModal from '@/components/Goods.vue'
import ShopCarts from '@/components/ShopCarts.vue'

export default {
  name: 'MainBoard',
  components: {
    OptionsBoard,
    GoodsModal,
    ShopCarts
  }
}
</script>
