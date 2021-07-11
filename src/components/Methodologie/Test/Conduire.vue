<template>
  <div id="conduire">
    <div class="container">
      <section class="conduire">
        <h1 class="text-center">Conduire un test utilisateur à distance</h1>
        <p class="light text-center">Même si chaque test répond à des objectifs spécifiques, sa réussite est conditionnée au suivi
          d'une méthodologie standard. <br/>A travers nos outils et nos équipes, nous mettons tout en oeuvre pour
          que vous collectiez les retours les plus précieux possibles.</p>

      <b-button variant="outline-light" class="btnDemo">Demander une démo</b-button>
      </section>
    </div>

  </div>
</template>

<script>
export default {
name: "Conduire"
}
</script>

<style scoped>
#conduire{
  color: black;
}
.conduire {
  margin: 5% 28%;
}
.light{
  font-weight : lighter;
  font-size: 15px;
}
h1{
  font-weight: bold;
}
.btnDemo{
  background-color: #e1366a;
  color: white;
  margin: 0 30%;
  border-radius: 12px;
}
</style>