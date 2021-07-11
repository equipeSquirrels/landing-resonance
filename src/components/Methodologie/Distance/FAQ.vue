<template>
  <div class="container">
    <div class="row">

      <div class="col-md-4">
        <p class="bold">Qu'est-ce que je gagne avec Résonance ?</p>
        <p class="light">Bien que Testapic soit un excellent moyen d'arrondir ses fins de mois, il ne vous
          rendra pas riche pour autant (mais nous aimerions !).
          Le nombre de sollicitations pour les tests dépendent de nombreux facteurs tels que votre genre,
          votre âge ou encore votre localisation.</p>
      </div>
      <div class="col-md-4">
        <p class="bold">Je ne suis pas en France, puis-je m'inscrire ?</p>
        <p class="light">Malheureusement non. Notre offre Écho commençant, elle est seulement proposée en France pour l'instant.
          Une ouverture viendra prochainement.</p>
      </div>
      <div class="col-md-4">
        <p class="bold">Dois-je avoir une culture tech pour pouvoir tester ?</p>
        <p class="light">Tout à fait ! Il est nécessaire que vous ayez une culture tech solide. Votre curiosité fera la différence.
          Il est en effet nécessaire que vous vous y connaissiez en produit tech, que ce soit dans la compréhension de l'objet ou ses
          spécifications techniques.</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
name: "FAQ"
}
</script>

<style scoped>
.row{
  margin-top: 10%;
  margin-bottom: 10%;
}
.bold{
  font-size: 26px;
  font-weight: bold;
}
.light{
  font-size: 15px;
}

</style>