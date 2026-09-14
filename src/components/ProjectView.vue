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
          title: 'HUB',
          emoji: '🎰',
          period: '2025',
          role: 'Product Planner',
          roleKor: '기획자',
          gradient: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
          descEng: 'A casino VIP journey management app that tracks and orchestrates the end-to-end guest experience. I joined as the product planner, defining features and user flows.',
          descKor: '카지노 VIP 고객의 여정을 관리하는 앱으로, 고객 경험을 처음부터 끝까지 추적하고 관리합니다. 기획자로 참여하여 기능과 사용자 흐름을 설계했습니다.',
          tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'GraphQL'],
          repo: '',
          demo: '',
        },
        {
          title: 'Oollim',
          emoji: '🧳',
          period: '2025',
          role: 'Developer & Planner',
          roleKor: '개발자 · 기획자',
          gradient: 'linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)',
          descEng: 'A Korea travel community and platform for planning, managing, and sharing itineraries. A two-person side project where I worked as developer and planner alongside a PM.',
          descKor: '한국 여행 커뮤니티이자 일정을 계획·관리·공유하는 플랫폼입니다. PM 1명과 함께한 사외 2인 프로젝트로, 개발자 겸 기획자로 참여했습니다.',
          tags: ['Vue 3', 'Django REST Framework', 'Python'],
          repo: '',
          demo: '',
        },
        {
          title: 'AML',
          emoji: '🛡️',
          period: '2025',
          role: 'Junior Developer',
          roleKor: '주니어 개발자',
          gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
          descEng: 'An anti-money-laundering (AML) application. As a junior developer, I built the REST API logic that enables integration with external systems.',
          descKor: '자금세탁방지(AML) 애플리케이션입니다. 주니어 개발자로 참여하여 타 시스템 연동을 위한 REST API 로직을 개발했습니다.',
          tags: ['Java', 'REST API', 'Tomcat'],
          repo: '',
          demo: '',
        },
        {
          title: 'Casino QR-Pass',
          emoji: '📱',
          period: '2025',
          role: 'Sole Planner & Developer',
          roleKor: '단독 기획 · 개발',
          gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
          descEng: 'A mobile web app that streamlines casino entry and member sign-up. I was the sole planner and sole developer, designing and building the entire experience.',
          descKor: '카지노 입장과 회원가입을 최적화한 모바일 웹입니다. 단독 기획자이자 단독 개발자로서 전체 경험을 설계하고 구현했습니다.',
          tags: ['Vue 3', 'Vite', 'TypeScript', 'Node.js', 'Express'],
          repo: '',
          demo: '',
        },
        {
          title: 'Hotel Reservation for Employees & Friends',
          emoji: '🏨',
          period: '2025',
          role: 'Sole Planner & Developer',
          roleKor: '단독 기획 · 개발',
          gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
          descEng: 'A room reservation web app for employees and their acquaintances. I was the sole planner and sole developer, handling both product design and full-stack development.',
          descKor: '임직원 및 지인을 위한 객실 예약 웹앱입니다. 단독 기획자이자 단독 개발자로서 제품 기획과 풀스택 개발을 모두 담당했습니다.',
          tags: ['Vue 3', 'Django', 'Python', 'SQLite'],
          repo: '',
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
