<template>
  <section id="home-page" class="row">
    <div class="col-4 d-flex align-items" id="home-image">
      <img src="../assets/aset3.png" alt="image" class="w-100" />
    </div>
    <div class="col-8" style="height: 400px">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <img src="../assets/aset1.png" alt="image" style="width: 50px" />
          <h3>Product List</h3>
        </div>
        <button @click="changePage('AddProduct')" class="btn btn-info float-right">Add Product</button>
      </div>
      <ProductsTable :products="products"/>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link :to="{ name: 'RandomProduct' }">
            Random</router-link></li>
          <li class="breadcrumb-item"><router-link :to="{ name: 'AdsProduct' }">
            Ads</router-link></li>
        </ol>
      </nav>
      <router-view />
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import ProductsTable from '../components/ProductsTable.vue'

export default {
  name: 'Home',
  data () {
    return {
      products: []
    }
  },
  components: {
    ProductsTable
  },
  methods: {
    changePage (page) {
      this.$router.push({ name: page })
    },
    fetchProducts () {
      axios({
        url: 'http://localhost:3000/products',
        method: 'GET'
      })
        .then(({ data }) => {
          this.products = data
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  created () {
    this.fetchProducts()
  },
  beforeRouteEnter (to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    const token = 123
    // for login !IMPORTAANT!
    if (token) {
      next()
    } else {
      next({ name: 'AddProduct' })
    }
  }
}
</script>

<style>
</style>
