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
            utilisateurs, sans influencer leur comportement ni introduire le biais coginitif.<br/>
            Le test sera conduit de façon non modérée donc la rédaction des questions doit être neutre, compréhensible par tous, précise et concise.</b-card-body>
          </b-card>

          <b-card class="realisation">
            <b-card-title class="card-title">Protocole de test</b-card-title>
            <b-card-body class="light">Il s'agit de la clé de voûte du test utilisateur qui va être lancé. Une attention particulière doit être portée à
              son contenu et à la manière de soumettre des question. L'enjeu est ici de traduire les objectifs du test en questions pour les
              utilisateurs, sans influencer leur comportement ni introduire le biais coginitif.<br/>
              Le test sera conduit de façon non modérée donc la rédaction des questions doit être neutre, compréhensible par tous, précise et concise.</b-card-body>
          </b-card>

          <b-card class="analyse">
            <b-card-title class="card-title">Protocole de test</b-card-title>
            <b-card-body class="light">Il s'agit de la clé de voûte du test utilisateur qui va être lancé. Une attention particulière doit être portée à
              son contenu et à la manière de soumettre des question. L'enjeu est ici de traduire les objectifs du test en questions pour les
              utilisateurs, sans influencer leur comportement ni introduire le biais coginitif.<br/>
              Le test sera conduit de façon non modérée donc la rédaction des questions doit être neutre, compréhensible par tous, précise et concise.</b-card-body>
          </b-card>

          <b-card class="actions">
            <b-card-title class="card-title">Protocole de test</b-card-title>
            <b-card-body class="light">Il s'agit de la clé de voûte du test utilisateur qui va être lancé. Une attention particulière doit être portée à
              son contenu et à la manière de soumettre des question. L'enjeu est ici de traduire les objectifs du test en questions pour les
              utilisateurs, sans influencer leur comportement ni introduire le biais coginitif.<br/>
              Le test sera conduit de façon non modérée donc la rédaction des questions doit être neutre, compréhensible par tous, précise et concise.</b-card-body>
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
  width: 618px;
  height: 280px;
  color: white;
  border-radius: 25px;
  box-shadow: 0 10px 20px rgba(0,0,0, 0.2);
  margin-bottom: 5%;
}
#cardTesteur{
  margin-bottom: 5%;
}
.protocol{
  background-color: #C12051;
  margin-bottom: 9%;
}
.realisation{
  background-color: #A12148;
}
.analyse{
  background-color: #801D3B;
}
.actions{
  background-color: #65152D;
}

#vertical{
  background-image: url("../../../assets/cardTesteur/vertical.svg");
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 80%;
  width: 100%;
  height: 98%;



}

.light{
  font-weight : lighter;
  font-size: 16px;
}

.card-title{
  padding-left: 20px;
}

</style>