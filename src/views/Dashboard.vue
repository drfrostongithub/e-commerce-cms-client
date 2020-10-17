<template>
  <section id="home-page" class="row">
    <div class="col-4 d-flex align-items" id="home-image">
      <img src="../assets/aset3.png" alt="image" class="w-100 h-100" />
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
            Random Product</router-link></li>
          <!-- <li class="breadcrumb-item"><router-link :to="{ name: 'AdsProduct' }">
            Ads</router-link></li> -->
        </ol>
      </nav>
      <router-view />
    </div>
  </section>
</template>

<script>
import ProductsTable from '../components/ProductsTable.vue'

export default {
  name: 'Dashboard',
  data () {
    return {
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  components: {
    ProductsTable
  },
  methods: {
    changePage (page) {
      this.$router.push({ name: page })
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>

<style>
.breadcrumb{
  font-family: 'Encode Sans Condensed', sans-serif;
}
</style>
