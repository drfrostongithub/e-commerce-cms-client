<template>
  <div class="home card col-4 mx-auto my-2" id="loginPage">
      <div class="bg"></div>
        <img src="../assets/asetLogin.png" class="card-img-top img-thumbnail " alt="...">
        <div class="card-body d-flex flex-row">
          <form class="col-12" @submit.prevent="login">
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email"
              type="email"
              class="form-control"
              v-model="email" required />
            </div>
            <div class="form-group">
              <label for="caption">Password</label>
              <input type="password"
              class="form-control"
              id="password"
              v-model="password" required />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-info">Submit</button>
            </div>
            <div v-if="error" class="container text-center">
              <p class="text-danger" id="error">{{error}}</p>
            </div>
          </form>
        </div>
      </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  computed: {
    SET_ERROR () {
      return this.$store.state.error
    }
  },
  watch: {
    SET_ERROR () {
      this.error = this.SET_ERROR
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next('/dashboard')
    } else {
      next()
    }
  }
}
</script>

<style>
#loginPage {
  font-family: 'Encode Sans Condensed', sans-serif;
  background-image: linear-gradient(to right top, #99a789, rgba(255, 255, 255, 0.867), #87b2e1);
}
#error {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
