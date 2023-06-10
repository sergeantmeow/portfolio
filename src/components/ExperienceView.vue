<template>
  <div class="row experience">
    <div id="experienceHeader"><h3>Experiences</h3></div>
    <div>
      <ul>
        <li>
          Company name : {{ high_level_title }}<br>
          Job Position : {{ high_level_jp }}<br>
          Job Description : {{ high_level_jd }}
        </li>
        <li>
          Company name : {{ courtyard_title }}<br>
          Job Position : {{ courtyard_jp }}<br>
          Job Description : {{ courtyard_jd }}  
        </li>
        <li>
          Company name : {{ hyatt_title }}<br>
          Job Position : {{ hyatt_jp }}<br>
          Job Description : {{ hyatt_jd }}
        </li>
        <li>
          Company name : {{ marriott_title }}<br>
          Job Position : {{ marriott_jp }}<br>
          Job Description : {{ marriott_jd }}
        </li>
        <li>
          Samsung Software Academy For Youth
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
        return '가르치기'
      }else{
        return 'teaching'
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
        return '이것저것'
      }else{
        return 'this and that'
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
        return '이것저것'
      }else{
        return 'this and that'
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
        return '이것저것'
      }else{
        return 'this and that'
      }
    },

  },
}
</script>

<style scoped>
#experienceHeader{
  margin : 6px;
}
</style>