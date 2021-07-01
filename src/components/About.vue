<template>
  <div class="background container-fluid">
    <div class="banner_content">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="@/assets/content/illustrations.png" alt="illustration" class="img">
          </div>
          <div class="col-md-6" id="testeur">
            <h2>Vous aussi devenez testeurs</h2>
            <p>Le pannel de testeur de Résonance est constitué de réels technophiles
            qui veulent êtres des acteurs clés de cette industrie. Si vous pensez être
            à la hauteur de cette tâche, soumettez votre candidature !</p>
            <p class="join">Rejoindre le pannel <a href="#contact"><img id="contact" alt="click" src="@/assets/content/arrow-right-1.png" ></a> </p>

            <b-button @click="modalShow = !modalShow" class="btn_video">C'est quoi un technophile ?</b-button>

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
.btn_video{
  color: #E1366A;
  background: #ffffff;
  border-style: none;
  font-weight: bold;
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

  color: #ffffff;
}
p{
  font-family: Ubuntu, sans-serif;
}
.img{
  width: 460px;
  height: 480px;
}


h1, p {
  color: white;
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
  background-color: #E1366A;
}

.btn:hover {
  transform: scale(1.1);
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
