<template>
  <section class="contact section-card">
    <h3 class="section-title">{{ languageSet === 'korean' ? '연락처' : 'Contact' }}</h3>
    <p class="contact-lead">
      {{ languageSet === 'korean'
        ? '궁금하신 점이 있다면 언제든 연락 주세요.'
        : 'Feel free to reach out any time.' }}
    </p>
    <div class="contact-list">
      <a href="mailto:andrew.daehyun@gmail.com" class="contact-item">
        <span class="contact-icon"><img src="@/assets/email.png" alt="Email"></span>
        <span class="contact-info">
          <span class="contact-label">Email</span>
          <span class="contact-value">andrew.daehyun@gmail.com</span>
        </span>
      </a>
      <a href="tel:+821049096281" class="contact-item">
        <span class="contact-icon"><img src="@/assets/phone.png" alt="Phone"></span>
        <span class="contact-info">
          <span class="contact-label">{{ languageSet === 'korean' ? '전화' : 'Phone' }}</span>
          <span class="contact-value">+82 10-4909-6281</span>
        </span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactMe',
  props: {
    languageSet: String
  },
}
</script>

<style scoped>
.contact-lead {
  color: var(--text-muted);
  margin: 0 0 20px;
}
.contact-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: transform 0.18s ease, border-color 0.18s ease;
}
.contact-item:hover {
  transform: translateY(-2px);
  border-color: var(--border-strong);
}
.contact-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(99, 102, 241, 0.14);
  border: 1px solid var(--border);
}
.contact-icon img {
  width: 22px;
  height: 22px;
  object-fit: contain;
}
.contact-info {
  display: flex;
  flex-direction: column;
  text-align: left;
  min-width: 0;
}
.contact-label {
  font-size: 0.78rem;
  color: var(--text-muted);
}
.contact-value {
  font-weight: 600;
  color: var(--text);
  word-break: break-all;
}

@media (max-width: 575.98px) {
  .contact-list {
    grid-template-columns: 1fr;
  }
}
</style>
