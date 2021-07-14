<template>
  <div class="content">

    <Conduire/>
    <CardTesteur/>
    <PlaceTest/>
  </div>
</template>

<script>

import Conduire from "@/components/Methodologie/Test/Conduire";
import CardTesteur from "@/components/Methodologie/Test/cardTesteur";
import PlaceTest from "@/components/Methodologie/Distance/PlaceTest";

export default {
name: "Deroule",
  components:{
    CardTesteur,
    Conduire,
    PlaceTest
  }
}
</script>

<style scoped>
h1, h2, h3, h4, h5{
  font-family: "Poppins SemiBold", sans-serif;
}
p{
  font-family: "Quicksand", sans-serif;
}
</style>