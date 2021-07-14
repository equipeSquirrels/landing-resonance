<template>
  <div class="background container-fluid">
    <div class="banner_content">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="@/assets/content/testeurs.svg" alt="testeurs" width="auto" class="img">

          </div>
          <div class="col-md-6" id="testeur">
            <h2>Vous aussi devenez testeurs</h2>
            <p>Le pannel de testeur de Résonance est constitué de réels technophiles
            qui veulent êtres des acteurs clés de cette industrie. Si vous pensez être
            à la hauteur de cette tâche, soumettez votre candidature !</p>

            <b-button @click="modalShow = !modalShow" class="btnQuiz">Passer le test !</b-button>

          <b-modal v-model="modalShow">
            <iframe
                width="460"
                height="315"
                src="https://www.youtube.com/embed/vsoO76T4_AQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
          </b-modal>

        </div>
        </div>
      </div>
      <img alt="blob" class="blob2" src="../../assets/blob/blob2.svg">
    </div>
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
}
.btnQuiz{
  color: #ffffff;
  background: #e1366a;
  border-style: none;
  font-weight: bold;

}
.blob2{

  margin-right: 300px;
  margin-top: -20%;

}
.join{
  padding-right: 20px;
}
#contact{
  width: 24px;
  height: 24px;

}
h2 {
  font-size: 34px;
  margin-bottom: 50px;
  color: #000000;
  font-weight: bold;
  font-family: Quicksand, sans-serif;
}
p{
  font-family: "Poppins", sans-serif;
}
.img{
  width: 360px;
  height: 380px;
  padding-top: 20%;
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
  padding : 60px 0;

}

.btn:hover {
  transform: scale(1.1);
}
.row{
  margin-bottom: 10%;
}



@media screen and (max-width: 1300px){
  #video {
    width: 400px;
    height: 220px;
  }
}
@media screen and (min-width: 320px) and (max-width: 770px) {
  .img {
    width: 100%;
    height: 100%;
  }
}
</style>
