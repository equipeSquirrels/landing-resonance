<template>
  <div id="testUser">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img alt="questce" src="../../../assets/testuser/questce.svg"/>
        </div>
        <div class="col-md-6 texte">
          <h3>Qu'est ce qu'un test utilisateur ?</h3>
          <p class="bold">C'est une méthode permettant d'évaluer un produit en le faisant tester par des utilisateurs.</p>
          <span class="light">Le plus souvent, il s'agit de produits du domaine informatique (par exemple : un logiciel
          ou un site web) dans le cadre de l'intervention ergonomique. Elle est considérée comme une démarche indispensable
          dans la conception de produit, car la plus efficace pour évaluer l'ergonomie d'une application ou d'un site web.
          Il permet d'observer directement la façon dont l'utilisateur se sert d'une application et ainsi identifier concrètement
          les véritables difficultés qu'il rencontre, aussi appelées problème d'utilisabilité. Le test utilisateur se distingue
          de l'audit ergonomique, ou audit expert, où un spécialiste de l'ergonomie infomatique réalise une évaluation à l'aide de
          différentes méthodes telles que la grille d'observation, l'analyse heuristique, la check-list d'évaluation, etc. sans
          impliquer d'utilisateurs.</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 texte">
          <h3>Pourquoi réaliser des tests utilisateurs ?</h3>
          <p>Simplement parce que <span class="bold">vous n'êtes pas votre propre utilisateur !</span> </p>

          <span class="light">Il faut donc prendre en compte leurs attentes réelles pour comprendre comment construire une interface
            qui réponde à leurs besoins. C'est alors un moyen :<br/>
           de gagner du temps,<br/>
           d'économiser des budgets <br/>
           d'augmenter l'adhésion <br/>
           d'optimiser.</span>
        </div>
        <div class="col-md-6">
          <img alt="pourquoi" src="../../../assets/testuser/pourquoi.svg" class="pourquoi"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <img alt="faire" src="../../../assets/testuser/faire.svg"/>
        </div>
        <div class="col-md-6 textes">
          <h3>A quel moment faire des tests utilisateurs ?</h3>
          <p class="bold">Le plus tôt possible !</p>
          <span class="light">Les questions et objectifs qui justifient un test utilisateur
          distant sont nombreux. Globalement, 2 phases se distinguent :</span>
          <p class="bolde">En conception : approche orientée utilisateur</p>
          <span class="light">Évaluer la bonne compréhension du parcours et de l'offre sur des maquettes animées, pour corriger le cap avant de partir
          trop loin dans la mauvaise direction,<br/>
          Prioriser les efforts de développements sur des features et un parcours déjà validé par les utilisateurs,<br/>
          Identifier en amont les freins et les idées d'amélioration de l'UX pour optimiser les performances de la version à venir.</span>
          <p class="bolde">En Production : Amélioration continue de l'existant</p>
          <span class="light">Comprendre comment les utilisateurs se comportent réellement sur votre interface,<br/>
          Déceler les grains de sable qui viennent dégrader l'expérience utilisateur dans le parcours,<br/>
          Identifier les améliorations et actions correctrices qui vont optimiser les performances.</span>
        </div>
      </div>
    </div>




  </div>
</template>

<script>
export default {
name: "TestUser"
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
  font-size: 15px;
  font-weight: bold;
}
.bolde{
  font-size: 15px;
  font-weight: bold;
  margin: 20px 0;
}
.medium{
  font-size: 15px;
  font-weight: bold;
}
.light{
  font-size: 15px;
}
.texte, .textes{
  padding-bottom: 5%;
}

.faire{
  padding-left: 30%;
}
h2 {
  font-weight: bold;
  padding-bottom: 5%;
}
h3{
  font-weight: bold;

}

#testUser{
  margin: 5% 0;
}
</style>