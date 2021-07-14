<template>

  <div class="contact container-fluid" id="contacts">
    <div class="container">
      <div class="row">
        <div class="sm-9">
          <h2>Recevez le meilleure de l'actualité tech</h2>
          <p>Inscrivez votre adresse mail et recevez régulièrement les dernières
            actualités tech.</p>
        </div>
        <div id="mc_embed_signup">
          <form action="https://gmail.us6.list-manage.com/subscribe/post?u=a83e1161e53837d436ac2f0f0&amp;id=4f6c2f1b46" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">

              <input type="email"  value="" name="EMAIL" id="mce-EMAIL" placeholder="Email">

              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a83e1161e53837d436ac2f0f0_4f6c2f1b46" tabindex="-1" value=""></div>
              <div class="clear"><input type="submit" value="Envoyer" name="Envoyer" id="mc-embedded-subscribe" class="btn"></div>

            </div>
          </form>
        </div>
        <p class="rgpd">En soumettant ce formulaire, vous acceptez que Résonance concerne et utilise vos
        données personnelles dans les conditions décrites dans la Politique de confidentialité. </p>
       </div>
  </div>
  </div>
</template>

<script>

export default {
 name: 'Login',
 data() {
   return {
     input: {
       emailAddress: "",
       password: ""
     },
   }

 },
  methods: {

  }
}
</script>


<style scoped>


.rgpd{
  font-weight: lighter;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
#mce-EMAIL{
  width: 50%;
  padding: 12px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
}

#mc_embed_signup{ clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}



.champ{
  padding-top: 20px;
}
h2 {
  font-size: 34px;
  font-weight: bold;
  font-family: "Poppins SemiBold", sans-serif;
  color: #000000;
}
p{
  font-family: 'Quicksand', sans-serif;
  margin-bottom: 0;
  color: #000000;
}
label{
  color: #ffffff;
}
.contact{
  padding-top: 70px;
  padding-bottom: 70px;
  background: #FFECEC;
}

img {
  width: 100%;
}

label {
  font-size: 15px;
  text-align: left!important;

}

h1 {
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
}




 * {box-sizing: border-box;}


.container {
  display: block;

  text-align: center;
  border-radius: 5px;
  background:#FFECEC;
  padding: 20px;
  width: 50%;

}

.container-fluid{
  border-bottom: #e1366a 3px solid;
}
label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background: #e1366a;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

 @media screen and (min-width: 320px) and (max-width: 770px){
   .container{
     width: auto;
   }
   input, #mce-EMAIL{
     width: 90%;
   }
   #mce-EMAIL{
     margin-right: 0;
   }
 }
.contact-form{
  padding: 5% 10% ;
}
</style>
