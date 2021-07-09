<template>
  <div id="infos">
    <div class="container">
      <h2 class="text-center">Vous collectez</h2>
      <div class="row">
        <div class="col-md-6">
          <img alt="video" src="../../assets/produit/video.svg"/>
        </div>
        <div class="col-md-6 texte">
          <p class="bold">...des vidéos commentées à voix haute</p>
          <span class="light">Nos tests vidéos enregistrent l'écran de l'utilisateur pendant qu'il navigue en autonomie</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 textes">
          <p class="bold">...des verbatims écrits</p>
          <span class="light">Dans le cadre de tests questionnaires, les utilisateurs formalisent pendant leur
          navigation des commentaires écrits traduisant leur perception, leur ressenti et/ou leur compréhension.
          A travers une analyse sémantique de leur valence, ces verbatims apportent alors une nuance aux résultats chiffrés.</span>
        </div>
        <div class="col-md-6">
          <img alt="verbatims" src="../../assets/produit/verbatims.svg" class="verbatims"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <img alt="donnees" src="../../assets/produit/donnees.svg"/>
        </div>
        <div class="col-md-6 texte">
          <p class="bold">...des données quantitatives</p>
          <span class="light">Lors de nos tests quantitatifs, des échantillons représentatids d'utilisateurs
          fournissent des données chiffrées issues de questions fermées. Combien d'utilisateurs sont
          passés par le menu ? Combien ont trouvé "facile" le parcours de souscription ? Ce type de test
          apportera une réponse statistiquement fiable à ces questions.</span>
        </div>
      </div>
    </div>
    <section class="blob3">

    </section>
    <div class="container">
      <div class="row dev">
        <div class="col-md-6">
          <h3>A chaque étape du développement</h3>
          <p class="medium">
            Prototypes, MVP, produits sortis...
          </p>
          <p>N'attendez pas de sortir un produit pour le faire tester par la communauté !
            Envoyez vos prototypes ou MVP à nos utilisateurs technophiles et recueillez des informations
            pertinentes pour les améliorer.</p>
        </div>
        <div class="col-md-6">
          <h3>Pour tous vos produits</h3>
          <p class="medium">Des wearables à l'électroménager... </p>
          <p>Faites tester un grand nombre de produits auprès de notre panel d'utilisateurs experts et collectez des datas utiles à leur amélioration.</p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
name: "Infos"
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
  font-size: 26px;
  font-weight: bold;
}
.medium{
  font-size: 15px;
  font-weight: bold;
}
.light{
  font-size: 15px;
}
.texte, .textes{
  padding: 5% 0;
}
.verbatims{
  padding-left: 30%;
}
h2{
  font-weight: bold;
  padding-bottom: 5%;

}
.blob3{
  background-image: url("../../assets/produit/blob3.svg");
  background-repeat: round;
  background-size: cover;
  padding-bottom: 23%;
  padding-top: 5%;
  margin-left: 76%;

}
#infos{
  margin: 5% 0;
}

</style>