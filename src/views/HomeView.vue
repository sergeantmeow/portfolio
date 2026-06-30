<template>
  <div class="home">
    <section class="hero app-container">
      <div class="hero-photo">
        <div class="hero-photo-glow"></div>
        <img id="home_face_photo" alt="Daehyun An" src="../assets/memoji2.png">
      </div>
      <div class="hero-message">
        <HomeMessage :languageSetting="languageSetting" />
      </div>
    </section>
  </div>
</template>

<script>
import HomeMessage from '@/components/HomeMessage.vue'

export default {
  name: 'HomeView',
  props: {
    languageSetting: {
      type: String,
      default: 'english'
    }
  },
  components: {
    HomeMessage
  }
}
</script>

<style scoped>
.home {
  width: 100%;
}
.hero {
  display: grid;
  grid-template-columns: 5fr 7fr;
  align-items: center;
  gap: clamp(20px, 4vw, 56px);
  min-height: calc(100vh - var(--nav-h) - 120px);
  padding-block: clamp(28px, 6vw, 72px);
}
.hero-photo {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-photo-glow {
  position: absolute;
  inset: 8% 8% 8% 8%;
  border-radius: 50%;
  background: var(--accent-grad);
  filter: blur(60px);
  opacity: 0.35;
  z-index: 0;
}
#home_face_photo {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 380px;
  height: auto;
  filter: drop-shadow(0 24px 40px rgba(0, 0, 0, 0.45));
}
.hero-message {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

@media (max-width: 767.98px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 8px;
    min-height: 0;
  }
  #home_face_photo {
    max-width: 240px;
  }
  .hero-message {
    justify-content: center;
    text-align: center;
  }
}
</style>
