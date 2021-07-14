<template>
   <div class="footer">

   <div class="container d-md-block">
     <div class="row">
       <div class="col foot">
         <img alt="logo" src="../../assets/footer/resonance.svg">
       </div>
       <div class="col">
         <b-button variant="outline-light" class="btnConnexion"><img src="../../assets/header/user.svg" alt="user"> Connexion</b-button>
       </div>
     </div>
     <div class="row">
       <div class="col">
         <h6 class="fs-4 font-weight-bold">Entreprise</h6>
          <ul class="ps-0 light">
            <li>
              <router-link to="#" @click="modalShow = !modalShow" class="nav-link ps-0">Contactez-nous</router-link>
            </li>
            <li>
              <router-link to="/legale" class="nav-link ps-0">Mentions Légales</router-link>
            </li>
            <li>
              <router-link to="/Confidentialite" class="nav-link ps-0">Politique de confidentialité</router-link>
            </li>
            <li>
              <a href="https://www.docdroid.net/9HnFJGm/fly-on-the-wall-livre-blanc-resonance-pdf" class="nav-link ps-0">Presse</a>
            </li>
          </ul>
       </div>
       <div class="col">
         <h6 class="fs-4 font-weight-bold">Solution</h6>
         <ul class="ps-0 light">
           <li>
             <router-link to="/Product" class="nav-link ps-0">Produit</router-link>
           </li>
           <li>
             <router-link to="/Pannel" class="nav-link ps-0">Panel d'utilisateurs</router-link>
           </li>
           <li>
             <router-link to="/recrute" class="nav-link ps-0 pink">Demander un devis</router-link>
           </li>
         </ul>
       </div>
       <div class="col">
         <h6 class="fs-4 font-weight-bold">Méthodologie</h6>
         <ul class="ps-0 light">
           <li>
             <router-link to="/Testeurs" class="nav-link ps-0">Tests d'utilisateurs à distance</router-link>
           </li>
           <li>
             <router-link to="/Deroule" class="nav-link ps-0">Déroulé d'un test utilisateur</router-link>
           </li>
           <li>
             <router-link to="/recrute" class="nav-link ps-0 pink">Devenir testeur</router-link>
           </li>
         </ul>
       </div>
       <div class="col">
         <h6 class="fs-4 font-weight-bold">Blog</h6>
       </div>
     </div>

    <div class="row">
      <div class="col copyright">
        <p class="droitFooter">Copyright © 2021 Résonance. Tous droits réservés.<br/>
          Par Squirrels. Projet de fin d'année à titre fictif</p>
      </div>
      <div class="col RS">
        <a href="https://www.instagram.com/tech.resonance/"><img alt="instagram" class="instagram" src="@/assets/footer/instagram.svg"></a>
        <a href="https://www.linkedin.com/company/tech-r%C3%A9sonance/"><img alt="linkedin" class="linkedin" src="@/assets/footer/linkedin.svg"></a>
        <a href="https://www.youtube.com/channel/UCwLZBX3OMEk48ObauN4EMog"><img alt="youtube" class="youtube" src="@/assets/footer/youtube.svg"></a>
        <a href="https://www.twitch.tv/resonancetech"><img alt="twitch" class="twitch" src="@/assets/footer/twitch.svg"></a>
      </div>
    </div>


     </div>




   </div>


</template>


<script>
export default {
    name:'Footer',
  components:{}
}

</script>


<style>
.copyright{
  margin-right: 40%;
  padding-left: 68px;
  padding-right: 0;
}
.droitFooter{
  font-weight: lighter;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
}
.btnConnexion{
  border: 2px solid #e1366a;
  color: #e1366a;
  margin: auto;
}
.btnConnexion:hover{
  color: white;
  background-color: #e1366a;
}
.foot{
  margin-bottom:5%;
  padding-left: 5.3%;
  margin-right: 54%;
}
.pink{
  color: #e1366a;
}
.ps-0{
  font-size: 14px;
}
h6{
  font-size: 15px;
  padding-left: 55px;
}
.instagram{
  width: 24px;
  height: 24px;
  margin-right: 2%;
}
.linkedin{
  width: 24px;
  height: 24px;
  margin-right: 2%;
}
.twitch{
  width: 24px;
  height: 24px;
  margin-right: 2%;
}
.youtube{
  width: 24px;
  height: 28px;
  margin-top: 4px;
  margin-right: 2%;
}
a {
  color: #000000;
  font-weight: lighter;
}
p{
  font-family: "Quicksand", sans-serif;
}

a:hover {
  color: #E1366A;
}



#map {
  padding: 10px;
  width: 300px;
}

h5 {
  color: #E1366A;

}

.menub {
  display: grid;
}



.footer{
  background-color: #FAFAFA;
  padding-top: 40px;
  padding-bottom: 30px;
  color: #000000;
  font-family: Ubuntu, sans-serif;
  border-top: 3px solid #e1366a;
}
</style>
