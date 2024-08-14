<template>
    <div class="footerRow">
        <div class="footer">
            <a href="mailto:andrew.daehyun@gmail.com" class="webLink text-decoration-none text-light">
                <img src="@/assets/email.png" class="contactImg" alt=""> andrew.daehyun@gmail.com
            </a>
          </div>
        <div class="footer">
            <a href="tel:+821049096281" class="webLink text-decoration-none text-light">
                <img src="@/assets/phone.png" class="contactImg" alt=""> +82 1049096281
            </a>
          </div>
          <button :on-click="sendMail">haha</button>
  </div>
</template>

<script>
// import nodeMailer from "/Users/daehyunan/Desktop/Portfolio/Portfolio/node_modules"

export default {
  name : 'ProfileView',
  props : {
    languageSetting: {
      type: String,
      default : 'english'
    },
  },
  components: {
  
  },
  methods: {
    sendMail : {
      // sendEmail({

      // })
    }
  }
}
</script>

<style scoped>
.view_element{
  margin : 14px;
  border-radius : 6px;
  background-color: rgb(32, 55, 95);
}
/* #language-dropdown{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
}
#language-menu {
  min-width : 120px;
  margin-right : 10px;
  background-color: rgb(94, 94, 110);
} */
#profile_navbar{
  margin-top:6px;
}
.flagImg{
  margin-right: 4px;
}
</style>