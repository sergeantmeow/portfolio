<template>
  <div class="projects-view app-container">
    <ProjectView :language-set="languageSetting" />
  </div>
</template>

<script>
import ProjectView from '@/components/ProjectView.vue'

export default {
  name: 'ProjectsView',
  props: {
    languageSetting: {
      type: String,
      default: 'english'
    },
  },
  components: {
    ProjectView,
  },
}
</script>

<style scoped>
.projects-view {
  padding-block: clamp(24px, 5vw, 48px);
}
</style>
