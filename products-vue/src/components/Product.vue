<template>
  <div class='product'>
    <p style="font-size:1vw"> Product details </p>
    <div v-if='product.attributes'>
    <p style="font-weight: bold;font-size:2vw">
      {{product.attributes.name}}
    </p>
    <p style="font-weight: bold;font-size:1vw">
      {{'$' + product.attributes.sale_price}}
    </p>
    <p style="text-decoration: line-through;color: lightgrey;font-size:1vw">
     {{'$' + product.attributes.price}}
    </p>
  </div>
  <p v-else>
    'Loading'
  </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Product from '../models/Product.js'

export default {
  name: 'ProductPage',
  data: () => {
    return {
      product: {}
    }
  },
  async mounted () {
    let response = await Product.find(this.$route.params.productId)
    this.product = response.data
  }
}
</script>
