<template id="testeurs">
  <div class="container-fluid">
    <expert/>
    <Work/>
    <FAQ/>
    <Communaute/>

  </div>
</template>

<script>
import expert from "@/components/Methodologie/Distance/expert";
import Work from "@/components/Methodologie/Distance/Work";
import FAQ from "@/components/Methodologie/Distance/FAQ";
import Communaute from "@/components/Methodologie/Distance/Communaute";


export default {
  name: "Testeurs",
  components: {
    expert,
    Work,
    FAQ,
    Communaute,


  }
}
</script>

<style scoped>


p, span{
  font-family: Quicksand, sans-serif;
}
h1, h2, h3, h4, h5, h6{
  font-family: "Poppins SemiBold", sans-serif;
}

</style>