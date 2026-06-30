<template>
  <div class="contact-view app-container">
    <ContactMe :language-set="languageSetting" />
  </div>
</template>

<script>
import ContactMe from '@/components/ContactMe.vue'

export default {
  name: 'ContactView',
  props: {
    languageSetting: {
      type: String,
      default: 'english'
    },
  },
  components: {
    ContactMe,
  },
}
</script>

<style scoped>
.contact-view {
  padding-block: clamp(24px, 5vw, 48px);
}
</style>
