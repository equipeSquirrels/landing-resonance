<template>
  <div id="conduire">
    <div class="container">
      <section class="conduire">
        <h1 class="text-center">Conduire un test utilisateur à distance</h1>
        <p class="light text-center">Même si chaque test répond à des objectifs spécifiques, sa réussite est conditionnée au suivi
          d'une méthodologie standard. <br/>A travers nos outils et nos équipes, nous mettons tout en oeuvre pour
          que vous collectiez les retours les plus précieux possibles.</p>

      <b-button variant="outline-light" @click="modalShow = !modalShow" class="btnDemo">Demander une démo</b-button>
      </section>
    </div>
    <b-modal
        v-model="modalShow"
        class="modal bg-dark"
        ok-variant="transparent"
        ok-title=""
        ok-disabled
        cancel-disabled
        cancel-variant="transparent"
        cancel-title="">


      <form class="contact-form text-center" @submit.prevent="sendEmail">
        <h1 class="hmodal">Nous contacter</h1>
        <div id="divider"><hr class="solid"></div>
        <label>Name</label>
        <input type="text" name="from_name"/>
        <label>Email</label>
        <input type="email" name="from_email"/>
        <input class="btnSubmit" type="submit" value="Envoyer">
      </form>
    </b-modal>
  </div>

</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name:'Conduire',
  data(){
    return{
      modalShow: false,
    }
  },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_6s1lz1d', 'template_4hsf5ml', e.target, 'user_hL82gPuLVc6rUHST4FkvM')
          .then((result) => {
            alert('SUCCESS!', result.status, result.text);
          }, (error) => {
            alert('FAILED...', error);
          });
    }
  }
}
</script>

<style scoped>
label{
  color: #222222;
  font-size: 15px;
  text-align: left!important;


}
.hmodal{
  color: #222222;
}
.contact-form{
  padding-top: 70px;
  padding-bottom: 70px;
  color: #222222;

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
#conduire{
  color: black;
}
.conduire {
  margin: 5% 28%;
}
.light{
  font-weight : lighter;
  font-size: 15px;
}
h1{
  font-weight: bold;
}
.btnDemo{
  background-color: #e1366a;
  color: white;
  margin: 0 30%;
  border-radius: 12px;
}
@media screen and (min-width: 320px) and (max-width: 767px) {
  .conduire {
    margin: 5% 0;
  }
  .btnDemo{
    margin: 0 24%;
  }
  #vertical{
    margin: 7px 50%;
  }
}
</style>