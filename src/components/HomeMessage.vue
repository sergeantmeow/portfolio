<template>
  <div class="homeMessage">
    <div class="row">
      <div id="greeting" class="">
        <p>Hi<br>
        I'm <span class="text-primary">Daehyun</span>, an<br>
        IT Administrator</p>
      </div>
      <div id="level" >with 5 years of experience</div>
      <div id="level" >in hospitality industry</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMessage',
  props: {
    
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #2154d4;
}
#greeting{
  font-size: 5vw;
  font-weight: bold;
}
#level{
  font-size: 3vw;
}
@media (max-width: 767.98px) {
  #greeting{
    font-size: 8vw;
  }
  #level {
    font-size: 5vw; 
  }
}

</style>
