<template>
  <div class="row experience">
    <div id="experienceHeader"><h3>Experiences</h3></div>
    <div id="experiences">
      <ul>
        <li>
          Company name : {{ marriott_title }}<br>
          Job Position : {{ marriott_jp }}<br>
          Job Description :
          <p v-html="marriott_jd"></p>
        </li>
        <hr>
        <li>
          Company name : {{ hyatt_title }}<br>
          Job Position : {{ hyatt_jp }}<br>
          Job Description : 
          <p v-html="hyatt_jd"></p>
        </li>
        <hr>
        <li>
          Company name : {{ courtyard_title }}<br>
          Job Position : {{ courtyard_jp }}<br>
          Job Description :
          <p v-html="courtyard_jd"></p> 
        </li>
        <hr>
        <li>
          Company name : {{ high_level_title }}<br>
          Job Position : {{ high_level_jp }}<br>
          Job Description :
          <p v-html="high_level_jd"></p>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>
export default {
  name : 'experienceView',
  data(){
    return {

    }
  },
  props : {
    languageSet : String
  },
  computed:{
    high_level_title(){
      if(this.languageSet === 'korean'){
        return '하이레벨 영어학원'
      }else{
        return 'High Level English institute'
      }
    },
    high_level_jp(){
      if(this.languageSet === 'korean'){
        return '코치 강사'
      }else{
        return 'Coach Teacher'
      }
    },
    high_level_jd(){
      if(this.languageSet === 'korean'){
        return '<ul><li>문제풀이 해설</li><li>숙제 검사 및 채점</li><li>기출문제 분석</li></ul>'
      }else{
        return '<ul><li>Solving Question</li><li>Homework Check</li><li>Test question Analysis</li></ul>'
      }
    },
    courtyard_title(){
      if(this.languageSet === 'korean'){
        return '코트야드 메리어트 서울 보타닉파크'
      }else{
        return 'Courtyard by Marriott Seoul Botanic Park'
      }
    },
    courtyard_jp(){
      if(this.languageSet === 'korean'){
        return '프론트오피스 사원'
      }else{
        return 'Front Desk clerk'
      }
    },
    courtyard_jd(){
      if(this.languageSet === 'korean'){
        return '<ul><li>고객응대</li><li>체크인, 체크아웃 진행</li><li>일간 거래 정산 및 보고</li></ul>'
      }else{
        return '<ul><li>Guest Service</li><li>Process Check-in and Check-out</li><li>Night Audit</li></ul>'
      }
    },
    hyatt_title(){
      if(this.languageSet === 'korean'){
        return '그랜드 하얏트 인천'
      }else{
        return 'Grand Hyatt Incheon'
      }
    },
    hyatt_jp(){
      if(this.languageSet === 'korean'){
        return '구매부 사원'
      }else{
        return 'Purchasing clerk'
      }
    },
    hyatt_jd(){
      if(this.languageSet === 'korean'){
        return '<ul><li>입고물품 검수 및 매입</li><li>식자재 발주요청 취합 및 발주</li></ul>'
      }else{
        return '<ul><li>Receiving delivered items</li><li>Integrate food purchase requisition and make order</li></ul>'
      }
    },
    marriott_title(){
      if(this.languageSet === 'korean'){
        return '메리어트 대구'
      }else{
        return 'Marriott Daegu'
      }
    },
    marriott_jp(){
      if(this.languageSet === 'korean'){
        return '구매부 주임'
      }else{
        return 'Purchasing Supervisor'
      }
    },
    marriott_jd(){
      if(this.languageSet === 'korean'){
        return '<ul><li>발주요청 검토 및 발주</li><li>견적 취합 및 낙찰</li><li>정기 및 수시 보고 데이터 취합</li></ul>'
      }else{
        return '<ul><li>Reviewing purchase requisition and make order</li><li>Collectiong quotations and bid</li><li>Integrate and process data for reports</li></ul>'
      }
    },

  },
}
</script>

<style scoped>
#experienceHeader{
  margin : 6px;
}
#experiences{
  text-align: left;
}
ul{
  list-style-type: none;
}
</style>