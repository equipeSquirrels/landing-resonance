<template>

  <div class="contact container-fluid" id="contacts">
    <div class="container">
      <h2 class="text-center">Avis de la communauté</h2>
      <div class="commu">
        <div class="row space">

            <b-card class="name1">
              <b-card-title class="titleAvatar">
                <b-avatar class="mr-3"><img alt="avatar" class="avatar" src="../../../assets/communaute/laura.svg"></b-avatar>
                <span class="mr-auto">Laura, 25 ans</span>
              </b-card-title>

              <b-card-body class="avis">Résonance est une aubaine qui m'a permis de découvrir de nouveaux produits incroyables.</b-card-body>
            </b-card>
        </div>
        <div class="row space">
            <b-card class="name2">
          <b-card-title class="titleAvatar">
            <b-avatar class="mr-3"><img alt="avatar" class="avatar" src="../../../assets/communaute/matthéo.svg"></b-avatar>
            <span class="mr-auto">Matthéo, 37 ans</span>
          </b-card-title>
          <b-card-body class="avis">Travailler avec Résonance est une opportunité que je recommande à tout le monde de saisir !</b-card-body>
        </b-card>
        </div>
          <div class="row space">
            <b-card class="name3" id="namedesktop">
            <b-card-title class="titleAvatar">
              <b-avatar class="mr-3"><img alt="avatar" class="avatar" src="../../../assets/communaute/baptiste.svg"></b-avatar>
              <span class="mr-auto">Baptiste, 31 ans</span>
            </b-card-title>
            <b-card-body class="avis">Résonance est une aubaine qui m'a permis de découvrir de nouveaux produits incroyables.</b-card-body>
          </b-card>
          </div>
        <div class="row space">
          <b-card class="name4" id="name4desktop">
            <b-card-title class="titleAvatar">
              <b-avatar class="mr-3"><img alt="avatar" class="avatar" src="../../../assets/communaute/clea.svg"></b-avatar>
              <span class="mr-auto">Cléa, 29 ans</span>
            </b-card-title>

            <b-card-body class="avis">Tester de nouveaux produits high tech dernier cri a été une expérience très enrichissante.
              La plateforme de Résonance est très intuitive.</b-card-body>
          </b-card>

        </div>
        <div class="row spaces" id="nameMobile">
          <b-card class="name3">
            <b-card-title class="titleAvatar">
              <b-avatar class="mr-3"><img alt="avatar" class="avatar" src="../../../assets/communaute/baptiste.svg"></b-avatar>
              <span class="mr-auto">Baptiste, 31 ans</span>
            </b-card-title>
            <b-card-body class="avis">Résonance est une aubaine qui m'a permis de découvrir de nouveaux produits incroyables.</b-card-body>
          </b-card>


          <b-card class="name4">
            <b-card-title class="titleAvatar">
              <b-avatar class="mr-3"><img alt="avatar" class="avatar" src="../../../assets/communaute/clea.svg"></b-avatar>
              <span class="mr-auto">Cléa, 29 ans</span>
            </b-card-title>

            <b-card-body class="avis">Tester de nouveaux produits high tech dernier cri a été une expérience très enrichissante.
              La plateforme de Résonance est très intuitive.</b-card-body>
          </b-card>
          </div>
        </div>

      <div>


      </div>
      <div class=" actualite">
        <div class="sm-9">
          <h2 class="text-center">Recevez le meilleure de l'actualité tech</h2>
          <p class="text-center">Inscrivez votre adresse mail et recevez régulièrement les dernières
            actualités tech.</p>
        </div>
        <div id="mc_embed_signup">
          <form action="https://gmail.us6.list-manage.com/subscribe/post?u=a83e1161e53837d436ac2f0f0&amp;id=4f6c2f1b46" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">

              <input type="email"  value="" name="EMAIL" id="mce-EMAIL" placeholder="Email">

              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a83e1161e53837d436ac2f0f0_4f6c2f1b46" tabindex="-1" value=""></div>
              <div class="clear"><input type="submit" value="Envoyer" name="Envoyer" id="mc-embedded-subscribe" class="btn"></div>

            </div>
          </form>
        </div>
        <p class="rgpd">En soumettant ce formulaire, vous acceptez que Résonance concerne et utilise vos
          données personnelles dans les conditions décrites dans la Politique de confidentialité. </p>
        <!-- <iframe width="540" height="305" src="https://c54cdbe9.sibforms.com/serve/MUIEAMbIceJgO-YVwLeFg8bCOBBGESSi7jD_qiY6if5jQ7i9oWunDUSn5utk_-QmUeArCA6cEn3-cVgs0_je-9cDxjfML4ASNtWJn6dlV3lKg7YDXzjVcgklp8PLG7o-HKNy9p4IvtmqU8xb9Y1btuQeixl1wPboIvAxg2X5-Wdbsto0EJxRUCZbG43FyZJuHwx4UcJLTXViRURp" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>-->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Communaute',
  data() {
    return {
      input: {
        emailAddress: "",
        password: ""
      },
    }

  },
  methods: {

  }
}
</script>


<style scoped>

.space{
  margin-bottom: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: space-between;
}
.actualite{
  margin-bottom: 10%;
}
.name4{
  padding-right: 29%;
}
.name1, .name2, .name3, .name4{
  padding-right: 0;
  border-radius:24px;
  margin-bottom: 20px;
}
.titleAvatar{
  width: 260px;
}
#nameMobile{
  display: none;
}
span{
  font-weight: bold;
}
.avatar{
  height: 50px;
  width: 50px;
}
.space{
  margin: 20px;
}
.name1{
  height: 200px;
}
.name3{
  height: 200px;
}
.avis{
  font-size: 12px;
  text-align: left;
  width: 304px;
  padding-right: 35%;


}

.rgpd{
  font-weight: lighter;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
#mce-EMAIL{
  width: 50%;
  padding: 12px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
}

#mc_embed_signup{ clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}



.champ{
  padding-top: 20px;
}
h2 {
  font-size: 34px;
  font-weight: bold;
  font-family: "Poppins SemiBold", sans-serif;
  color: #000000;
}
p{
  font-family: 'Quicksand', sans-serif;
  margin-bottom: 0;
  color: #000000;
}
label{
  color: #ffffff;
}
.contact{
  padding-top: 70px;
  padding-bottom: 70px;
  background: #ffdada;
}

img {
  width: 100%;
}

label {
  font-size: 15px;
  text-align: left!important;

}

h1 {
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
}





#login {
  width: 400px;
  border: 2px solid #CCCCCC;
  background-color: white;
  margin: auto;
  margin-top: 20px;
  padding: 20px;

}
#map{
  margin-left: 470px;
  margin-top: 20px;
}

* {box-sizing: border-box;}


.container {
  display: block;

  text-align: center;
  border-radius: 5px;
  background: #ffdada;
  padding: 20px;
  width: 50%;

}
.commu{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: space-between;
  width: auto;
}
.container-fluid{
  border-bottom: #e1366a 3px solid;
}
label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background: #e1366a;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.commu {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: space-between;
}
@media screen and (min-width: 320px) and (max-width: 770px){
  .container{
    width: auto;
  }
  #nameMobile{
    display: block;
  }
  .commu{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: stretch;
    align-content: space-between;
    width: auto;
  }
}
.spaces{
  margin:0 20px
}
.contact-form{
  padding: 5% 10% ;
}


</style>
