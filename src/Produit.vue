<template>
  <Collecte></Collecte>
  <infos></infos>
  <analyse></analyse>
  <saas></saas>
</template>

<script>


import Saas from "@/components/Solution/Saas";
import Collecte from "@/components/Solution/Collecte";
import Infos from "@/components/Solution/Infos";
import Analyse from "@/components/Solution/Analyse";





export default {
name: "Produit",
  components:{
    Analyse,
    Infos,
    Collecte,

    Saas,




  }
}
</script>

<style scoped>
p{
  font-family: Quicksand, sans-serif;
}
h1, h2, h3, h4, h5, h6{
  font-family: "Poppins SemiBold", sans-serif;
}
</style>