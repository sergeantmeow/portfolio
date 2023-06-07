<template>
  <div class="homeMessage">
    <div class="row">
      <div id="greeting" class="">
        <p style="font-size:4vw; font-weight:bold;">Hi<br>
        I am <span class="text-primary">Daehyun An</span>,<br>
        Aspiring Web developer</p>
      </div>
      <h3 id="level" class="">Ex-Hotelier</h3>
      <h3 id="level" class="">Ex-English Teacher</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMessage',
  props: {
    // msg: String
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
#greeting, #level {
  color: white;
}
</style>
