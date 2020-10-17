import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    selectedProduct: {},
    loggedIn: false,
    error: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setProduct (state, payload) {
      state.product = payload
    },
    setSelectedProduct (state, payload) {
      state.selectedProduct = payload
    },
    SET_LOGGED_IN (state, payload) {
      state.loggedIn = payload.loggedIn
    },
    SET_ERROR (state, payload) {
      state.error = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        url: 'http://localhost:3000/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data.product)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchProduct (context) {
      const randomId = Math.ceil(Math.random() * this.state.products.length)
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products/' + randomId,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setProduct', data.product)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchProductById (context, id) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setSelectedProduct', data.product)
        })
        .catch(err => {
          if (err.response.status === 404) {
            this.$router.push({ name: 'NotFound' })
          }
        })
    },
    editProduct (context, payload) {
      return axios({
        method: 'PUT',
        url: 'http://localhost:3000/products/' + payload.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          img_url: payload.img_url,
          description: payload.description,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('SET_LOGGED_IN', {
            loggedIn: true
          })
          router.push('/dashboard')
        })
        .catch(err => {
          context.commit('SET_ERROR', err.response.data.msg)
        })
    },
    deleteProduct (context, payload) {
      return axios({
        method: 'DELETE',
        url: 'http://localhost:3000/products/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  }
})
