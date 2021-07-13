<template>
  <div class="content">
    <Formulaire/>
    <PlaceTesteur/>
  </div>

</template>

<script>
import Formulaire from "@/components/Methodologie/Test/Formulaire";
import PlaceTesteur from "@/components/Methodologie/Test/PlaceTesteur";

export default {
name: "Recrutement",
  components:{
    Formulaire,
    PlaceTesteur
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