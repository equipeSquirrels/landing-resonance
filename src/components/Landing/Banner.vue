<template>
  <div id="banner">

    <div class="banner_content">
      <div class="row">
        <div class="col-md-6">
          <h1>Impulser la technologie de demain.</h1>
          <p class="light">La plateforme qui révolutionne la relation entre bêta-testeurs et créateurs de la tech.
            Testez votre éligibilité à devenir testeur grâce au quiz fait spécialement pour vous !</p>

          <p class="tech">Découvrir le futur de la tech <a href="#down"><img id="down" alt="click" src="@/assets/header/arrow-down-1.svg" ></a> </p>
         </div>


      </div>
    </div>
    <div id="fusee"></div>
  </div>
</template>

<script>
export default {
    name:'Banner'

}
</script>

<style scoped>
.img_header{
  width: 70%;
  height: 300px;
  padding-bottom: 2%;
}

img{
  width: auto;
}
#banner {
  background-image: url("../../assets/header/home.svg");
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 23%;
  padding-top: 5%;
}
#down{
  width: 14px;
  height: 14px;
}
h1, p{
  color: black;
  padding-bottom: 15px;
}




.col-md-6{
padding-left: 15%;
  padding-right: 0;

}
.scroll{
  font-size: 16px;

}

h1, p {
  color: black;
  padding-bottom: 15px;
}

h1 {
  font-size: 36px;
  font-weight: bold;
}

.light{
  font-size: 15px;
  font-weight: lighter;
  margin-right: 15px;

}


 .tech{
  color: #e1366a;
}

.background{
  padding-top: 100px;
  background:  #E1366A;
  height: 100%;

  padding-bottom: 70px;
}


.btn:hover {
  transform: scale(1.1);
}

img{
  width: 100%;
}
@media screen and (min-width: 320px) and (max-width: 767px){
 #banner{
   background-image: url("../../assets/home_mobile/home_mobile.svg");
   background-repeat: no-repeat;
   background-size: cover;
  width: 100%;
 }
 #fusee{
   background-image: url("../../assets/home_mobile/fusee.svg");
   background-repeat: no-repeat;
   background-size: contain;

 }

}
</style>
