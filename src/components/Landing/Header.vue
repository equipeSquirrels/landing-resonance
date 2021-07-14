<template>
  <div class="container-fluid">
    <b-navbar toggleable="lg"
              variant="#fff"
              bg-primary
              class="container navbar">

      <b-navbar-brand to="/">
        <img alt="Logo" src="@/assets/header/logo.svg" width="auto">

      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse">

      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- CENTRE -->
        <b-navbar-nav class="ml-md-auto" id="navmenu">

          <b-nav-item-dropdown class="dropDown" text="Solution">
            <b-dropdown-item class="drop" to="/Product">Produit</b-dropdown-item>
            <b-dropdown-item class="drop" to="/Pannel">Pannel d'utilisateurs</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown class="dropDown" text="Méthodologie" right>
            <b-dropdown-item class="drop" to="/Methodologie">Tests Utilisateur à Distance</b-dropdown-item>
            <b-dropdown-item class="drop" to="/Deroule">Déroulé d'un Test Utilisateur</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="https://resonance-blog.systeme.io/" exact-active-class=" active">Blog</b-nav-item>

        </b-navbar-nav>

        <b-navbar-nav class="ml-md-auto" id="navBtn">

          <b-nav-item to="/Testeurs" exact-active-class="active">
            <b-button variant="outline-light" class="btnContact">Devenir testeur</b-button>
          </b-nav-item>

          <b-nav-item to="/recrute" exact-active-class="active">
            <b-button variant="outline-light"  class="btnDemo">Demander un devis</b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>



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
  .navbar{
    color: #e1366a;
  }
}
.drop{
  color: black;
}
.drop:hover{
  color: #e1366a;
}
span{
  color: black;
}
#navbar-nav{
  color: black;
}
#navmenu{
  color: black !important;
  font-weight: bold;
  padding-right: 30%;
}
img{

  height: 36px;
}
#line{

}
.container-fluid{
  padding-left: 0;
}
#navmenu{
  padding-right: 10%;
}
.btnContact{
  padding: 6px 4px;

}
.navbar{
  width: 80%;
}
.btnDemo{
  padding: 6px 0;
  width: 158px;
}
.solid{
  border-top: 1px solid #E1366A;
  margin: 16px 20%;

}
.row{
  margin-top: 10%;
}

.container-fluid {

  background-color: #ffffff; /* For browsers that do not support gradients */



  padding-left: 9%;
}
.navbar{
  height: 100%;
  font-family: 'Quicksand', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
}
.navbar-light .navbar-nav a {
  color: black;
  font-weight: bold;
}
#nav-collapse {
  display: flex;

  font-size: 17px;
  color: #000;

}
.btnContact{
  background: transparent;
  color: #e1366a;
  border: 1px solid #e1366a;
  border-radius: 10px;
}
.btnDemo{
  background: #e1366a;
  color: white;
  border-radius: 10px;
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
  color: black;
  padding-bottom: 15px;
}

.btn{

}

p{
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
}
.col-md-6{
  padding-left: 4%;
  padding-bottom: 10%;


}
.scroll{
  font-size: 16px;

}

h1, p {
  color: black;
  padding-bottom: 15px;
}

h1 {
  font-size: 40px;
  font-weight: bold;
}




</style>
