<template>
  <div class="media mb-5" v-if="product.id">
    <img :src="product.img_url" alt="poster" class="mr-3" width="150">
    <div class="media-body">
      <h5>{{ product.name }}</h5>
      <p>USD {{ product.price }}</p>
      <p class="text-info">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RandomProduct',
  data () {
    return {
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  methods: {
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>

<style>

</style>
