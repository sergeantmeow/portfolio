<template>
  <section class="project section-card">
    <h3 class="section-title">{{ languageSet === 'korean' ? '프로젝트' : 'Projects' }}</h3>
    <div class="project-grid">
      <Project
        v-for="project in projects"
        :key="project.title"
        :project="project"
        :language-set="languageSet"
      />
    </div>
  </section>
</template>

<script>
import Project from '@/components/Project.vue'

export default {
  name: 'projectView',
  components: {
    Project,
  },
  props: {
    languageSet: String
  },
  data() {
    return {
      projects: [
        {
          title: 'Portfolio Website',
          emoji: '🌐',
          period: '2024',
          gradient: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
          descEng: 'A responsive personal portfolio built with Vue and Bootstrap, featuring bilingual (KR/EN) content and a modern dark theme.',
          descKor: 'Vue와 Bootstrap으로 제작한 반응형 개인 포트폴리오. 한국어/영어 이중 언어와 모던 다크 테마를 지원합니다.',
          tags: ['Vue', 'Bootstrap', 'Vue Router'],
          repo: 'https://github.com/sergeantmeow',
          demo: '',
        },
        {
          title: 'Hotel Inventory Tool',
          emoji: '📦',
          period: '2023',
          gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
          descEng: 'A purchasing & inventory helper that integrates requisitions and generates reports, inspired by my hospitality experience.',
          descKor: '호텔 구매 경험을 바탕으로 만든 발주·재고 관리 도구. 발주 요청을 취합하고 보고서를 생성합니다.',
          tags: ['Python', 'MySQL', 'Pandas'],
          repo: 'https://github.com/sergeantmeow',
          demo: '',
        },
        {
          title: 'Algorithm Visualizer',
          emoji: '🧠',
          period: '2023',
          gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
          descEng: 'An interactive web app that visualizes BFS, DFS and sorting algorithms step by step to make learning intuitive.',
          descKor: 'BFS, DFS, 정렬 알고리즘의 동작 과정을 단계별로 시각화하여 직관적인 학습을 돕는 인터랙티브 웹 앱입니다.',
          tags: ['JavaScript', 'HTML Canvas', 'CSS'],
          repo: 'https://github.com/sergeantmeow',
          demo: '',
        },
      ],
    }
  },
}
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(16px, 2.5vw, 24px);
}

@media (max-width: 991.98px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 575.98px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
