<template>
  <div id="analyse">
    <div class="container">
      <div class="block">
        <h1 class="text-center">Analyser et présenter les résultats</h1>
        <p class="light text-center">Notre outil permet d'optimiser l'analyse des résultats que
          celle-ci soit réalisée par vos équipes ou par nos UX Designers :</p>
        <b-button variant="outline-light"  class="  btnDemo">Demander une démo</b-button>
      </div>


    </div>
  </div>


</template>

<script>
export default {
  name: "Analyse"
}
</script>

<style scoped>
#analyse{
  background-color: #8058F5;

}

.block{
  padding: 20%;
  background-color: #8058F5;

}

h1{
  font-weight: bold;
  color: white;
}
.light{
  color: white;
}
.btnDemo{
  margin-left: 35%;
  margin-top: 5%;
}
@media screen and (min-width: 320px) and (max-width: 767px){
  .block{
    padding: 10%
  }
  .btnDemo{
    margin-left: 20%;
  }
}
</style>