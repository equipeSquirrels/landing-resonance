<template>
<div class="content">

  <Collecte></Collecte>
  <Infos></Infos>
  <Analyse></Analyse>
  <Saas></Saas>
</div>

</template>

<script>
import Infos from "@/components/Solution/Produit/Infos";
import Collecte from "@/components/Solution/Produit/Collecte";
import Analyse from "@/components/Solution/Produit/Analyse";
import Saas from "@/components/Solution/Produit/Saas";

export default {
name: "Product",
  components:{
  Infos,
  Collecte,
  Analyse,
    Saas




  }
}
</script>

<style scoped>
p{
  font-family: Quicksand, sans-serif;
}
h1, h2, h3, h4, h5, h6{
  font-family: "Poppins SemiBold", sans-serif;
  font-weight: bold;
}
</style>