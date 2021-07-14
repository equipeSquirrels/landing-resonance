<template>
  <div id="formulaire">
    <div class="container">
    <h1>Obtenez vos participants <br>en quelques clics</h1>
    <b-row>
      <b-col cols="8">
        <b-card class="formulaire">
          <b-card-title></b-card-title>
          <b-card-body class="form">
            <b-form>
              <div class="quantity">
                <b-card-title>Type d'étude</b-card-title>
                <b-card-body class="soustitre">Nombre de participant requis</b-card-body>
                <b-input-group>
                  <b-input-group-prepend>
                    <b-btn class="moins" @click="decrement()">-</b-btn>
                  </b-input-group-prepend>

                  <b-form-input type="number" min="0" :value="quantity"></b-form-input>

                  <b-input-group-append>
                    <b-btn class="plus" @click="increment()">+</b-btn>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </b-form>
            <b-card-title class="Profil">Profil à recruter</b-card-title>
            <b-card id="contre">
              <b-card-body class="contrepartie"><span class="bold">Notre prix inclue la contrepartie offerte aux participants et nos frais de service.</span>
              Notre algorithme s'ajuste à chaque étape selon le type d'études, le coût de la vie correspondant aux pays sélectionnés (pour
              garder une contrepartie attrayante) et la complexité du recrutement.</b-card-body>
            </b-card>
            <div>
              <h4>Données démographiques</h4>
              <label for="range-2"><span class="bold">Âge</span> 0 - 100 </label>
              <b-form-input id="range-2" v-model="value" type="range" min="0" max="100" step="1"></b-form-input>
              <div class="mt-2">Âge : {{value}}</div>
            </div>
            <h5 id="genre">Genre</h5>
            <div class="genre">
              <b-card-body class="checkFemme">
                <b-form-radio>Femme</b-form-radio>
              </b-card-body>
              <b-card-body class="check">
                <b-form-radio>Homme</b-form-radio>
              </b-card-body>
              <b-card-body class="check">
                <b-form-radio>Autre</b-form-radio>
              </b-card-body>
            </div>
            <h5 id="niveau">Niveau de diplôme</h5>
            <div>
              <b-form-select v-model="selected" :options="options" class="selection"></b-form-select>
            </div>
            <h4 id="centre">Centres d'intérêt et comportement</h4>
            <h5 id="interets">Centres d'intérêts</h5>
            <div>
              <b-form-select v-model="selected" :options="options" class="interet"></b-form-select>
            </div>
            <div>
              <h5 id="perso">Critères personnalisés</h5>
              <b-card id="criteres">

              <b-card-body class="critere">
                <b-form-select v-model="selected" :options="options" class="selectionn"></b-form-select>
                <b-form-input v-model="text" placeholder="A inscrire" class="inscrire"></b-form-input>
              </b-card-body>
              </b-card>
              <b-button id="plus"><span class="plusrose">+</span> Ajoutez un critère personnalisé</b-button>
            </div>
            <h4 id="ciblage">Ciblage avancé</h4>
            <b-row>
              <b-col class="toggle">
                <input type="checkbox" class="inputCheck" id="switch" /><label class="labelSwitch" for="switch">Toggle</label>
              </b-col>
              <b-col cols="8">
                <h5 id="quotas">Nécessite des quotas</h5>
                <p class="light">Cette option vous permet de demander une répartition précise entre des profils (ex: 20% d'hommes
                et 80% de femmes). En laissant cette option décochée, nous essaierons de faire une répartition, distribution équitable
                de profils à travers vos critères, mais sans garantie !</p>
              </b-col>
            </b-row>
            <b-card id="decrire">
              <h5 id="quota">Décrivez-nous vos quotas</h5>
              <b-card-body id="cardText">
                <b-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Ex: 20% d'hommes et 80% de femmes,                                                           Pas plus de 3 personnes dans la tranche d'âge 25-35 ans"

                ></b-textarea>
              </b-card-body>

            </b-card>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <div id="cout">

        </div>
      </b-col>
    </b-row>
  </div>
  </div>


</template>

<script>
export default {
name: "Formulaire",
  data(){
  return{
    quantity: 0,
    value: '0',
    selected: null,
    options:[
      { text: 'A sélectionner'}
    ]
  }
  },
  methods:{
  increment(){
    this.quantity++;
  },
    decrement(){
    if(this.quantity === 0){
      alert("Vous ne pouvez pas allez en dessous de 0 particpants");
    } else{
      this.quantity--;
    }
    }
  }
}
</script>

<style scoped>
#cout{
  background-image: url("../../../assets/recrutement/cout.svg");
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 80%;
  padding-top: 5%;
  width: 100%;
  height: 50%



}
.formulaire{
  border: 2px solid #F7F9FB;
  border-radius: 24px;
  box-shadow: 0 10px 10px rgba(0,0,0, 0.2);
  margin-bottom: 10%;


}
.soustitre{
  padding: 5% 0;
}

#genre, #niveau, #interets, #perso{
  padding: 0;
  color: black;
}
#niveau{
  margin-top: 5%;
}

#cardText{
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 1%;
}
#perso{
  margin: 5% 0;
  font-weight: bold;
}
.toggle{
  margin-right: -88%;
}
#quotas{
  font-weight: bold;
  margin-bottom: 2%;
  color: black;
}
#quota{
  font-weight: bold;
  margin-bottom: 2%;
  font-size: 16px;
  color: black;
}
#textarea{
  height: auto;
  padding-bottom: 20%;
  border: 12px;
}
#formulaire{
  background-image: url("../../../assets/recrutement/formulaire.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 5%;
  padding-bottom: 5%;
  width: 100%;

}
#decrire{
  margin-bottom: 10%;
  margin-left: 12%;
  padding-bottom: 0;
  width: 508px;
  border-radius: 24px;
  background-color: #F7F9FB;
  border : none;
}
.light{
  font-size: 15px;
}
#centre, #ciblage{
  margin-top: 13%;
  margin-bottom: 5%;
  font-weight: bold;
}
.bold{
  font-weight: bold;
}

.genre{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: center;

}
p{
  font-family: Poppins, sans-serif;
}
h1, h2, h3, h4, h5, h6{
  font-family: "Quicksand", sans-serif;
}

.critere{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: flex-start;

}
.plusrose{
  color: #e1366a;
}
#plus{
  color: rgba(0, 0, 0, 0.5);
  margin-top: 3%;
}
.checkFemme, .check{
  border: 1px solid #C4C4C4;
  border-radius: 12px;
  background-color: #F5F5F5;
  padding: 10px;
}

.selection, .interet{
  border: 1px solid #C4C4C4;
  border-radius: 12px;
  background-color: #F5F5F5;
  padding: 20px;
}
 #plus, #criteres{
  border: none;
  border-radius: 12px;
  background-color: #F5F5F5;
  padding: 10px;
}

.selectionn, .inscrire{
  border: 1px solid #C4C4C4;
  border-radius: 12px;
  background-color: #F5F5F5;
  color: rgba(0, 0, 0, 0.5);
  padding: 20px;
}
#criteres{
  background-color: #F7F9FB;
  border-radius: 12px;
}
.inscrire{
  width: 300px;
}
.selection{
  width: 440px;
}
.selectionn{
  width: 220px;
}
.check, .inscrire{
  margin-left: 4%;
}
#contre{
  border-style: none;
  right: 25px;

}
h4{
  font-weight: bold;
}
.quantity {
  max-width: 50%;
  width: 100%;
}
.moins{
  background-color: #ffdada;
  border: 1px solid #e1366a;
  color: #e1366a;
}
input[type=range]{

  color: #e1366a;
}
form{
  margin-bottom: 5%;
}
.contrepartie{
  background-color: #F6F4FC;
  border-radius: 12px;
  width: 105%;
}
.plus{
  border: 1px solid #7159B2;
  color: #7159B2;
  background-color: #F6F4FC;
}
.quantity input {
  text-align: center;
}
h1{
  font-weight: bold;
}
.inputCheck[type=checkbox]{
  height: 0;
  width: 0;
  visibility: hidden;
}

.labelSwitch {
  cursor: pointer;
  text-indent: -9999px;
  width: 61px;
  height: 37px;
  background:#E9E9EB;
  display: block;
  border-radius: 100px;
  position: relative;
  margin-top: -20px;
}

.labelSwitch:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 27px;
  height: 27px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

.inputCheck:checked + label {
  background: #e1366a;
}

.inputCheck:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

.labelSwitch:active:after {
  width: 50px;
}




</style>