<template>
  <div>
      <nav class="navbar sticky-top navbar-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="#">
        <img src="https://www.flaticon.com/svg/static/icons/svg/332/332507.svg" width="30" height="30" class="d-inline-block align-top" alt="">
        Kommerce Millenial Shop
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active" v-if="loggedIn === true"><router-link to="/dashboard">
            <a class="nav-link">Dashboard</a></router-link>
          </li>
          <li class="nav-item active" v-if="loggedIn === true"><router-link to="/login"><!-- buggy -->
            <a class="nav-link" @click="logout">Logout</a></router-link>
          </li>
          <li class="nav-item active" v-else-if="loggedIn === false"><router-link to="/login">
            <a class="nav-link">Login</a></router-link>
          </li>
          <li class="nav-item"><router-link to="/about">
            <a class="nav-link">About</a></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Created by : drfrost</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    loggedIn () {
      return this.$store.state.loggedIn
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('SET_LOGGED_IN', {
        loggedIn: false
      })
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
