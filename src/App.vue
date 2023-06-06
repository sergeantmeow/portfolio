<template>
  <div id="app">
    <nav>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="navbar-brand">AN</div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/" class="text-decoration-none">Home</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/profile" class="text-decoration-none">Profile</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/contact" class="text-decoration-none">Contact</router-link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #141b21;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #2154d4;
}
</style>
