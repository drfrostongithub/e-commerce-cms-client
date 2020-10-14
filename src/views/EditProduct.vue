<template>
   <section id="edit-page" class="row align-items-center">
        <div class="col-6">
            <form @submit.prevent="editProduct">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter product name here"
                    autocomplete="off"
                    v-model="name"
                  >
                </div>
                <div class="form-group">
                  <label for="img_url">Image Url</label>
                  <input
                    type="text"
                    class="form-control"
                    id="img_url"
                    placeholder="Copy pasta your url image here"
                    autocomplete="off"
                    v-model="img_url"
                  >
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <input
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="What are you selling ?"
                    autocomplete="off"
                    v-model="description"
                  >
                </div>
                <div class="form-group">
                  <label for="price">Price</label>
                  <input
                    type="text"
                    class="form-control"
                    id="price"
                    placeholder="How much it costs?"
                    autocomplete="off"
                    v-model="price"
                  >
                </div>
                <div class="form-group">
                  <label for="stock">Stock</label>
                  <input
                    type="text"
                    class="form-control"
                    id="stock"
                    placeholder="How much you have?"
                    autocomplete="off"
                    v-model="stock"
                  >
                </div>
                <button type="submit" class="btn btn-block btn-info">Edit This!</button>
            </form>
        </div>
        <div class="col-6">
            <h1 class="text-center">Edit New Product</h1>
            <img src="../assets/aset1.png" alt="image" class="w-100">
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditProduct',
  data () {
    return {
      name: '',
      img_url: '',
      description: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    fetchProductById () {
      const { id } = this.$route.params
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products/' + id
      })
        .then(({ data }) => {
          this.name = data.name
          this.img_url = data.img_url
          this.description = data.description
          this.price = data.price
          this.stock = data.stock
        })
        .catch(err => {
          if (err.response.status === 404) {
            this.$router.push({ name: 'NotFound' })
          }
        })
    },
    editProduct () {
      const { id } = this.$route.params
      axios({
        method: 'PUT',
        url: 'http://localhost:3000/products/' + id,
        data: {
          name: this.name,
          img_url: this.img_url,
          description: this.description,
          price: this.price,
          stock: this.stock
        }
      })
        .then(({ data }) => {
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchProductById()
  }
}
</script>

<style>

</style>
