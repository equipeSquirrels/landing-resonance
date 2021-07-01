<template>

  <section id="content">
    <router-view></router-view>

    <Resonance />
    <Newsletter/>
    <Pack />
    <About />
    <Contacts />



  </section>

</template>

<script>

import Resonance from './components/Resonance'
import Pack from './components/Pack'
import About from './components/About'
import Contacts from './components/Contacts'

import Newsletter from "./view/Newsletter";








export default {
  name: 'App',
  components:{
    Newsletter,


    Resonance,
    Pack,
    About,
    Contacts,
    // eslint-disable-next-line vue/no-unused-components



  }
}

</script>



<style>

*{

	box-sizing: border-box;

}
h1, h2, h3{
  font-family: "Poppins SemiBold";
}
p{
  font-family: 'Ubuntu', sans-serif;
}

</style>
