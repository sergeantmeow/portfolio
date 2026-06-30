<template>
  <section class="skill section-card">
    <h3 class="section-title">{{ languageSet === 'korean' ? '기술 스택' : 'Skills' }}</h3>

    <div class="skill-grid">
      <button
        v-for="skill in skills"
        :key="skill.key"
        type="button"
        class="skill-card"
        data-bs-toggle="modal"
        data-bs-target="#skillModal"
        @click="selectSkill(skill.key)"
      >
        <span class="skill-icon">
          <img :src="skill.icon" :alt="skill.title">
        </span>
        <span class="skill-name">{{ skill.title }}</span>
      </button>
    </div>

    <!-- Skill detail modal -->
    <div class="modal fade" id="skillModal" tabindex="-1" aria-labelledby="skillModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content skill-modal">
          <div class="modal-header">
            <h5 class="modal-title" id="skillModalLabel">{{ skillTitle }}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ul class="skill-points" v-html="skillData"></ul>
            <div v-if="skillImage" class="skill-modal-img">
              <img :src="skillImage" alt="">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="modal_btn" data-bs-dismiss="modal">
              {{ languageSet === 'korean' ? '닫기' : 'Close' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillView',
  data() {
    return {
      activeKey: null,
      skills: [
        { key: 'powershell', title: 'Powershell', icon: require('../assets/powershell.png') },
        { key: 'python', title: 'Python', icon: require('../assets/python.png') },
        { key: 'java', title: 'Java', icon: require('../assets/java.png') },
        { key: 'javascript', title: 'JavaScript', icon: require('../assets/javascript.png') },
        { key: 'mysql', title: 'MySQL', icon: require('../assets/mysql.png') },
        { key: 'vue', title: 'Vue', icon: require('../assets/vue.png') },
      ],
      details: {
        powershell: {
          title: 'Powershell',
          image: require('../assets/joiner.gif'),
          korean: [
            '<span class="hl">MVC Design Pattern, REST API</span>에 익숙함',
            'Django를 활용한 프로젝트 경험 유',
            '각종 기능 활용 및 습득에 대해 자신감이 있음',
          ],
          english: [
            'Familiar with <span class="hl">MVC Design Pattern, REST API</span>',
            'Experienced a duo project utilizing Django',
            'Confident in learning and utilizing various utilities',
          ],
        },
        python: {
          title: 'Python',
          image: require('../assets/test.gif'),
          korean: [
            '<span class="hl">BFS, Tree, DP</span> 등의 구조를 가진 알고리즘 구현 가능',
            'class 선언 및 이를 인스턴스화하여 사용하는 것에 익숙함',
            '해당 언어를 통한 프로젝트 경험 유',
            'Visual Studio Code를 주력 IDE로 사용함',
          ],
          english: [
            'Capable of building algorithms with structures such as <span class="hl">BFS, Tree, DP</span>',
            'Familiar with class declaration and utilizing instances of it',
            'Experienced a duo project using the language',
            'Utilize Visual Studio Code as main IDE',
          ],
        },
        java: {
          title: 'Java',
          image: require('../assets/test.gif'),
          korean: [
            'class 선언 및 이를 인스턴스화하여 사용하는 것에 익숙함',
            '<span class="hl">초급 수준의 구조적 이해</span> 함양',
            '이차원 리스트 및 배열 구조를 가진 알고리즘 구현 가능',
            'Eclipse를 주력 IDE로 사용함',
          ],
          english: [
            'Familiar with class declaration and utilizing instances of it',
            'Bearing a <span class="hl">beginner level of understanding of the structure</span>',
            'Able to build algorithms with multi-dimensional arrays and lists',
            'Utilize Eclipse as main IDE',
          ],
        },
        javascript: {
          title: 'JavaScript',
          image: null,
          korean: [
            'DOM API에 익숙함',
            '동기, 비동기 작동 방식에 대한 이해를 갖춤',
            '<span class="hl">다양한 종류의 함수들</span>로 구성된 코드들을 읽고 동작 방식 이해 가능',
          ],
          english: [
            'Familiar with the DOM API',
            'Have an understanding of synchronous and asynchronous behavior',
            'Able to understand the working process of code made of <span class="hl">various kinds of functions</span>',
          ],
        },
        mysql: {
          title: 'MySQL',
          image: null,
          korean: [
            '터미널을 통한 쿼리문 입력 및 워크벤치를 통한 조작에 익숙함',
            '프로젝트에 필요한 초급 수준의 모델 구축 경험 유',
          ],
          english: [
            'Familiar with querying through the terminal and operating with Workbench',
            'Experienced a beginner level of building model structures for a project',
          ],
        },
        vue: {
          title: 'Vue',
          image: null,
          korean: [
            '<span class="hl">vuex, router, store</span> 등의 활용에 익숙함',
            'Vue를 활용한 프로젝트 경험 유',
            '각종 기능 활용 및 습득에 대해 자신감이 있음',
          ],
          english: [
            'Familiar with composing code using <span class="hl">vuex, router, store</span>',
            'Experienced a duo project utilizing Vue',
            'Confident in learning and utilizing various utilities offered by Vue',
          ],
        },
      },
    }
  },
  props: {
    languageSet: String
  },
  computed: {
    active() {
      return this.activeKey ? this.details[this.activeKey] : null
    },
    skillTitle() {
      return this.active ? this.active.title : ''
    },
    skillImage() {
      return this.active ? this.active.image : null
    },
    skillData() {
      if (!this.active) return ''
      const points = this.languageSet === 'korean' ? this.active.korean : this.active.english
      return points.map(p => `<li>${p}</li>`).join('')
    },
  },
  methods: {
    selectSkill(key) {
      this.activeKey = key
    },
  },
}
</script>

<style scoped>
.skill-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(12px, 2.5vw, 20px);
}
.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: clamp(16px, 3vw, 28px) 12px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.skill-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-strong);
  box-shadow: 0 16px 30px -18px rgba(99, 102, 241, 0.7);
}
.skill-icon {
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
}
.skill-icon img {
  width: 56%;
  height: 56%;
  object-fit: contain;
}
.skill-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text);
}

/* Modal */
.skill-modal {
  background: var(--surface);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  color: var(--text);
  box-shadow: var(--shadow);
}
.skill-modal .modal-header,
.skill-modal .modal-footer {
  border-color: var(--border);
}
.skill-modal .modal-title {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
}
.skill-points {
  text-align: left;
  margin: 0;
  padding-left: 1.2rem;
  line-height: 1.8;
  color: var(--text-muted);
}
.skill-points >>> .hl {
  color: var(--accent-2);
  font-weight: 600;
}
.skill-modal-img {
  margin-top: 16px;
  text-align: center;
}
.skill-modal-img img {
  max-width: 100%;
  border-radius: 10px;
}
.modal_btn {
  background: var(--accent-grad);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  padding: 8px 20px;
  transition: transform 0.18s ease;
}
.modal_btn:hover {
  transform: translateY(-1px);
}

@media (max-width: 575.98px) {
  .skill-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .skill-icon {
    width: 60px;
    height: 60px;
  }
}
</style>
