<template>
  <div class="home">
    <div id="wrapper" class="row">
      <div id="home_face_photo_area" class="col-12 col-md-6 d-flex align-items-center">
        <img id="home_face_photo" alt="" src= "../assets/memoji2.png">
      </div>
      <div id="home_message" class="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start">
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
    margin-top : 2%;
    width : 70%;
  }
</style>