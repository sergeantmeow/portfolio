<template>
  <div class="home">
    <div id="wrapper" class="row">
      <div id="home_face_photo_area" class="col">
        <img id="home_face_photo" alt="" src= "../assets/face1.png">
      </div>
      <div id="home_message" class="col d-flex align-items-center">
        <!-- <HomeMessage msg="Welcome to Your Vue.js App"/> -->
        <HomeMessage />
      </div>
    </div>
  </div>
</template>

<script>
import HomeMessage from '@/components/HomeMessage.vue'

export default {
  name: 'HomeView',
  components: {
    HomeMessage
  }
}
</script>
<style>
  #wrapper{
    display : flex;
  }
  #home_face_photo_area{
    order: 1;
  }
  #home_face_photo {
    width : 80%;
  }
  #home_message{
    order: 2;
  }
</style>