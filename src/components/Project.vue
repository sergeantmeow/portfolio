<template>
  <article class="project-card">
    <div class="project-thumb" :style="thumbStyle">
      <span class="project-emoji">{{ project.emoji }}</span>
      <span v-if="project.period" class="project-period">{{ project.period }}</span>
    </div>
    <div class="project-body">
      <h4 class="project-title">{{ project.title }}</h4>
      <span v-if="roleLabel" class="project-role">{{ roleLabel }}</span>
      <p class="project-desc">{{ description }}</p>
      <ul class="project-tags">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>
      <div class="project-actions" v-if="project.repo || project.demo">
        <a
          v-if="project.repo"
          :href="project.repo"
          target="_blank"
          rel="noopener"
          class="project-link"
        >
          <span>{{ languageSet === 'korean' ? '코드 보기' : 'View Code' }}</span>
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener"
          class="project-link primary"
        >
          <span>{{ languageSet === 'korean' ? '데모' : 'Live Demo' }}</span>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
    languageSet: {
      type: String,
      default: 'english',
    },
  },
  computed: {
    description() {
      if (this.languageSet === 'korean') {
        return this.project.descKor || this.project.descEng
      }
      return this.project.descEng || this.project.descKor
    },
    thumbStyle() {
      return { background: this.project.gradient || 'var(--accent-grad)' }
    },
    roleLabel() {
      if (this.languageSet === 'korean') {
        return this.project.roleKor || this.project.role
      }
      return this.project.role || this.project.roleKor
    },
  },
}
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  height: 100%;
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
}
.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-strong);
  box-shadow: 0 22px 40px -22px rgba(99, 102, 241, 0.8);
}
.project-thumb {
  position: relative;
  height: 140px;
  display: grid;
  place-items: center;
}
.project-thumb::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 120% at 50% 0%, rgba(255, 255, 255, 0.18), transparent 60%);
}
.project-emoji {
  position: relative;
  z-index: 1;
  font-size: 2.6rem;
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.3));
}
.project-period {
  position: absolute;
  z-index: 1;
  top: 12px;
  right: 12px;
  font-size: 0.72rem;
  font-weight: 600;
  color: #fff;
  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 3px 10px;
  border-radius: 999px;
  backdrop-filter: blur(4px);
}
.project-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 18px 18px 20px;
  text-align: left;
}
.project-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 8px;
  color: var(--text);
}
.project-role {
  display: inline-block;
  align-self: flex-start;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--accent);
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 999px;
  padding: 3px 10px;
  margin: 0 0 12px;
}
.project-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.65;
  margin: 0 0 14px;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  list-style: none;
  margin: 0 0 16px;
  padding: 0;
}
.project-tags li {
  font-size: 0.74rem;
  font-weight: 500;
  color: var(--accent-2);
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid rgba(34, 211, 238, 0.2);
  border-radius: 7px;
  padding: 3px 9px;
}
.project-actions {
  display: flex;
  gap: 10px;
  margin-top: auto;
}
.project-link {
  flex: 1;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  padding: 9px 12px;
  border-radius: 9px;
  border: 1px solid var(--border-strong);
  color: var(--text);
  transition: all 0.18s ease;
}
.project-link:hover {
  background: rgba(148, 163, 184, 0.08);
}
.project-link.primary {
  border: none;
  color: #fff;
  background: var(--accent-grad);
}
.project-link.primary:hover {
  transform: translateY(-1px);
}
</style>
