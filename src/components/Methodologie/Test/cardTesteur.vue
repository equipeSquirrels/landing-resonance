<template>
  <div id="container cardTesteur">

      <b-row>
        <b-col>

          <div id="vertical">


          </div>
        </b-col>
        <b-col cols="8">
          <b-card class="protocol">
            <b-card-title class="card-title">Protocole de test</b-card-title>
            <b-card-body class="light">Il s'agit de la clé de voûte du test utilisateur qui va être lancé. Une attention particulière doit être portée à
            son contenu et à la manière de soumettre des question. L'enjeu est ici de traduire les objectifs du test en questions pour les
            utilisateurs, sans influencer leur comportement ni introduire le biais coginitif.<br class="space" />
            Le test sera conduit de façon non modérée donc la rédaction des questions doit être neutre, compréhensible par tous, précise et concise.</b-card-body>
          </b-card>

          <b-card class="realisation">
            <b-card-title class="card-title">Réalisation des tests</b-card-title>
            <b-card-body class="light">C'est le moment où les tests sont envoyés aux utilisateurs (En savoir plus sur notre panel).<br class="space" />
              A partir de ce moment précis, il ne reste plus qu'à attendre les retours des testeurs. Généralement cela prend 48 à 72h. Si
              les critères de segmentations sont complexes (par exemple cible BtoB), cela peut aller jusqu'à 1 semaine.</b-card-body>
          </b-card>

          <b-card class="analyse">
            <b-card-title class="card-title">Analyse</b-card-title>
            <b-card-body class="light">Toute analyse commence par une structuration. Avant d'analyser les données, il convient
              donc d'avoir une idée directrice de la structure finale du livrable (plan de la restitution). Les grands axes de l'analyse
              peuvent par exemple reposer sur :<br class="space" />
              le parcours des utilisateurs, via une analyse au fil de l'eau des différentes pages parcourues dans le tunnel, <br>
              les objectifs préalablement définis dans l'étude (notoriété, compréhension, utilisabilité, réassurance...), <br class="space"/>
              les fonctionnalités étudiées lors du test (moteur de recherche, filtres, etc.).</b-card-body>
          </b-card>

          <b-card class="actions">
            <b-card-title class="card-title">Actions / Optimisations</b-card-title>
            <b-card-body class="light">A présent, il est temps de mettre en place les optimisations. Vous pouvez
            facilement vous constituer une feuille de route grâce au tableau des recommandations qui vous permet
            de filtrer les constats les plus critiques ou présentant une fréquence d'occurence élevée.</b-card-body>
          </b-card>
        </b-col>
      </b-row>

  <div class="protocole">
  </div>
  </div>
</template>

<script>
export default {
name: "cardTesteur"
}
</script>

<style scoped>

.protocol, .analyse, .actions, .realisation{
  width: 418px;
  height: 280px;
  color: white;
  border-radius: 25px;
  box-shadow: 0 10px 20px rgba(0,0,0, 0.2);
  margin-bottom: 4%;

}

.space{
  line-height: 300%;
}
.protocol{
  background-color: #C12051;
  margin-bottom: 4%;
}
.realisation{
  background-color: #A12148;
  height: 220px;
}
.analyse{
  background-color: #801D3B;

}
.actions{
  background-color: #65152D;
  height: 200px;
}
br{
  margin-bottom: 50px;
}
#cardTesteur{
  margin-bottom: 5%;
}
#vertical{
  background-image: url("../../../assets/cardTesteur/vertical.svg");
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 80%;
  width: 100%;
  height: 100%;



}

.light{
  font-weight : lighter;
  font-size: 12px;
}

.card-title{
  padding-left: 20px;
}

</style>