<template>
  <div id="collecte">

    <div class="banner_content">
      <div class="row">
        <div class="col-md-6">
          <h1>Collecter les attentes et les réflexions des utilisateurs.</h1>
          <p>Résonance propose l'une des meilleures solutions SaaS pour améliorer
          vos produits en fonction des retours testeurs.</p>


            <b-button variant="outline-light" class="btnDevis">Demander une démo</b-button>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Collecte'

}
</script>

<style scoped>

.btnDevis{
  background-color: #e1366a;
  color: white;
  margin: auto;
}
.img_header{
  width: 70%;
  height: 300px;
  padding-bottom: 2%;
}
img{
  width: auto;
}
#collecte {


  background-image: url("../../assets/produit/collecte.svg");
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 23%;
  padding-top: 5%;


}
#down{
  width: 24px;
  height: 24px;
}
h1, p{
  color: black;
  padding-bottom: 15px;
}

h1{
  font-size: 72px;
}

p{
  font-size: 24px;
  font-weight: lighter;
  font-family: 'Quicksand', sans-serif;
}
.col-md-6{
  padding-left: 10%;

}
.scroll{
  font-size: 16px;

}

h1, p {
  color: black;
  padding-bottom: 15px;
}

h1 {
  font-size: 40px;
  font-weight: bold;
}

p{
  font-size: 15px;
  font-weight: lighter;

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
@media screen and (min-width: 320px) and (max-width: 770px){
  .img_header{
    display: none;
  }
}
</style>
