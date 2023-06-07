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
    <div id="main-navbar" class="p-2">
      <span class="footer">
        EMAIL: andrew.daehyun@gmail.com
      </span>
      <span class="footer">
        MOBILE: +82 01049096281
      </span>
      <span class="footer">
        <a href="https://aturservice.tistory.com/category/Programming%20Language" target="_blank" class="webLink text-decoration-none text-light">
        <img src="@/assets/tistory.png" class="logoImg" alt="">
        Blog
      </a>
      <a href="https://github.com/sergeantmeow" target="_blank" class="webLink text-decoration-none text-light">
        <img src="@/assets/github.png" class="logoImg" alt="">
        GitHub
      </a>
      </span>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
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
.footer{
  margin : 4px;
}
.webLink{
  margin : 4px;
}
.logoImg{
  width : 30px;
}
</style>
