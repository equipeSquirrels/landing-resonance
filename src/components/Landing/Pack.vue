<template>
  <div class="container-fluid">
      <div class="container">
        <div class="row">
          <b-col sm="9" id="packs">
            <h2>Résonance a l'offre parfaite pour vous : Echo</h2>
            <p>Nous nous adaptons à votre budget grâce à une offre dégressive qui
            s'adapte à vos besoins. Résonance garanti un suivi de qualité auprès d'un
            nombre modulable d'expert-testeurs qui vous seront alloués</p>
          </b-col>
          <div class="row">
          <div class="icon col-md-4 text-center">
            <img v-bind:src="require('../../assets/content/participants.svg')" class="center-block" width="110px" height="100px" alt="participant" />
            <h4>Participants</h4>
            <p>Vous choisissez précisement le nombre de testeurs pour votre étude.</p>
          </div>

          <div class="icon col-md-4 text-center">
            <img v-bind:src="require('../../assets/content/temps.svg')" width="90" height="100" class="center-block" alt="temps" />
            <h4>Temps</h4>
            <p>Nous adaptons la période de test au produit
              mis à disposition des testeurs.</p>
          </div>

          <div class="icon col-md-4 text-center" id="resonance">
            <img v-bind:src="require('../../assets/header/logo.svg')" class="center-block" width="100px" alt="echo" />
            <h4>ÉCHO</h4>
            <p>Notre solution SaaS maléable pour des rapports utilisateurs attractifs et user-friendly.</p>
          </div>
        </div>
        </div>
      </div>
  </div>
</template>

<script>


export default {
    name:'Pack'
}

</script>


<style scoped>
.arrowright{
  width: 14px;
}
.row{
  padding-left: 5%;
}
.col-md-4{
  width: 311px;
  height: 360px;
}
#packs{
  margin-left: 10%;
  margin-bottom: 10%;
  font-size: 16px;
}
h2 {
  font-size: 34px;
  margin-bottom: 50px;
  padding-top: 120px;
  font-weight: bold;
}
h1{
  padding-bottom: 20px;
}

#resonance{

}

@media screen and (max-width: 1300px){
  .icon {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  img {width: 30%}
}


.service .container {
  background-color: #444444;
}

#services {
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #f2f2f2;


}

h4 {
  margin: 15px;

}

p {
  font-size: 16px;
  font-weight: lighter;
  font-family: "Quicksand",sans-serif;
}

.container-fluid{
  padding-bottom: 5%;
  padding-left: 5%;
  background: #ffdada;



}
.center-block{
  width: 100px;
}
</style>
