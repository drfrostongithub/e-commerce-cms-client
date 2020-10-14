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
          <li class="nav-item active"><router-link to="/dashboard">
            <a class="nav-link">Home</a></router-link>
          </li>
          <li class="nav-item"><router-link to="/about">
            <a class="nav-link">About</a></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
    <div
    class="d-flex justfy-content-center align-items-center container"
    style="height: 90vh"
    >
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
