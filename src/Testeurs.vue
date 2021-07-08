<template id="testeurs">
  <section>
    <expert/>
    <Work/>
    <FAQ/>
    <Communaute/>
  </section>
</template>

<script>
import expert from "@/components/Methodologie/expert";
import Work from "@/components/Methodologie/Work";
import FAQ from "@/components/Methodologie/FAQ";
import Communaute from "@/components/Methodologie/Communaute";

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

p{
  font-family: Quicksand, sans-serif;
}
h1, h2, h3, h4, h5, h6{
  font-family: "Poppins SemiBold", sans-serif;
}

</style>