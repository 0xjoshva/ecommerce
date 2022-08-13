<!-- <template>
  <section id="home">
  <div id="landing">
   <img src="../assets/pc.png" alt="" id="hero">
   <div id="heading">
   <h1>EVOLVE</h1>
   <h4>your gaming setup</h4>
   <p><span id="highlight">become the beast,</span> take gaming to the next level with our over-engineered gaming rigs and top quality components</p>
   <router-link to="/marketplace"><button id="btnmarket">Browse Marketplace</button></router-link>
   </div>
   </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
@import url('http://fonts.cdnfonts.com/css/clash-display');
#home {
    background-color: var(--bg-color);
  background-image: url(../assets/contour.svg);
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
}

#hero{
  width: 40rem;
  height: auto;
  padding-right: 2rem;
  padding-top: 2.5rem;
}
#landing{
  display: flex;
  flex-direction: row-reverse;
 
}
#heading{
  color: white;
  margin:auto;
  font-family: 'Clash Display', sans-serif;
  display: flex;
  align-items: flex-start;
  
  flex-direction: column;
  padding-left: 3rem;
  
}
#heading::before{      
    content: "";
    position: absolute;
    left: 0;
    top: 12rem;
    height: 60vh;
    width: 0.3em;
    background: var(--dpurple);}
#heading h1{
  background: -webkit-linear-gradient(180deg, rgb(204, 156, 236), var(--dpurple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  font-size: 10rem;
  line-height: 10rem;
}
#heading h4{
  margin-left: 0.3rem;
  text-align: left;
  font-size: 2rem;
  line-height: 1.5rem;
}
#heading p{
  margin-top: 0.4rem;
  margin-left: 0.3rem;
  font-family: 'Inter', sans-serif;
  color: var(--lgrey);
  width: 50%;
}
#highlight{
  color: var(--lpurple);
}
#btnmarket{
  background: rgba(124, 17, 212, 0.212);

border-radius: 8px;
  margin-top: 1.5rem;
    font-family: 'Poppins', sans-serif;
    border: none;
    outline: none;
    padding: 0.5rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    color: rgba(255, 255, 255, 0.808);
    transition: box-shadow .3s ease-in-out;
}
#btnmarket:hover{
  box-shadow: 0px 0px 15px 2px var(--dpurple);
}
#btnmarket:focus{
  box-shadow: 0px 0px 100px 2px var(--dpurple);
  transform: scale(1.05);
}
</style> -->

<template>
<section class="home">
  <div class="text">
    <h1>Think outside <br> The box</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam atque ipsa.</p>
  </div>
  <div>
  <img src="" alt="" id="image">
  </div>
</section>
</template>
<script>
export default {
  
}
</script>
<style>
  .home{
    width: 100%;
    height: 100vh;
    background:radial-gradient(ellipse at 0% 55%, rgb(28, 1, 44) 0%, rgba(16, 16, 16, 1) 63%);
    background-attachment: fixed;
  }
  h1{
    color: white;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 6em;
  }
</style>