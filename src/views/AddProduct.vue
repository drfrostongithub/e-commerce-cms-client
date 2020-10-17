<template>
    <section id="add-page" class="row align-items-center">
        <div class="col-6">
            <form @submit.prevent="addProduct">
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
                <button type="submit" class="btn btn-block btn-info">Add This!</button>
            </form>
        </div>
        <div class="col-6">
            <h1 class="text-center">Add New Product</h1>
            <img src="../assets/aset1.png" alt="image" class="w-100">
        </div>
        <div class="col-6" v-if="error" id="error">
          <p class="text-danger text-center">{{error}}</p>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      img_url: '',
      description: '',
      price: '',
      stock: '',
      error: ''
    }
  },
  methods: {
    addProduct () {
      axios({
        method: 'POST',
        url: 'https://fierce-hollows-88977.herokuapp.com/products',
        data: {
          name: this.name,
          img_url: this.img_url,
          description: this.description,
          price: this.price,
          stock: this.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          this.name = ''
          this.img_url = ''
          this.description = ''
          this.price = ''
          this.stock = ''
          this.$router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
          this.error = err.response.data.msg
        })
    }
  }
}
</script>

<style>
#add-page{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#error{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
