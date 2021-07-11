<template>
  <div class="content">

    <Conduire/>
    <CardTesteur/>
  </div>
</template>

<script>

import Conduire from "@/components/Methodologie/Test/Conduire";
import CardTesteur from "@/components/Methodologie/Test/cardTesteur";

export default {
name: "Deroule",
  components:{
    CardTesteur,
    Conduire,
  }
}
</script>

<style scoped>
h1, h2, h3, h4, h5{
  font-family: Quicksand, sans-serif;
}
p{
  font-family: "Poppins SemiBold", sans-serif;
}
</style>