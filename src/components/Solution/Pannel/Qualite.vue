<template>
  <div id="panel">
   <div id="service">
     <div class="banner_content">
       <div class="row">
         <div class="col-md-6">
           <h1>Des technophiles à votre service.</h1>
           <p>Résonance vous propose un panel d'expert et pertinent pour tester vos produit avec de nombreux critères d'analyse.</p>


           <b-button variant="outline-light" class="btnDemo">Demander une démo</b-button>

         </div>

       </div>
       <div class="graph">
         <img src="../../../assets/panel/mobile/graph.svg" alt="graph">
       </div>
     </div>



  </div>
  <div id="qualite">
    <div class="container qualcont">
      <h2 class="text-center">Un panel de qualité</h2>
      <p id="sincere" class="text-center">L'authenticité, la sincérité et la véracité des informations de nos
      utilisateurs sont pour nous des enjeux prioritaires.</p>
      <b-row class="qual">
        <b-col class="col-md-4 qualcol">
          <img alt="profil" src="../../../assets/panel/profil.svg" class="imgProfil"/>
          <p class="bold">Des profils de testeurs experts</p>
          <p class="light">Afin de garantir des tests de qualité en
          fonction d'une cible privilégiée, notre responsable panel
          s'assure de la pertinence des profils ainsi que de leur fibre
          technophile dans les domaines visés par l'étude.</p>
        </b-col>
        <b-col class="col-md-4 qualcol">
          <img alt="finance" src="../../../assets/panel/finance.svg" class="imgFinance"/>
          <p class="bold">Une sollicitation financière à la hauteur des tests</p>
          <p class="light">La rémunération des testeurs se fait de deux manières :
          gain fiducier et en nature. <br/>
          De plus, la rémunération, elle, ne dépend pas du nombre de retours. De cette
          manière, nous limitons les biais d'analyse de personnes attirées par le gains.</p>
        </b-col>
        <b-col class="col-md-4 qualcol">
          <img alt="test" src="../../../assets/panel/testsConnaissance.svg" class="imgTests"/>
          <p class="bold">Des tests de connaissance réguliers</p>
          <p class="light">Nos utilisateurs passent régulièrement des tests de culture tech
          afin de s'assurer de la qualité de leur retours.</p>
        </b-col>
      </b-row>
    </div>
  </div>
  <div id="procedure">

  </div>

  </div>
</template>

<script>
export default {
name: "Qualite"
}
</script>

<style scoped>
#panel{
  margin-bottom: 5%;
}
.btnDemo{
  background-color: #e1366a;
  color: white;
  margin: auto;
}
.qual{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: space-between;

}

#service {
  background-image: url("../../../assets/produit/collecte.svg");
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 23%;
  padding-top: 5%;
}
h1, p{
  color: black;
  padding-bottom: 15px;
}

h1{
  font-size: 40px;
}

p{
  font-size: 15px;
  font-weight: lighter;
  font-family: 'Quicksand', sans-serif;
}
.col-md-6{
  padding-left: 5%;

}
#procedure{
  background-image: url("../../../assets/panel/procédure.svg");
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 80%;
  padding-top: 5%;
}
#qualite{
  margin: 5% 0;
}

#sincere{
  padding-bottom: 5%;
}
h2{
  font-weight: bold;
}
.imgProfil, .imgFinance, .imgTests{
  width: 93%;
}
.bold{
  font-size: 21px;
  font-weight: bold;
}
.graph{
  display: none;
}
.light{
  font-size: 15px;
}
@media screen and (min-width: 320px) and (max-width: 767px){
  #service {
    background-color: #F6F4FC;
    padding-bottom: 0;
    background-image: none;
  }
  .qual{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: stretch;
    align-content: space-between;

  }
  .btnDemo{
    margin-left: 20%;
  }
.graph{
  width: 100%;
  margin-left: 12%;
  display: block;
}

  .qualcont{
    padding-left: 20px;
  }
  .qualcol{
    padding-right: 0;
  }
  #procedure{
    background-image: url("../../../assets/panel/mobile/procedure_mobile.svg");
    background-repeat: no-repeat;
    background-size: contain;
    padding-bottom: 300%;
    margin-top: 10%;
  }
  h1{
    margin: 0 5%;
  }
  p{
    margin: 0 5%;
  }
  }
</style>