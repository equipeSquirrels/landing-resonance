<template>
  <div id="methodo">
    <div id="distance">
      <div class="banner_content">
        <div class="col">
          <div class="col-md-6">
            <h1>Méthodologie des Tests Utilisateurs à Distance.</h1>
            <p>La mise en place d'un test utilisateur à distance nécessite
              une expertise spécifique. Découvrez notre méthodologie, construite
              sur plus de 8 ans d'expérience.</p>


            <b-button variant="outline-light" class="btnDemo">Demander une démo</b-button>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Methodo"
}
</script>

<style scoped>
#methodo{
  margin-bottom: 5%;
}
.btnDemo{
  background-color: #e1366a;
  color: white;
  margin: auto;
}

h1, p{
  color: black;
  padding-bottom: 15px;
}

h1{
  font-size: 40px;
}

p{
  font-size: 15px;
  font-weight: lighter;
  font-family: 'Quicksand', sans-serif;
}
.col-md-6{
  padding-left: 10%;



}
#qualite{
  margin: 5% 0;
}

#sincere{
  padding-bottom: 5%;
}
h2, h1{
  font-weight: bold;
}
.imgProfil, .imgFinance, .imgTests{
  width: 93%;
}
.bold{
  font-size: 21px;
  font-weight: bold;
}

.light{
  font-size: 15px;
}
#distance {
  background-image: url("../../../assets/testuser/methodologie.svg");
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 23%;
  padding-top: 5%;
}
</style>