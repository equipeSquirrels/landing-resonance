<template>
  <div className="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-6" id="resonance">
          <h2>Comment ça marche ?</h2>
          <p>Pour réaliser des test rémunérés, inscrivez-vous dès maintenant. Suivez notre guide et commencez à réaliser vos premier tests.</p>
          <ul>
            <li>Résonance vous permet de tester gratuitement et depuis chez vous de nombreux produits issu de la tech</li>
            <li>Vous réalisez des tests qui vous correspondent et analysez des produits en exclusivité.</li>
          </ul>

          <b-button variant="outline-light" class="btnTesteur" to="/methodologie">Je souhaite devenir testeur</b-button>
          <b-button variant="outline-light"  class="btnTest">Voir des exemples de tests</b-button>
        </div>
        <div class="col-md-6" id="blob1">

          <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/vsoO76T4_AQ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
        </div>
      </div>
      </div>
    <div class="banner_content">
      <div class="container">
        <div class="row">
          <div id="frame">
            <img src="@/assets/content/frame.svg" alt="frame" width="auto" class="img">

          </div>
        </div>
        <div class="row">
          <div class="col-md-6" id="testeur">
            <h2>De quoi ai-je besoin pour commencer ?</h2>
            <p class="pannel">Avoir au moins 18 ans </p>
            <p>Pour des raisons légales, seules les personnes majeures peuvent s'inscrire à notre programme de bêta-testing.</p>
            <p class="pannel">Une connexion internet</p>
            <p>En tant que testeur vous devrez nous faire remonter vos impressions, questionnements et sentiments vis-à-vis des produits testés via
            un portail web de notre site dédié.</p>
          </div>
        </div>
      </div>
      <img alt="blob" id="blob2" src="../../../assets/blob/blob2.svg">
    </div>

    <div class="devis">
      <b-button variant="outline-light" class="btnDevis">Demander un devis</b-button>
    </div>

</div>

</template>


<script>
export default {
  name:'Work',
}

</script>



<style scoped>

ul{
  padding-left: 18px;
  margin: 10% 0;
}
li{

  list-style: circle;

}
#resonance p, .pannel{
  font-size: 26px;
  font-weight: bold;
}

.btnTest{

  background: transparent;
  color: #e1366a;
  border: 1px solid #e1366a;
  border-radius: 10px;
  font-size: 15px;
}

.btnTesteur{
  background-color: #e1366a;
  color: white;
  border-radius: 10px;
  font-size: 15px;
  margin-right: 20px;
}
.devis{
  background: #e1366a;
  padding: 5%;
  margin-top:5%;

}
.btnDevis{
  border: 2px solid white;
  color: white;
  margin: auto;
  display: flex;
}
.btnDevis:hover{
  color: #e1366a;
}
#resonance{

  padding-left: 9%;
  padding-bottom: 10%;
  padding-top: 15%;

}
.blob1{

  margin-left: 83%;
  margin-top: 20%;
  width: 80%;
}
.col-md-6{
  padding-left: 9%;
}
#frame{
  padding-bottom: 10%;
}
.solid{
  border-top: 1px solid #E1366A;

  margin: auto;
}
#divider{
  padding: 5%;
}
h2 {
  font-size: 34px;
  font-weight: bold;

}
p{
  font-family: 'Quicksand', sans-serif;
  margin-bottom: 0;
  font-size: 18px;
}
.logo_noir{
  padding-top: 20px;
  width: inherit;



}


.img_content{
  padding-top:20px;
  padding-bottom: 20px ;
  width: 465px;
  height: 492px;
}




span {
  font-weight: bold;
  color:  #E1366A;
}




.btn:hover {
  transform: scale(1.1);
}



.resonance-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
}

.row{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
}

@media screen and (min-width: 320px) and (max-width: 770px){
  .img_content{
    width: 100%;
    height: 100%;
  }
  .responsive{
    display: none;
  }
  .col-md-6{
    padding: 2%;
  }
  #testeur{
    padding-top: 10%;
  }
  .btnQuiz{
    color: #ffffff;
    background: #e1366a;
    border-style: none;
    font-weight: bold;

  }
  #blob2{

    margin-right: 10%;
    margin-top: -20%;
    width: 50%;

  }
  .join{
    padding-right: 20px;
  }
  #contact{
    width: 24px;
    height: 24px;

  }
  h2 {
    font-size: 34px;
    margin-bottom: 50px;

    color: #000000;
  }
  p{
    font-family: Ubuntu, sans-serif;
  }
  .img{
    width: 360px;
    height: 380px;

  }


  h1, p {
    color: black;
    padding-bottom: 5px;
  }

  h1 {
    font-size: 40px;

  }

  p{
    font-size: 15px;

  }

  .col-md-6 {
    padding: 15px;
  }

  .background{
    padding : 60px 0;

  }

  .btn:hover {
    transform: scale(1.1);
  }
  .row{
    margin-bottom: 10%;
  }



  @media screen and (max-width: 1300px){
    #video {
      width: 400px;
      height: 220px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 770px) {
    .img {
      width: 100%;
      height: 100%;
    }
  }

}
</style>
