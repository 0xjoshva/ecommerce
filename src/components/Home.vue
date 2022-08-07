<template>
  <section id="home">
  <div id="landing">
   <img src="../assets/pc.png" alt="" id="hero">
   <div id="heading">
   <h1>EVOLVE</h1>
   <h4>your gaming experience</h4>
   <p><span id="highlight">become the beast,</span> take gaming to the next level with our over-engineered gaming rigs</p>
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
  width: 47rem;
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
  
}
#heading::before{      
    content: "";
    position: absolute;
    left: 0;
    top: 12rem;
    height: 60vh;
    width: 0.3em;
    background: #9e00ce;}
#heading h1{
  background: -webkit-linear-gradient(180deg, rgb(204, 156, 236), rgb(164, 32, 252));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  font-size: 10rem;
  line-height: 9rem;
}
#heading h4{
  margin-left: 0.3rem;
  text-align: left;
  font-size: 2rem;
}
#heading p{
  margin-top: 0.4rem;
  margin-left: 0.3rem;
  font-family: 'Inter', sans-serif;
  color: var(--lgrey);
  width: 50%;
}
#highlight{
  color: rgb(125, 46, 170);
}
#btnmarket{
  background: rgba(96, 5, 182, 0.192);
box-shadow: 0px 0px 8px 5px rgba(118, 17, 212, 0.712);
border-radius: 8px;
  margin-left: 0.6rem;
  margin-top: 1rem;
    font-family: 'Poppins', sans-serif;
    border: none;
    outline: none;
    padding: 0.5rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    color: rgba(255, 255, 255, 0.808);
}

</style>
