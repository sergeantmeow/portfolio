<template>
  <div class="profile">
    <nav id="profile_navbar">
      <span class="provile_nav">
        <a href="" class="text-decoration-none m-2">About Me</a>
      </span>
      <span class="profile_nav">
        <a href="" class="text-decoration-none m-2">Skill</a>
      </span>
      <span class="profile_nav">
        <a href="" class="text-decoration-none m-2">Experience</a>
      </span>
      <span class="profile_nav">
        <div id="language-dropdown" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul id="language-menu" class="dropdown-menu">
            <li><a class="dropdown-item fw-bold" href="#" ><img src="../assets/korflag.png" alt="">한국어</a></li>
            <li><a class="dropdown-item fw-bold" href="#" ><img src="../assets/usflag.png" alt="">English</a></li>
          </ul>
        </div>
      </span>
    </nav>
    <div>
      <AboutMe />
    </div>
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue'

export default {
  name : 'ProfileView',
  components: {
    AboutMe
  }
}
</script>

<style scoped>
#language-dropdown{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#language-menu {
  min-width : 120px;
  margin-right : 10px;
  text-align: center;
  background-color: rgb(94, 94, 110);
}
</style>