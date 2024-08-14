<template>
  <div class="profile">
    <nav id="profile_navbar">
      <span class="provile_nav">
        <a href="#aboutMe" class="text-decoration-none m-2" @click.prevent="scrollTo('aboutMe', 100)">About Me</a>
      </span>
      <span class="profile_nav">
        <a href="#skillView" class="text-decoration-none m-2" @click.prevent="scrollTo('skillView', 200)">Skills</a>
      </span>
      <span class="profile_nav">
        <a href="#experienceView" class="text-decoration-none m-2" @click.prevent="scrollTo('experienceView', 300)">Experiences</a>
      </span>
      <span class="profile_nav">
        <a href="#projectView" class="text-decoration-none m-2" @click.prevent="scrollTo('projectView', 400)">Projects</a>
      </span>
      <span class="profile_nav">
        <!-- <span id="language-dropdown" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul id="language-menu" class="dropdown-menu">
            <li><a class="dropdown-item fw-bold" href="#" @click.prevent = "setKorean"><img src="../assets/korflag.png" class="flagImg" alt="">한국어</a></li>
            <li><a class="dropdown-item fw-bold" href="#" @click.prevent = "setEnglish"><img src="../assets/usflag.png" class="flagImg" alt="">English</a></li>
          </ul>
        </span> -->
      </span>
    </nav>
    <div>
      <AboutMe :language-set='languageSetting' id="aboutMe" class="view_element" />
      <SkillView :language-set='languageSetting' id="skillView" class="view_element" />
      <ExperienceView :language-set='languageSetting' id="experienceView" class="view_element" />
      <ProjectView :language-set='languageSetting' id="projectView" class="view_element" />
    </div>
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue'
import SkillView from '@/components/SkillView.vue'
import ExperienceView from '@/components/ExperienceView.vue'
import ProjectView from '@/components/ProjectView.vue'
import { smoothScroll } from '@/smooth-scroll.js';

export default {
  name : 'ProfileView',
  props : {
    languageSetting: {
      type: String,
      default : 'english'
    },
  },
  components: {
    AboutMe,
    SkillView,
    ExperienceView,
    ProjectView,
  },
  methods: {
    scrollTo(targetId, duration) {
      smoothScroll(targetId, duration);
    },
  }
}
</script>

<style scoped>
.view_element{
  margin : 14px;
  border-radius : 6px;
  background-color: rgb(32, 55, 95);
}
/* #language-dropdown{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
}
#language-menu {
  min-width : 120px;
  margin-right : 10px;
  background-color: rgb(94, 94, 110);
} */
#profile_navbar{
  margin-top:6px;
}
.flagImg{
  margin-right: 4px;
}
</style>