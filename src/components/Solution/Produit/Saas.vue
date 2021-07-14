<template>
  <div id="saas">
    <div class="container">
      <div class="information">
        <div class="row">
          <div class="col-md-6 imgs">
            <img alt="echo" src="../../../assets/header/logo.svg" width="110px" height="110px" class="echo"/>
          </div>
          <div class="col-md-6 texte1">
            <h3 class="bold">ÉCHO, solution SaaS</h3>
            <p class="medium">Orientée data-visualisation</p>
            <span class="light">Outil de traitement des données et vitrine présentant les résultats d'analyses, notre plateforme SaaS a été développé
          dans un soucis de précision et de simplicité.</span>
          </div>
        </div>
        <div class="row" id="desktops">
          <div class="col-md-6 texte">
            <h3 class="bold">Tableau de préconisations hiérarchisées</h3>
            <p class="medium">Un tableau de bord opérationnel</p>
            <span class="light">Véritable outil d'aide à la création d'une roadmap de correctifs et d'évolutions,
            ce tableau de bord opérationnel rassemble les différentes préconisations issues de l'analyse des tests.</span>
          </div>
          <div class="col-md-6">
            <img alt="tableau" src="../../../assets/produit/tableau.svg" width="117px" height="117px" class="tableau"/>
          </div>
        </div>

        <div class="row" id="mobiles">
          <div class="col-md-6">
            <img alt="tableau" src="../../../assets/produit/tableau.svg" width="117px" height="117px" class="tableau"/>
          </div>
          <div class="col-md-6 texte">
            <h3 class="bolde">Tableau de préconisations hiérarchisées</h3>
            <p class="medium">Un tableau de bord opérationnel</p>
            <span class="light">Véritable outil d'aide à la création d'une roadmap de correctifs et d'évolutions,
            ce tableau de bord opérationnel rassemble les différentes préconisations issues de l'analyse des tests.</span>
          </div>

        </div>

        <div class="row ">
          <div class="col-md-6">
            <img alt="synthese" src="../../../assets/produit/synthese.svg" width="119px" height="118px" class="synthese"/>
          </div>

          <div class="col-md-6 texte3">
            <h3 class="bold">Présentation de synthèse</h3>
            <p class="medium">Un outil de communication interne</p>
            <span class="light">Toujours sur la base des données utilisateurs, elle permet une communication ciblée
            et optimale pour mobiliser les parties prenantes en interne suite à l'étude utilisateur.</span>
          </div>
        </div>
      </div>



        <b-button variant="outline-light"  class="  btnDemoPlein">Demander une démo</b-button>





    </div>
    <section class="blob4"></section>
  </div>
</template>

<script>
export default {
  name: "Saas"
}
</script>

<style scoped>
.dev {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: space-between;
}
.bold{
  font-size: 26px;
  font-weight: bold;
}
.medium{
  font-size: 15px;
  font-weight: bold;
}
.light{
  font-size: 15px;
}
 .texte{
  padding: 5% 7%;
}
 .texte1{
   padding-right: 7%;
   padding-top: 5%;
 }
 .texte3{
   padding-right: 7%;

 }
.tableau{
  margin-left: 32%;
  margin-top: 15%;
}
.echo{
  margin-left: 24%;
  margin-top: 15%;
}
.synthese{
  margin-left: 24%;
  margin-top: 5%;
}
.btnDemoPlein{
  margin-left: 40%;
  margin-top: 10%;
  background-color: #e1366a;
  color: white;
  border-radius: 12px;
}

h2{
  font-weight: bold;
  padding-bottom: 5%;

}

#saas{
  margin-top: 5%;
}
.blob4{
  background-image: url("../../../assets/produit/blob4.svg");
  background-repeat: round;
  background-size: cover;
  padding-bottom: 23%;
  padding-top: 5%;
  padding-right: 120px;
  margin-right: 77%;


}
#mobiles{
  display: none;
}
@media screen and (min-width: 320px) and (max-width: 767px){
  #desktops{
    display: none;
  }
  #mobiles{
    display: block;
  }
  .information{
    margin: 0 4%;
  }
  .echo, .tableau, .synthese{
    margin-left: 30%;
  }
  .blob4{
    display: none;
  }
  .texte, .texte3, .texte1{
    margin-left: 10%;
    padding-right: 7%;
    padding-top: 5%;
  }


  .btnDemoPlein{
    margin-left: 30%;

  }

  #saas{
    margin-bottom: 10%;
  }
  .col-md-6{
    padding-left: 0;
    padding-right: 0;
  }
  .bolde{
    font-size: 20px;
    font-weight: bold;

  }
}
</style>