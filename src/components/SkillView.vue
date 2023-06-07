<template>
  <div class="row skill">
    <div id="skillHeader"><h3>Skills</h3></div>
    <div id="skillCircles">
      <div class="row">
        <div class="col d-flex justify-content-around" >
          <div class="circle" data-bs-toggle="modal" data-bs-target="#skillModal" @click.prevent="getPython">
            <img src="../assets/python.png" alt="">
          </div>
        </div>
        <div class="col d-flex justify-content-around">
          <div class="circle" data-bs-toggle="modal" data-bs-target="#skillModal">
            <img src="../assets/java.png" alt="">
          </div>
        </div>
        <div class="col d-flex justify-content-around">
          <div class="circle" data-bs-toggle="modal" data-bs-target="#skillModal">
            <img src="../assets/javascript.png" alt="">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-around">
          <div class="circle" data-bs-toggle="modal" data-bs-target="#skillModal">
            <img src="../assets/mysql.png" id="mysql_img" alt="">
          </div>
        </div>
        <div class="col d-flex justify-content-around">
          <div class="circle" data-bs-toggle="modal" data-bs-target="#skillModal">
            <img src="../assets/django.png" alt="">
          </div>
        </div>
        <div class="col d-flex justify-content-around">
          <div class="circle" data-bs-toggle="modal" data-bs-target="#skillModal">
            <img src="../assets/vue.png" id="vue_img" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="skillModal" tabindex="-1" aria-labelledby="skillModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullsize">
        <div class="modal-header">
          <h5 class="modal-title fw-bold">{{ skillTitle }}</h5>
        </div>
        <div id="modal_content" class="col text-light fw-bold">
          <ul>
            <li>{{ skillDetail1 }}</li>
            <li>{{ skillDetail2 }}</li>
            <li>{{ skillDetail3 }}</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="modal_btn" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name : 'SkillView',
  data(){
    return {
      skillTitle : null,
      skillDetail1 : null,
      skillDetail2 : null,
      skillDetail3 : null,
    }
  },
  props : {
    languageSet : String
  },
  methods:{
    getPython(){
      this.skillTitle = 'Python'
      if(this.languageSet === 'korean'){
        this.skillDetail1 = '꽤 침'
        this.skillDetail2 = '알고리즘 조져봄'
        this.skillDetail3 = '그럭저럭 씀'
      }else{
        this.skillDetail1 = 'Quite good'
        this.skillDetail2 = 'Very well'
        this.skillDetail3 = 'Done some algos'
      }
    }
  },
}
</script>

<style scoped>
#skillHeader{
  margin : 6px;
}
.circle{
  border-radius : 25%;
  background-color: black;
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-property: width, height;
  transition-duration: 0.5s, 0.5s;
}
.circle:hover{
  width: 220px;
  height: 220px;
  cursor: pointer;
}
img{
  width: 76%;
}
#mysql_img{
  width: 70%;
}
#vue_img{
  width: 70%;
}
.modal-dialog{
  background-color: black;
  border : solid 2px blue;
  border-radius : 4px;
}
ul{
  text-align: left;
}
.modal_btn:hover{
  background-color: gray;
  color: rgb(32, 55, 95);
}
.modal_btn {
  background-color: white;
  color: blue;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  z-index: 2;
  pointer-events: stroke;
}
</style>