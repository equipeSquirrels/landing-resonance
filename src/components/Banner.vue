

<script>
export default {
    name:'Banner'

}
</script>

<style scoped>
.container-fluid{

  height: 200px;
  background-color: #e1366a; /* For browsers that do not support gradients */
  background-image: linear-gradient(to bottom right, #911D65, #e1366a);

  padding: 0 40px;
  padding-left: 20%;
}
#banner{

}
#down{
  width: 24px;
  height: 24px;
}
h1, p{
  color: white;
  padding-bottom: 15px;
}



p{
  font-size: 24px;
  font-weight: lighter;
  font-family: 'Roboto Thin', sans-serif;
}
.col-md-6{
padding-left: 7%;

}
.scroll{
  font-size: 16px;

}

h1, p {
  color: white;
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

.col-md-6 {
  padding: 15px;
  padding-top: 50px;
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
</style>
