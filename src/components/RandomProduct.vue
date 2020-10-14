<template>
  <div class="media mb-5" v-if="product.id">
    <img :src="product.img_url" alt="poster" class="mr-3" width="150">
    <div class="media-body">
      <h5>{{ product.name }}</h5>
      <p>{{ product.price }}</p>
      <p>{{ length }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
let length = 0

export default {
  name: 'RandomProduct',
  data () {
    return {
      product: {}
    }
  },
  methods: {
    fetchTotalProduct () {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products'
      })
        .then(({ data }) => {
          console.log(data)
          length = data
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProduct () {
      const randomId = Math.ceil(Math.random() * Number(length))
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products/' + randomId
      })
        .then(({ data }) => {
          this.product = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchProduct()
    this.fetchTotalProduct()
  }
}
</script>

<style>

</style>
