<template>
  <div class="profile app-container">
    <nav id="profile_navbar" class="section-nav">
      <a href="#aboutMe" class="section-chip" @click.prevent="scrollTo('aboutMe', 100)">
        {{ languageSetting === 'korean' ? '소개' : 'About Me' }}
      </a>
      <a href="#skillView" class="section-chip" @click.prevent="scrollTo('skillView', 200)">
        {{ languageSetting === 'korean' ? '기술' : 'Skills' }}
      </a>
      <a href="#experienceView" class="section-chip" @click.prevent="scrollTo('experienceView', 300)">
        {{ languageSetting === 'korean' ? '경력' : 'Experiences' }}
      </a>
      <a href="#contactMe" class="section-chip" @click.prevent="scrollTo('contactMe', 400)">
        {{ languageSetting === 'korean' ? '연락처' : 'Contact' }}
      </a>
    </nav>

    <div class="section-stack">
      <AboutMe :language-set="languageSetting" id="aboutMe" class="view_element" />
      <SkillView :language-set="languageSetting" id="skillView" class="view_element" />
      <ExperienceView :language-set="languageSetting" id="experienceView" class="view_element" />
      <ContactMe :language-set="languageSetting" id="contactMe" class="view_element" />
    </div>
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue'
import ContactMe from '@/components/ContactMe.vue'
import SkillView from '@/components/SkillView.vue'
import ExperienceView from '@/components/ExperienceView.vue'
import { smoothScroll } from '@/smooth-scroll.js'

export default {
  name: 'ProfileView',
  props: {
    languageSetting: {
      type: String,
      default: 'english'
    },
  },
  components: {
    AboutMe,
    ContactMe,
    SkillView,
    ExperienceView,
  },
  methods: {
    scrollTo(targetId, duration) {
      smoothScroll(targetId, duration)
    },
  }
}
</script>

<style scoped>
.profile {
  padding-block: clamp(20px, 4vw, 36px);
}
.section-nav {
  position: sticky;
  top: calc(var(--nav-h) + 10px);
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
  padding: 8px;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 999px;
}
.section-chip {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  padding: 7px 16px;
  border-radius: 999px;
  transition: color 0.18s ease, background 0.18s ease;
}
.section-chip:hover {
  color: #fff;
  background: rgba(99, 102, 241, 0.18);
}
.section-stack {
  display: flex;
  flex-direction: column;
  gap: clamp(18px, 3vw, 28px);
}
.view_element {
  scroll-margin-top: calc(var(--nav-h) + 70px);
}

@media (max-width: 575.98px) {
  .section-nav {
    border-radius: var(--radius);
  }
  .section-chip {
    padding: 6px 12px;
    font-size: 0.82rem;
  }
}
</style>
