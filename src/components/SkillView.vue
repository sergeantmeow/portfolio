<template>
  <div class="row skill">
    <div id="skillHeader" class=""><h3>Skills</h3></div>
    <div id="skillCircles" class="row">
      <div class="col-6 col-sm-4 d-flex justify-content-around" >
        <div class="circle" data-bs-toggle="modal" data-bs-target="#skillModal" @click.prevent="getPython">
          <img src="../assets/python.png" alt="">
        </div>
      </div>
      <div class="col-6 col-sm-4 d-flex justify-content-around">
        <div class="circle" data-bs-toggle="modal" data-bs-target="#skillModal" @click.prevent="getJava">
          <img src="../assets/java.png" alt="">
        </div>
      </div>
      <div class="col-6 col-sm-4 d-flex justify-content-around">
        <div class="circle" data-bs-toggle="modal" data-bs-target="#skillModal" @click.prevent="getJavaScript">
          <img src="../assets/javascript.png" alt="">
        </div>
      </div>
      <div class="col-6 col-sm-4 d-flex justify-content-around">
        <div class="circle" data-bs-toggle="modal" data-bs-target="#skillModal" @click.prevent="getMYSql">
          <img src="../assets/mysql.png" id="mysql_img" alt="">
        </div>
      </div>
      <div class="col-6 col-sm-4 d-flex justify-content-around">
        <div class="circle" data-bs-toggle="modal" data-bs-target="#skillModal" @click.prevent="getDjango">
          <img src="../assets/django.png" alt="">
        </div>
      </div>
      <div class="col-6 col-sm-4 d-flex justify-content-around">
        <div class="circle" data-bs-toggle="modal" data-bs-target="#skillModal" @click.prevent="getVue">
          <img src="../assets/vue.png" id="vue_img" alt="">
        </div>
      </div>
    </div>

    <div class="modal fade" id="skillModal" tabindex="-1" aria-labelledby="skillModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullsize">
        <div class="modal-header d-flex justify-content-around">
          <h5 class="modal-title fw-bold">{{ skillTitle }}</h5>
        </div>
        <div id="modal_content" class="col text-light fw-bold">
          <ul>
            <p v-html="skillData"></p>
            <p v-if="skillImage">
              <img :src="skillImage" id="test_img" alt="">
            </p>
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
      skillData : null,
      skillImage : null,
    }
  },
  props : {
    languageSet : String
  },
  methods:{
    getPython(){
      this.skillTitle = 'Python'
      this.skillImage = require("../assets/test.gif")
      if(this.languageSet === 'korean'){
        this.skillData = 
          '<li><span class="text-primary">BFS, Tree, DP</span> 등의 구조를 가진 알고리즘 구현 가능</li>' + 
          '<li>class 선언 및 이를 인스턴스화하여 사용하는 것에 익숙함</li>' +
          '<li>해당 언어를 통한 프로젝트 경험 유</li>' +
          '<li>Visual Studio Code를 주력 IDE로 사용함</li>'
      }else{
        this.skillData =
          '<li>Capable to build algorithm with structures such as <span class="text-primary">BFS, Tree, DP</span> etc</li>' + 
          '<li>Familiar with class declarance and utilize instance of it</li>' +
          '<li>Experienced a duo project using the language</li>' +
          '<li>Utilize Visual Studio Code as main IDE</li>'
      }
      console.log("Get Python")
    },
    getJava(){
      this.skillTitle = 'Java'
      this.skillImage = require("../assets/test.gif")
      if(this.languageSet === 'korean'){
        this.skillData =  
          '<li>class 선언 및 이를 인스턴스화하여 사용하는 것에 익숙함</li>' +
          '<li><span class="text-primary">초급 수준의 구조적 이해</span> 함양</li>' + 
          '<li>이차원 리스트 및 배열 구조를 가진 알고리즘 구현 가능</li>' +
          '<li>Eclipse를 주력 IDE로 사용함</li>'
      }else{
        this.skillData =
          '<li>Familiar with class declarance and utilize instance of it</li>' +
          '<li>Bearing <span class="text-primary">beginner level of understanding about the structure</span></li>' + 
          '<li>Able to build algorithm with structures such as multi-dimensional array and list</li>' +
          '<li>Utilize Eclipse as main IDE</li>'
      }
    },
    getJavaScript(){
      this.skillTitle = 'JavaScript'
      this.skillImage = null
      if(this.languageSet === 'korean'){
        this.skillData = 
          '<li>DOM API에 익숙함</li>' + 
          '<li>동기, 비동기 작동 방식에 대한 이해를 갖춤</li>' +
          '<li><span class="text-primary">다양한 종류의 함수들</span>로 구성된 코드들을 읽고 동작 방식 이해 가능</li>'
      }else{
        this.skillData =
          '<li>Familiar with DOM API</li>' + 
          '<li>Have understanding about synchronous and asynchronous</li>' +
          '<li>Able to understand the working process of codes made of <span class="text-primary">various kinds of functions</span></li>'
      }
    },
    getMYSql(){
      this.skillTitle = 'MYSql'
      this.skillImage = null
      if(this.languageSet === 'korean'){
        this.skillData = 
          '<li>터미널을 통한 쿼리문 입력 및 워크벤치를 통한 조작에 익숙함</li>' + 
          '<li>프로젝트에 필요한 초급 수준의 모델 구축 경험 유</li>'
      }else{
        this.skillData =
          '<li>Familiar with querying through terminal and operating with Workbench</li>' + 
          '<li>Experienced beginner level of building model structure for a project</li>'
      }
    },
    getDjango(){
      this.skillTitle = 'Django'
      this.skillImage = null
      if(this.languageSet === 'korean'){
        this.skillData = 
          '<li><span class="text-primary">MVC Design Pattern, REST API</span>에 익숙함</li>' + 
          '<li>Django를 활용한 프로젝트 경험 유</li>' +
          '<li>각종 기능 활용 및 습득에 대해 자신감이 있음</li>'
      }else{
        this.skillData =
          '<li>Familiar with <span class="text-primary">MVC Design Pattern, REST API</span></li>' + 
          '<li>Experienced a duo project utilizing Django</li>' +
          '<li>Confident in learning and utilizing various utilities offered by Django</li>'
      }
    },
    getVue(){
      this.skillTitle = 'Vue'
      this.skillImage = null
      if(this.languageSet === 'korean'){
        this.skillData = 
          '<li><span class="text-primary">vuex, router, store</span> 등의 활용에 익숙함</li>' + 
          '<li>Vue를 활용한 프로젝트 경험 유</li>' +
          '<li>각종 기능 활용 및 습득에 대해 자신감이 있음</li>'
      }else{
        this.skillData =
          '<li>Familiar with composing codes using <span class="text-primary">vuex, router, store</span> etc</li>' + 
          '<li>Experienced a duo project utlizing Vue</li>' +
          '<li>Confident in learning and utilizing various utilities offered by Vue</li>'
      }
    },
  },
}
</script>

<style scoped>
#testhere{
  margin-left: 14px;
}
#skillHeader{
  margin : 6px;
}
#skillCircles{
  margin-left : 0px;
}
.circle{
  border-radius : 25%;
  background-color: black;
  width: 14vw;
  height: 14vw;
  min-width: 120px;
  min-height: 120px;
  margin-bottom: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-property: transform;
  transition-duration: 0.5s, 0.5s;
}
.circle:hover{
  transform : scale(1.1);
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
  border-radius : 10px;
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