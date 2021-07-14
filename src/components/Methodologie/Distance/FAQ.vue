<template>
  <div class="container">
    <div class="row">

      <div class="col-md-4">
        <p class="bold">Qu'est-ce que je gagne avec Résonance ?</p>
        <p class="light">Avec Résonance, vous recevrez le produit inédit de votre choix
        parmi ceux disponibles sur notre catalogue.<br> Pendant un mois, vous pourrez en parler
        sur les réseaux sociaux et nous donnez vos impressions. Et à la fin de la période de test ?
        Le produit est à vous !</p>
      </div>
      <div class="col-md-4">
        <p class="bold">Je ne suis pas en France, puis-je m'inscrire ?</p>
        <p class="light">Malheureusement, non : pour l'instant, il n'est possible de recevoir des produits
          en dehors de la France Métropolitaine et des DOM-TOMs.</p>
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