<template>
  <div id="app">
    <div>
      <nav id="main-navbar" class="navbar navbar-expand-md">
        <div class="container-fluid">
          <div class="navbar-brand text-light">DAEHYUN AN</div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/" class="text-decoration-none">Home</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/profile" class="text-decoration-none">Profile</router-link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view/>
    <div id="footer-navbar" class="p-2">
      <div class="footerRow">
        <span class="footer">
          <a href="mailto:andrew.daehyun@gmail.com" class="webLink text-decoration-none text-light">
            <img src="@/assets/email.png" class="contactImg" alt=""> andrew.daehyun@gmail.com
          </a>
        </span>
        <span class="footer">
          <a href="tel:+821049096281" class="webLink text-decoration-none text-light">
            <img src="@/assets/phone.png" class="contactImg" alt=""> +82 1049096281
          </a>
        </span>
      </div>
      <div class="footerRow">
        <span class="footer">
          <a href="https://aturservice.tistory.com/category/Programming%20Language" target="_blank" class="webLink text-decoration-none text-light">
          <img src="@/assets/tistory.png" class="logoImg" alt="">
          Blog
          </a>
          <a href="https://github.com/sergeantmeow" target="_blank" class="webLink text-decoration-none text-light">
            <img src="@/assets/github.png" class="logoImg" alt="">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/daehyun-an-13186a242/" target="_blank" class="webLink text-decoration-none text-light">
            <img src="@/assets/linkedin.png" class="logoImg" alt="">
            LinkedIn
          </a>
        </span>
      </div>
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
#main-navbar{
  background-color: rgb(32, 55, 95);
}
#footer-navbar {
  background-color: rgb(32, 55, 95);
  font-size : calc(4px + 1vw);
  
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
  text-shadow: 0px 0px 8px white;
}
nav a:hover {
  color: rgb(94, 94, 110);
}
.footer{
  margin : 4px;
}
.footerRow{
  margin-bottom: 5px;
}
.webLink{
  margin : 4px;
}
.logoImg{
  width : calc(4px + 1.5vw);
}
.contactImg{
  width : calc(1px + 1.5vw);
}
@media (max-width: 767.98px) {
  .nav-link{
    font-size: 4vw;
    text-shadow: none;
  }
  .logoImg{
    width : calc(4px + 3.5vw);
  }
  .contactImg{
    width : calc(4px + 3.5vw);
  }
  .footer{
    font-size: 3.5vw;
  }
}
</style>
