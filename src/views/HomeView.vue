<template>
  <div class="home">
    <div id="wrapper" class="row">
      <div id="home_face_photo_area" class="col">
        <img id="home_face_photo" alt="" src= "../assets/face2.png">
      </div>
      <div id="home_message" class="col d-flex align-items-center">
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
    width : 100%;
  }
</style>