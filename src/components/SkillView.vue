<template>
  <div class="row skill">
    <div id="skillHeader"><h3>Skill</h3></div>
    <div id="skillCircles">
      <div class="row">
        <div class="col">
          Python
        </div>
        <div class="col">
          Java
        </div>
        <div class="col">
          JavaScript
        </div>
      </div>
      <div class="row">
        <div class="col">
          MySQL, sqlite
        </div>
        <div class="col">
          Django
        </div>
        <div class="col">
          Vue
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
      messageKor : '다른듯한',
      messageEng : 'Lorem',
    }
  },
  props : {
    languageSet : String
  },
}
</script>

<style scoped>
#skillHeader{
  margin : 6px;
}

</style>