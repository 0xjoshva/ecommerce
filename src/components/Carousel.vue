<!-- <template>
  <section id="about">
    <div class="wrapper">

      <div class="container">
        <div class="item1 item"></div>
        <div class="item2 item"></div>
        <div class="item3 item"></div>
      </div>

      <div class="para">
      <div class="text text1">
        <h1>INNOVATIVE</h1>
      </div>
      <div class="text text2">
        <h1>EFFICIENT</h1>
      </div>
      <div class="text text3">
        <h1>ROBUST</h1>
      </div>
      </div>

    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
#about {

  background-repeat: no-repeat;
  background-color: var(--bg-color);
  width: 100%;
  height: 120vh;
  color: var(--white);
  font-family: "Poppins", sans-serif;
}
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 2rem;
  height: fit-content;
  align-items: center;
}

.container{
  width: fit-content;
  height: 80vh;
  margin: 0 !important;
  padding-left: 3rem;
}
.item1 {
  width: 500px;
  height: 500px;
    transform: translate(50%, 50%);
  border-radius: 50%;
  border: 5px solid var(--dpurple);
  background-image: url(../assets/cpu.png);
  background-position: center;
  background-size: cover;
background-repeat: no-repeat;
  box-shadow: 20px 19px 200px 0px rgba(118, 17, 212, 0.26);
}

.item2 {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 5px solid var(--dpurple);
      transform: translate(11rem, 11rem);
  background-image: url(../assets/dpad2.jpg);
  background-position: center;
  background-size: cover;
      box-shadow: -19px 20px 400px 2px rgba(118, 17, 212, 0.26);

}
.item3 {
  width: 420px;
  height: 420px;
  border-radius: 50%;
  border: 5px solid var(--dpurple);
          transform: translate(31rem, -16rem);
  background-image: url(../assets/rtx3090.png);
  background-position: center;
  background-size: cover;
  box-shadow: 20px 20px 400px 2px rgb(118, 17, 212);
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
    padding-top: 4rem;
}
.text h1 {
  font-family: "Clash Display", sans-serif;
  font-weight: 500;
  font-size: 3rem;
}
.text p {
  font-family: "Inter", sans-serif;
  color: var(--lgrey);
  padding-right: 8rem;

}

.text1{
  padding-top: 18rem;

}
.para{
  width: 20rem;
}
</style> -->
<template>
<section id="about">
  <div class="content">
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
      <img src="../assets/bpc.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="../assets/wpc.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="../assets/rpc.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="text">
  <div class="heading">
    <h2>KEEP THE EDGE</h2>
  </div>
  <p>Stay at the top of your game by purchasing our computers. We are stockists of all major brands such as <span>NVIDIA</span>, <span>AMD</span>, <span>INTEL</span>, <SPAN>MSI</SPAN>, and <span>NZXT</span> just to name a few. We have a massive product range which varies at any given time.</p>
</div>
</div>
</section>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  #about {
  background: var(--bg-color);
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: fit-content;
  color: var(--white);
  font-family: "Poppins", sans-serif;
 display: flex;
 justify-content: center;
}
.content{
  background-image: linear-gradient(  90.3deg,  rgb(53, 52, 52) 10.9%, var(--bg-color) 87.1% );
   display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 4rem;
  width: fit-content;
  border-radius: 26px;
  width:68.5rem;
}
h2{
font-family: 'Clash Display';
font-weight: 500;
font-size: 4rem;
}

.text p{
  width: 30rem;
  color: var(--lgrey);
}
img{
  width: 26rem !important;
  max-width: 26rem !important;
  height: auto !important;
  filter: brightness(80%);
}
.carousel-control-prev{
  height: 26rem;
}
.carousel-control-next{
  height: 26rem;
}
.carousel-inner{
  max-width: 26rem !important;
}
p > span{
  color: var(--lpurple);
  font-weight: 600;
}
.text{
  align-self: center;
  padding-right: 4rem;
}
</style>