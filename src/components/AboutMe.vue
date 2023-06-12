<template>
  <div class="row aboutMe">
    <div id="aboutMeHeader" class="col-12"><h3>About Me</h3></div>
    <div class="col-12 d-flex flex-wrap flex-sm-row flex-column">
      <div class="col">
        <img src="../assets/portrait.jpeg" id="portrait" alt="">
      </div>
      <div id="aboutMeIntro" class="col" style="text-align:left">
        <div v-if="languageSet === 'korean'">
          <p v-html="messageKor"></p>
        </div>
        <div v-if="languageSet === 'english'">
          <p v-html="messageEng"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'AboutMe',
  data(){
    return {
      message : null,
      messageKor : '<p>개발자에게 중요한 자질 중 하나는 유연한 사고와 소통을 아우르는 협업 능력이라고 생각합니다. '+
                    '저는 호텔 산업에서 1년간의 고객서비스, 3년간의 사무 업무를 경험하며 외부 고객 및 내부 부서 대내외의 '+
                    '동료들과 어떻게 소통하며 협력하는지 배워왔습니다. 또한 항상 제 스스로를 돌아보며 '+
                    '다양한 의견들을 열린 마음으로 경청하는 자세를 갖추려 노력해왔습니다.<br>'+
                    '비록 IT와 관련한 학습 기간이 길지는 않았지만 코트야드 메리어트 서울 보타닉파크와 대구 메리어트의 '+
                    '오픈 맴버로, 시스템의 체계를 구축하고 적용하며 이후 개선 및 유지해본 경험 또한 있습니다. '+
                    '추가적으로, 기능에 대한 암기보다는 구조적 이해를 우선적으로 학습해왔기에 다소 낯선 업무 및 개념에도 '+
                    '빠르게 적응할 수 있을 것이라 확신합니다.<br>'+
                    '궁금하신 점이 있다면 언제든 페이지 하단의 연락처로 연락 부탁드립니다.</p>',
      messageEng : 'I have been led to believe that one of the key values of web developer is excellent collaboration '+
                    'skills including open-mindness and communication. I have more than 4 years of experience in '+
                    'hospitality industry - a year in customer service and 3 years in purchasing. Which led me to learn '+
                    ' how to cooperate and communicate with both coworkers and customers.<br>'+
                    'I had joined the opening of Courtyard by Marriott Seoul Botanic Park, which is known to be one of the best '+
                    'Courtyard properties in Korea, and Marriott Daegu, the first international brand 5 stars hotel in Daegu. '+
                    'So I can say that I am familiar with building up the structure of a system, implement it, and improve the performance.<br> '+
                    'Please contact me any time if you have further inqueries.'
    }
  },
  props : {
    languageSet : String
  },
}
</script>

<style scoped>
#aboutMeHeader{
  margin : 6px;
}
#aboutMeIntro{
  margin : 4px;
}
#portrait{
  max-width: 80%;
  border-radius : 6px;
  margin : 4px;
  margin-bottom: 10px;
}
.logoImg{
  width: 2rem;
}


</style>