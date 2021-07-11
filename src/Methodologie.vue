<template>
  <div class="content">
    <Methodo/>
    <TestUser/>
    <PlaceTest/>

  </div>
</template>

<script>
import Methodo from "@/components/Methodologie/Test/Methodo";
import TestUser from "@/components/Methodologie/Test/TestUser";
import PlaceTest from "@/components/Methodologie/Test/PlaceTest";


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

</style>