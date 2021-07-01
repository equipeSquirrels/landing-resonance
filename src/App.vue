<template>

  <div id="app">
    <Header />

    <router-view></router-view>
    <Footer />
  </div>

</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'



export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}

</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto:wght@100;400&family=Ubuntu:wght@300&display=swap');

*{


	box-sizing: border-box;
	outline: none;
	list-style: none;
	text-decoration: none;
	scroll-behavior: smooth;
}

</style>
