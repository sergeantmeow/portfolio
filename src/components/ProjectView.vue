<template>
  <div class="row project">
    <div id="projectHeader"><h3>Projects</h3></div>
    <div>
      Upcoming
    </div>
  </div>
  
</template>

<script>
export default {
  name : 'projectView',
  data(){
    return {
     
    }
  },
  props : {
    languageSet : String
  },
  computed:{
  },
}
</script>

<style scoped>
#projectHeader{
  margin : 6px;
}
</style>