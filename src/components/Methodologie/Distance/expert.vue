<template>
  <div id="banner">

    <div class="banner_content">
      <div class="col">
        <div class="col-md-6">
          <h1>Devenir expert testeur.</h1>
          <p class="techno">Influençons la technologie de demain.</p>
          <ul>
            <li>Recevez gratuitement des produits</li>
            <li>Partagez vos impressions</li>
          </ul>

          <b-button variant="outline-light" href="/#" class="btnDemo">Passer le test d'éligibilité</b-button>

        </div>

      </div>
    </div>
    <div class="graph">
      <img src="../../../assets/header/mobile/graph.svg" alt="graph">
    </div>
  </div>
</template>

<script>

export default {
  name:'expert',
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
.techno{
  font-size: 20px;
  font-weight: bold;
}
ul{
  padding-left: 18px;
}
#banner {


  background-image: url("../../../assets/header/expert.svg");
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 23%;
  padding-top: 5%;


}
#down{
  width: 24px;
  height: 24px;
}

li{
  list-style: circle;
}
h1, p{
  color: black;
  padding-bottom: 15px;
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
.graph{
  display: none;
}
@media screen and (min-width: 320px) and (max-width: 767px){
  #banner{
    background-image: none;
    background-color: #FFECEC;
    padding-bottom: 0;
  }
  .graph{
    display: block;
  }
}
.btnDemo{
  background: #e1366a;
  color: white;
  border-radius: 10px;
}
input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #222222;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {

  color: white;
  background: #e1366a;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
