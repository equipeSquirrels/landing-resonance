<template>

  <section id="content">

    <router-view></router-view>
    <Banner/>
    <Resonance />
    <Newsletter/>
    <Pack />
    <About />
    <Contacts />



  </section>

</template>

<script>

import Resonance from './components/Landing/Resonance'
import Pack from './components/Landing/Pack'
import About from './components/Landing/About'
import Contacts from './components/Landing/Contacts'
import Banner from './components/Landing/Banner'
import Newsletter from "./view/Newsletter";









export default {
  name: 'App',
  components:{
    Newsletter,
    Banner,


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
  font-family: "Poppins SemiBold",serif;
}
p{
  font-family: 'Quicksand', sans-serif;
}

</style>
