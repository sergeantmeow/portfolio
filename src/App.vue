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
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/skill" class="text-decoration-none">Skill</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/experience" class="text-decoration-none">Experience</router-link></a>
              </li>
              <li id="language-dropdown" class="nav-item dropdown">
                <a id="language-dropdown-button" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ language }}
                </a>
                <ul id="language-menu" class="dropdown-menu">
                  <li><a class="dropdown-item fw-bold" href="#" @click.prevent = "setKorean"><img src="@/assets/korflag.png" class="flagImg" alt="">한국어</a></li>
                  <li><a class="dropdown-item fw-bold" href="#" @click.prevent = "setEnglish"><img src="@/assets/usflag.png" class="flagImg" alt="">English</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view :languageSetting="languageSetting"/>
    <div id="footer-navbar" class="p-2">
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
      <div class="footerRow">
        <div class="footer">
          Copyright © Daehyun An All Rights Reserved.<br>
          Designed by Daehyun An.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
      return{
      languageSetting : 'english',
      language : 'Language',
      }
    },
    methods: {
      setEnglish(){
        this.languageSetting = 'english'
        this.language = 'Language'
      },
      setKorean(){
        this.languageSetting = 'korean'
        this.language = '언어'
      },

  }
}
</script>

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
#language-dropdown{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#language-dropdown-button{
  color: white;
}
#language-dropdown-button:hover{
  color: rgb(94, 94, 110);
}
#language-menu {
  min-width : 120px;
  margin-right : 10px;
  background-color: rgb(94, 94, 110);
}
#profile_navbar{
  margin-top:6px;
}
.flagImg{
  margin-right: 4px;
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
    font-size: 2vw;
  }
}
</style>
