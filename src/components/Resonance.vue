<template>
    <div className="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="@/assets/content/image.png" alt="image" class="img_content" >
          </div>
          <div class="col-md-6" id="products">
            <img src="@/assets/content/Resonance.png" alt="logo" class="logo_noir" width="auto">
            <div class="resonance-container">

              <h2>Faites tester vos produits par de vrais technophiles</h2>
              <p>Notre but : faire tester à notre super panel de technophiles les meilleurs produits
                de demain et donc le vôtre !</p>
              <p class="responsive">Chaque utilisateur remplit un formulaire complet durant sa phase de testing pour évaluer
                au mieux le produit sur un maximum de critères. Cerise sur le gâteau, si votre techno
                fait l'unanimité auprès de vos testeurs, on vous octroie le <span>label Résonance</span> que vous pourrez utiliser à votre guise dans votre communication.</p>
             <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/vsoO76T4_AQ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
            </div>
          </div>
        </div>
      </div>
      <div id="divider"><hr class="solid"></div>
		</div>
</template>


<script>
export default {
	name:'Resonance',
}

</script>



<style scoped>

#products{

}
.col-md-6{
  padding-left: 9%;
}
.solid{
  border-top: 1px solid #E1366A;

  margin: auto;
}
#divider{
  padding: 5%;
}
h2 {
  font-size: 34px;

}
p{
  font-family: 'Roboto Thin', sans-serif;
  margin-bottom: 0;
}
.logo_noir{
  padding-top: 20px;
  width: inherit;



}

.img_content{
  padding-top:20px;
  padding-bottom: 20px ;
  width: 465px;
  height: 492px;
}




span {
  font-weight: bold;
  color:  #E1366A;
}

.btn {
  display: flex;
  margin-top: 25px;
}

.btn:hover {
  transform: scale(1.1);
}



.resonance-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
}

.row{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
}

@media screen and (min-width: 320px) and (max-width: 770px){
  .img_content{
    width: 100%;
    height: 100%;
  }
  .responsive{
    display: none;
  }
  .col-md-6{
    padding: 2%;
  }

  
}
</style>
