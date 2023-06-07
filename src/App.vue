<template>
  <div id="app">
    <div>
      <nav id="main-navbar" class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="navbar-brand text-light">AN DAEHYUN</div>
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
                <a class="nav-link" href="#"><router-link to="/project" class="text-decoration-none">Project</router-link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view/>
    <div id="main-navbar" class="text-light p-2">
      EMAIL : andrew.daehyun@gmail.com
      <br>
      MOBILE: +82 01049096281
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
  background-color: #141b21;
}
#main-navbar {
  background-color: rgb(32, 55, 95);
}
.navbar-toggler-icon{
  background-image: url('/src/assets/hamburg_icon.png');
}
.navbar-toggler{
  border: solid 2px 	rgb(115, 119, 121);
}
.navbar-toggler:hover{
  border: solid 2px rgb(94, 94, 110);
}
.navbar-toggler:focus{
  box-shadow: none;
}
nav a {
  font-weight: bold;
  color: white;
}
nav a.router-link-exact-active {
  color: blue; 
}
nav a:hover {
  color: rgb(94, 94, 110);
}
</style>
