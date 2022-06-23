<template>
  <GoodsModal />
  <ShopCarts />
</template>

<script>
import GoodsModal from '@/components/GoodsNew.vue'
import ShopCarts from '@/components/ShopCarts.vue'

export default {
  name: 'MainBoard',
  components: {
    GoodsModal,
    ShopCarts
  }
}
</script>
