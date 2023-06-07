<template>
  <div class="row aboutMe">
    <div id="aboutMeHeader"><h3>About Me</h3></div>
    <div class="col">
      <img src="../assets/portrait.jpeg" id="portrait" alt="">
    </div>
    <div id="aboutMeIntro" class="col">
      <p v-if="languageSet === 'korean'">
        {{ messageKor }}
      </p>
      <p v-if="languageSet === 'english'">
        {{ messageEng }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name : 'AboutMe',
  data(){
    return {
      message : null,
      messageKor : '다른듯한 상황이다. 엄석대와는 달리 검은 각반들은 악당 그 자체이다. 이러한 악당일지라도 이를 타도하는'+
                    '과정에서 일어나는 무질서와 폭력에 대해서 생각해 볼 수 있는 부분이다. 필론과 돼지에서 주인공이 딱히'+
                    '누구 편을 들지는 않았지만 작중 묘사를 보면 민중 봉기의 무질서에 대한 이문열의 의식을 볼 수 있다. '+
                    '아마 그의 정치적 성향을 본다면 어느 정도 상통하는 부분. 한편으로는 주인공과 같은 지식인들이 내면에는'+
                    '강한 정의감을 품고 있음에도 불의에 저항하는 실제 행동엔 나서지 못하며 무기력과 패배주의를 보인다는 점을'+
                    '비판했다고도 볼 수 있다. 또한 소시민의 상징이라 할 수 있는, 일자무식인데다 허세만 가득한 인물인 홍동덕은'+
                    '주인공 옆자리에 앉아 여행하는 와중에 거듭된 혼란 속에서도 타협주의적 태도로 일관하며 고통을 피하고 편히'+
                    '지내며 현실에 대해 고뇌하는 지식인인 주인공과 극명하게 대조된다. 이런 방관자적 소시민들이 역사의 격변을'+
                    '비겁하지만 묵묵하게 이겨내고 살아남아 번성하는 것이 바로 역사라고 작가는 말하고 싶은 듯 하다.',
      messageEng : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
                    'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'+
                    'when an unknown printer took a galley of type and scrambled it to make a type specimen book.'+
                    'It has survived not only five centuries, but also the leap into electronic typesetting,'+
                    'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset'+
                    'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like'+
                    'Aldus PageMaker including versions of Lorem Ipsum.',
    }
  },
  props : {
    languageSet : String
  },
}
</script>

<style>

#aboutMeHeader{
  margin : 6px;
}
#aboutMeIntro{
  margin : 4px;
}
#portrait{
  max-width: 94%;
  border : solid 2px blue;
  border-radius : 6px;
  margin : 4px;
  margin-bottom: 10px;
}
.logoImg{
  width: 2rem;
}


</style>