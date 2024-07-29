<template>
  <div class="homeMessage">
    <div class="row">
      <div id="greeting" class="">
        <p style="font-size:4vw; font-weight:bold;">Hi<br>
        I am <span class="text-primary">Daehyun An</span>,<br>
        IT Service Analyst</p>
      </div>
      <div id="level" style="font-size:3vw">Ex-Hotelier</div>
      <div id="level" style="font-size:3vw">Ex-English Teacher</div>
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

</style>
