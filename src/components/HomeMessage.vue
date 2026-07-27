<template>
  <div class="homeMessage">
    <span class="hero-badge">{{ copy.badge }}</span>
    <h1 id="greeting">
      {{ copy.hi }}<br>
      {{ copy.imA }} <span class="grad-text">Daehyun</span>,<br>
      {{ copy.role }}
    </h1>
    <p id="level">{{ copy.level1 }}</p>
    <p id="level" class="muted">{{ copy.level2 }}</p>
    <div class="hero-actions">
      <router-link to="/profile" class="btn-primary-grad">{{ copy.cta }}</router-link>
      <router-link to="/project" class="btn-ghost">{{ copy.cta2 }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMessage',
  props: {
    languageSetting: {
      type: String,
      default: 'english'
    }
  },
  computed: {
    copy() {
      if (this.languageSetting === 'korean') {
        return {
          badge: 'IT 개발 · 운영 엔지니어',
          hi: '안녕하세요,',
          imA: '저는',
          role: '웹 개발자입니다',
          level1: '호스피탈리티 업계에서의',
          level2: '8년 경력을 바탕으로 일합니다',
          cta: '프로필 보기',
          cta2: '프로젝트 보기'
        }
      }
      return {
        badge: 'IT Development · Operations Engineer',
        hi: 'Hi,',
        imA: "I'm",
        role: 'a web developer',
        level1: 'with 8 years of experience',
        level2: 'in the hospitality industry',
        cta: 'View Profile',
        cta2: 'View Projects'
      }
    }
  }
}
</script>

<style scoped>
.homeMessage {
  width: 100%;
}
.hero-badge {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--accent-2);
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid rgba(34, 211, 238, 0.25);
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 18px;
}
#greeting {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: clamp(2rem, 5.5vw, 3.4rem);
  line-height: 1.1;
  margin: 0 0 18px;
}
.grad-text {
  background: var(--accent-grad);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
#level {
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  margin: 0;
  line-height: 1.5;
}
#level.muted {
  color: var(--text-muted);
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}
.btn-primary-grad,
.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}
.btn-primary-grad {
  color: #fff;
  background: var(--accent-grad);
  box-shadow: 0 12px 24px -10px rgba(99, 102, 241, 0.9);
}
.btn-primary-grad:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 30px -10px rgba(99, 102, 241, 0.9);
}
.btn-ghost {
  color: var(--text);
  border: 1px solid var(--border-strong);
  background: transparent;
}
.btn-ghost:hover {
  transform: translateY(-2px);
  background: rgba(148, 163, 184, 0.08);
}

@media (max-width: 767.98px) {
  .hero-actions {
    justify-content: center;
  }
}
</style>
