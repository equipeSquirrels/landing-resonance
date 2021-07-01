<template>
  <div class="container-fluid">
  <b-navbar toggleable="lg"
            variant="#E1366A"
            bg-primary
            class="container navbar">

    <b-navbar-brand to="/">
      <img alt="Logo" src="@/assets/header/LogoRESONANCEAllongéBlanc.png" width="auto">

    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- CENTRE -->
      <b-navbar-nav class="ml-md-auto" id="navmenu">
        <b-nav-item to="/#Home" exact-active-class=" active" variant="">Accueil</b-nav-item>
        <b-nav-item href="https://resonance-blog.systeme.io/" exact-active-class=" active">Blog</b-nav-item>
        <b-nav-item to="#" exact-active-class="active">
          <b-button variant="outline-light" @click="modalShow = !modalShow" class="btnContact">Nous contacter</b-button>
        </b-nav-item>
      </b-navbar-nav>


      <!-- GAUCHE -->


    </b-collapse>



  </b-navbar>
    <b-modal
        v-model="modalShow"
        class="modal bg-dark"
        ok-variant="transparent"
        ok-title=""
        ok-disabled
        cancel-disabled
        cancel-variant="transparent"
        cancel-title="">


      <form class="contact-form text-center" @submit.prevent="sendEmail">
        <h1 class="hmodal">Nous contacter</h1>
        <div id="divider"><hr class="solid"></div>
        <label>Name</label>
        <input type="text" name="from_name"/>
        <label>Email</label>
        <input type="email" name="from_email"/>
        <input class="btn" type="submit" value="Envoyer">
      </form>
    </b-modal>

    <div id="banner">

        <div class="banner_content">
          <div class="row">
            <div class="col-md-6">
              <h1>Impulser la technologie de demain.</h1>
              <p>La plateforme qui révolutionne la relation entre bêta-testeurs et créateurs de la tech.
              Testez votre éligibilité à devenir testeur grâce au quiz fait spécialement pour vous !</p>
              <b-button variant="outline-light" class="btnQuiz">Faire le quiz</b-button>
            </div>
            <div class="col-md-6">
              <img alt="img" class="img_header" src="@/assets/header/img_header.svg" width="100%">
            </div>
          </div>
        </div>
    </div>
  </div>

</template>



<script>
import emailjs from 'emailjs-com';
export default {
    name:'Header',
  data(){
      return{
        modalShow: false,

      }
  },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_6s1lz1d', 'template_4hsf5ml', e.target, 'user_hL82gPuLVc6rUHST4FkvM')
          .then((result) => {
            alert('SUCCESS!', result.status, result.text);
          }, (error) => {
            alert('FAILED...', error);
          });
    }
  }

}
</script>



<style scoped>
.img_header{
  width: 70%;
  height: 300px;
  padding-bottom: 2%;
}
img{
  width: auto;
}
label{
  color: #222222;
  font-size: 15px;
  text-align: left!important;


}
.hmodal{
  color: #222222;
}
.contact-form{
  padding-top: 70px;
  padding-bottom: 70px;
  color: #222222;

}
@media screen and (min-width: 320px) and (max-width: 770px){
  .img_header{
    display: none;
  }
}

#navbar-nav{
  color: white;
}
#navmenu{
  color: white;
}
img{

  height: 36px;
}
#line{

}
.solid{
  border-top: 1px solid #E1366A;
  margin: 16px 20%;

}
.row{
  margin-top: 10%;
}

.container-fluid {

  background-color: #e1366a; /* For browsers that do not support gradients */
  background-image: linear-gradient(to bottom right, #911D65, #e1366a);


  padding-left: 20%;
}
.navbar{
  height: 100%;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
}
.navbar-light .navbar-nav .nav-link{
  color: white;
}
#nav-collapse {
  display: flex;

  font-size: 17px;
  color: #fff;

}
.btnContact, .btnQuiz{
  background: transparent;
  color: white;
}
.btnQuiz{
  margin-bottom: 20px;
}
h1{
  color: #222222;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #222222;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {

  color: white;
  background: #e1366a;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
#down{
  width: 24px;
  height: 24px;
}
h1, p{
  color: white;
  padding-bottom: 15px;
}

.btn{

}

p{
  font-size: 24px;
  font-weight: lighter;
  font-family: 'Roboto Thin', sans-serif;
}
.col-md-6{
  padding-left: 4%;
  padding-bottom: 10%;


}
.scroll{
  font-size: 16px;

}

h1, p {
  color: white;
  padding-bottom: 15px;
}

h1 {
  font-size: 40px;
  font-weight: bold;
}

p{
  font-size: 15px;
  font-weight: lighter;

}

#banner{
  margin: 30px 0;
}
</style>
