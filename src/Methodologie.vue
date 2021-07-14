<template>
  <div class="content">
    <Methodo/>
    <TestUser/>
    <PlaceTest/>

  </div>
</template>

<script>
import Methodo from "@/components/Methodologie/Distance/Methodo";
import TestUser from "@/components/Methodologie/Distance/TestUser";
import PlaceTest from "@/components/Methodologie/Distance/PlaceTest";


export default {
name: "Methodologie",
  components: {
    PlaceTest,

    TestUser,
    Methodo,
  }
}
</script>

<style scoped>
h1, h2, h3, h4, h5, h6{
  font-family: "Poppins SemiBold", sans-serif;
}
p, span{
  font-family: "Quicksand", sans-serif;
}
</style>