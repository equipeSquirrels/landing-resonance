<template>
  <div id="analyse">
    <div class="container">
      <div class="block">
        <h1 class="text-center">Vous souhaitez mettre en place un test utilisateur ?</h1>
        <p class="light text-center">Contactez-nous directement ou formulez votre demande de démo
          selon vos besoins.</p>

        <b-button variant="outline-light"  class="btnContact">Contactez-nous</b-button>
        <b-button variant="outline-light"  class="btnDemo">Demander une démo</b-button>
      </div>


    </div>
  </div>
</template>

<script>
export default {
name: "PlaceTesteur"
}
</script>

<style scoped>
#analyse{
  background-color: #F6F4FC;

}

.block{
  padding: 15%;
  background-color: #F6F4FC;

}

h1{
  font-weight: bold;
  color: black;
}
.light{
  color: black;
}
.btnDemo{
  margin-left: 2%;
  margin-top: 5%;
  border:2px solid #e1366a;
  border-radius: 12px;
  color: #e1366a;
}
.btnContact{
  margin-left: 25%;
  margin-top: 5%;
  border:2px solid #e1366a;
  border-radius: 12px;
  background-color: #e1366a;
  color: white;
}
</style>