<template>
  <div class="background container-fluid">
    <div class="banner_content">
      <div class="container">
        <div class="row about">

            <img src="@/assets/content/testeurs.svg" alt="testeurs" width="auto" class="img">
          <div class="col-md-6" id="testeur">
            <h2>Vous aussi devenez testeurs</h2>
            <p>Le pannel de testeur de Résonance est constitué de réels technophiles
              qui veulent êtres des acteurs clés de cette industrie. Si vous pensez être
              à la hauteur de cette tâche, soumettez votre candidature !</p>

            <b-button href="https://quizzresonance.netlify.app/" class="btnQuiz">Passer le test !</b-button>



          </div>
          </div>


        </div>
      </div>
      <img alt="blob" class="blob2" src="../../assets/blob/blob2.svg">

  </div>
</template>

<script>





export default {
  name:'Video',
  data(){
    return{
      modalShow: false
    }
  }

}
</script>

<style scoped>

#testeur{
  padding-top: 10%;
  margin-left: 10%;
}
.btnQuiz{
  color: #ffffff;
  background: #e1366a;
  border-style: none;
  font-weight: bold;

}
.blob2{

  margin-right: 300px;
  margin-top: -13%;
  z-index: auto;

}

h2 {
  font-size: 34px;
  margin-bottom: 50px;
  color: #000000;
  font-weight: bold;
  font-family: "Poppins SemiBold", sans-serif;
}
p{
  font-family: "Quicksand", sans-serif;
}
.img{
  width: 360px;
  height: 380px;
  z-index: 1;

}


h1, p {
  color: black;
  padding-bottom: 5px;
}

h1 {
  font-size: 40px;

}

p{
  font-size: 15px;

}

.col-md-6 {
  padding: 15px;
}

.background{
  padding-top : 5%;

}

.btn:hover {
  transform: scale(1.1);
}




@media screen and (max-width: 1300px){

}
@media screen and (min-width: 320px) and (max-width: 770px) {
  .img {
    width: 80%;
    height: 80%;
    margin:auto;
    padding-top: 0;

  }
  .blob2{
    display: none;
  }
  .btnQuiz{
    width: 100%;
  }
  #testeur{
    margin-left: 15px;
  }
}
</style>
