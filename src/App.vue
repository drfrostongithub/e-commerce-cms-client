<template>
  <div id="app">
    <Navbar />
    <div
    class="d-flex justfy-content-center align-items-center container"
    style="height: 90vh"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('SET_LOGGED_IN', {
        loggedIn: true
      })
    } else {
      this.$store.commit('SET_LOGGED_IN', {
        loggedIn: false
      })
    }
  }
}
</script>

<style>

</style>
