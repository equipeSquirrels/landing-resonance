<template>
  <div id="products">


    <div className="container-fluid">
      <div class="container">
          <div class="row">
            <div class="col-md-6" id="resonance">
              <h2>Faites tester vos produits par de vrais experts</h2>
              <p>Notre but : faire tester à notre super panel de technophiles les meilleurs produits de
                demain et donc le vôtre !</p>
              <p class="responsive">Chaque utilisateur remplit un formulaire complet durant sa
                phase de testing pour évaluer au mieux le produit sur un maximum de critères.
                Cerise sur le gâteau, si votre techno fait l'unanimité auprès de vos testeurs,
                on vous octroie le <span>label Résonance</span> que vous pourrez utiliser à votre guise dans votre communication.</p>
            </div>
            <div class="col-md-6"></div>

          </div>

        </div>
      <div class="devis">
        <b-button variant="outline-light" class="btnDevis">Demander un devis</b-button>
      </div>
      </div>


  </div>
</template>


<script>
export default {
	name:'Resonance',
}

</script>



<style scoped>
#products{
  background-image: url("../../assets/header/bg-blob.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 5%;

  width: 100%;


}
.devis{
  background: #e1366a;
  padding: 5%;
  margin-top:-4%;
}
.btnDevis{
  border: 2px solid white;
  color: white;
  margin: auto;
}
.btnDevis:hover{
  color: #e1366a;
}
#resonance{

  padding-left: 9%;
  padding-bottom: 15%;
  padding-top: 15%;

}
.container{
  margin: 0 auto;

}

.col-md-6{
  padding-left: 9%;
  padding-right: 9%;
}

h2 {
  font-size: 34px;
  font-weight: bold;

}
p{
  font-family: 'Quicksand', sans-serif;
  margin-bottom: 0;
}





span {
  font-weight: bold;
  color:  #E1366A;
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

  .responsive{
    display: none;
  }
  .col-md-6{
    padding: 2%;
  }


}
</style>
