<template>
   <div class="footer">

   <div class="container text-center">
       <div class=" text-center">
         <h5>Informations</h5>
         <div class="menub">
           <router-link to="/legale" title="Mentions légales"><p>Mentions légales</p></router-link>
         <a href="#">Politique de cookies</a>
         <a href="#">Confidentialité</a>
         </div>
       </div>

       <div class="icon text-center block_2">
         <p>Tous droits réservés©</p>
       </div>
     </div>



   </div>


</template>


<script>
export default {
    name:'Footer',
  components:{}
}

</script>


<style>

a {
  color: #000000;
  font-weight: lighter;
}
p{
  font-family: "Roboto Thin", sans-serif;
}

a:hover {
  color: #E1366A;
}



#map {
  padding: 10px;
  width: 300px;
}

h5 {
  color: #E1366A;

}

.menub {
  display: grid;
}



.footer{
  background-color: #FAFAFA;
  padding-top: 40px;
  padding-bottom: 30px;
  color: #000000;
  font-family: Ubuntu, sans-serif;
}
</style>
