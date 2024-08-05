<template>
  <div class="home">
    <div id="wrapper" class="row">
      <div id="home_face_photo_area" class="col-12 col-md-5 d-flex align-items-center justify-content-center">
        <img id="home_face_photo" alt="" src= "../assets/memoji2.png">
      </div>
      <div id="home_message" class="col-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-start">
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
    width: 100%;
  }
  #home_face_photo {
    margin-top : 5%;
    width : 100%;
  }
  #home_message{
    margin-top : 6px;
    margin-bottom : 14px;
  }
</style>