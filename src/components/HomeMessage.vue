<template>
  <div class="homeMessage">
    <div class="row">
      <!-- <h1>{{ msg }}</h1> -->
      <p id="greeting" class="fs-1 fw-bolder">
        Hi<br>
        I am <span class="text-primary">Daehyun,</span><br>
        Web developer
        <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
      </p>
      <h3 id="level" class="">Beginner</h3>
      <ul>
        <li><a href="../assets/cat.jpg" download class="fw-bold">download</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      </ul>
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
