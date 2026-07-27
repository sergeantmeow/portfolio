<template>
  <section class="experience section-card">
    <h3 class="section-title">{{ languageSet === 'korean' ? '경력' : 'Experiences' }}</h3>
    <ol class="timeline">
      <li class="timeline-item" v-for="(job, i) in jobs" :key="i">
        <span class="timeline-dot"></span>
        <div class="timeline-card">
          <h4 class="job-title">{{ job.title }}</h4>
          <span class="job-position">{{ job.position }}</span>
          <ul class="job-desc">
            <li v-for="(d, j) in job.desc" :key="j">{{ d }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  name: 'experienceView',
  props: {
    languageSet: String
  },
  computed: {
    jobs() {
      const ko = this.languageSet === 'korean'
      return [
        {
          title: ko ? '인스파이어 리조트' : 'Inspire Entertainment Resorts',
          position: ko ? '개발 & 운영 엔지니어' : 'Development & Operations Engineer',
          desc: ko
            ? ['사내 업무 애플리케이션 신규 개발 및 기능 고도화', '애플리케이션 배포 프로세스 구축 및 운영', '애플리케이션 인프라 아키텍처 설계']
            : ['Developing and enhancing in-house business applications', 'Building and operating application deployment pipelines', 'Designing application infrastructure architecture'],
        },
        {
          title: ko ? '인스파이어 리조트' : 'Inspire Entertainment Resorts',
          position: ko ? 'IT 프로덕트 매니저' : 'IT Product Analyst',
          desc: ko
            ? ['발주요청 검토 및 발주', '견적 취합 및 낙찰', '정기 및 수시 보고 데이터 취합']
            : ['Reviewing purchase requisitions and making orders', 'Collecting quotations and bidding', 'Integrating and processing data for reports'],
        },
        {
          title: ko ? '메리어트 대구' : 'Marriott Daegu',
          position: ko ? '구매부 주임' : 'Purchasing Supervisor',
          desc: ko
            ? ['발주요청 검토 및 발주', '견적 취합 및 낙찰', '정기 및 수시 보고 데이터 취합']
            : ['Reviewing purchase requisitions and making orders', 'Collecting quotations and bidding', 'Integrating and processing data for reports'],
        },
        {
          title: ko ? '그랜드 하얏트 인천' : 'Grand Hyatt Incheon',
          position: ko ? '구매부 사원' : 'Purchasing Clerk',
          desc: ko
            ? ['입고물품 검수 및 매입', '식자재 발주요청 취합 및 발주']
            : ['Receiving and inspecting delivered items', 'Integrating food purchase requisitions and making orders'],
        },
        {
          title: ko ? '코트야드 메리어트 서울 보타닉파크' : 'Courtyard by Marriott Seoul Botanic Park',
          position: ko ? '프론트오피스 사원' : 'Front Desk Clerk',
          desc: ko
            ? ['고객응대', '체크인, 체크아웃 진행', '일간 거래 정산 및 보고']
            : ['Guest service', 'Processing check-in and check-out', 'Night audit'],
        },
        // {
        //   title: ko ? '하이레벨 영어학원' : 'High Level English Institute',
        //   position: ko ? '코치 강사' : 'Coach Teacher',
        //   desc: ko
        //     ? ['문제풀이 해설', '숙제 검사 및 채점', '기출문제 분석']
        //     : ['Solving questions', 'Homework checks and grading', 'Test question analysis'],
        // },
      ]
    },
  },
}
</script>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: linear-gradient(180deg, var(--accent), var(--accent-2));
  opacity: 0.4;
}
.timeline-item {
  position: relative;
  padding-left: 34px;
  margin-bottom: 22px;
}
.timeline-item:last-child {
  margin-bottom: 0;
}
.timeline-dot {
  position: absolute;
  left: 0;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent-grad);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
}
.timeline-card {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 16px 18px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.timeline-card:hover {
  border-color: var(--border-strong);
  transform: translateX(2px);
}
.job-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  color: var(--text);
}
.job-position {
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--accent-2);
  background: rgba(34, 211, 238, 0.1);
  border-radius: 999px;
  padding: 3px 12px;
  margin: 8px 0 12px;
}
.job-desc {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--text-muted);
  line-height: 1.7;
  font-size: 0.92rem;
}
</style>
