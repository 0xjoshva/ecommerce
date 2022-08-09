<template>
  <section id="featured">
    <!-- <div class="vr">
      <img src="../assets/remote1.png" alt="" class="remote1 remote" />
      <img src="../assets/headset.png" alt="" class="headset" />
      <img src="../assets/remote2.png" alt="" class="remote2 remote" />
    </div> -->
    <h1>UNREAL <span id="price">PRICING</span></h1>
    <div class="center">
      <button class="panel"><h4>UP TO 50% OFF</h4></button>
      <a href="" id="terms">Terms & Conditions Apply</a>
    </div>
    <div class="container">
      <div v-for="pc in data" v-bind:key="pc.id" class="item">
        <div class="text">
          <h2 class="title">{{ pc.title }}</h2>
          <p class="description">
            {{ pc.description }}
          </p>
          <p class="pricing"><span class="before">R{{ pc.price_before }}</span> <span class="now">R{{ pc.price_now }}</span></p>
          <button id="prebtn">Add to Cart</button>
        </div>
  
        <img v-bind:src="pc.image" alt="" id="image" />
      </div>
    </div>
  </section>
</template>
<script scoped>
import prebuilt from "/data/prebuilt.json";
export default {
  data() {
    return {
      data: prebuilt,
    };
  },
};
</script>
<style scoped>
#featured {
  background-color: var(--bg-color);
  background-image: url(../assets/curves2.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
    padding-top: 10rem;
}
#featured h1 {
  background: -webkit-linear-gradient(
    180deg,
    rgb(183, 92, 243),
    rgb(153, 0, 255)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  font-size: 6rem;
  line-height: 9rem;
  font-family: "Clash Display", sans-serif;
  text-align: center;
  -webkit-text-fill-color: white;
}
#price {
  color: white !important;
  font-weight: 300;
  font-family: "Clash Display", sans-serif;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.vr {
  padding-right: 2rem;
  padding-top: 2.5rem;
  padding-left: 14rem;
}
.remote1 {
  margin-top: 14rem;
  transform: translate(-1rem, 12rem);
  width: 13rem;
  height: auto;
  animation: infinite 5.7s floating;
}
.remote2 {
  margin-top: 5rem;
  transform: translate(-5rem, 10rem);
  width: 16rem;
  height: auto;
  animation: infinite 6.4s floating3;
}
.headset {
  width: 34rem;
  height: auto;
  animation: infinite 8s floating2;
}

@keyframes floating {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-2rem);
  }
  100% {
    transform: translatey(0px);
  }
}
@keyframes floating2 {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-0.8rem);
  }
  100% {
    transform: translatey(0px);
  }
}
@keyframes floating3 {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-0.4rem);
  }
  100% {
    transform: translatey(0px);
  }
}
.center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  padding-bottom: 2rem;
}
.panel {
  background: rgb(153, 0, 255);
  width: 50rem;
  height: 5rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(22, 22, 22, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s ease-in-out;
}
.panel:hover {
  box-shadow: 0 4px 1rem 0 rgba(138, 18, 218, 0.2),
    0 6px 20px 0 rgba(132, 25, 204, 0.19);
  -webkit-mask-image: linear-gradient(
    -200deg,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 0.85) 50%,
    rgba(0, 0, 0, 1) 75%
  );
  -webkit-mask-size: 200%;
  animation: shine 1s linear infinite;
}

.panel h4 {
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
}
@keyframes shine {
  from {
    -webkit-mask-position: 150%;
  }
  to {
    -webkit-mask-position: -50%;
  }
}
#terms {
  font-family: "Inter", sans-serif;
  color: rgba(255, 255, 255, 0.568);
  transition: 0.2s ease-in all;
}
#terms:hover {
  font-family: "Inter", sans-serif;
  color: white;
}
.container {
  padding-top: 3rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;
  column-gap: 3rem;
}
.item {
  /* box-shadow: 0 0 0 4px #333; */
  border-radius: 5px;
  background: rgb(32, 32, 32);
  min-height: 17rem;
  height: fit-content;
  width: fit-content;
  flex-direction: column-reverse;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#image{
  min-height: 16rem;
  height: 21rem;
  width: auto;
  transform: scaleX(1);
}
#image:nth-of-type(){
 transform: scaleX(-1);
}

.text{
width: 20rem;
color: rgb(228, 228, 228);
font-family: "Inter", sans-serif;
font-size: 1rem;
font-weight: 100;
padding: 1rem;
}
.specs{
width: 20rem;
height: fit-content;
color: rgb(228, 228, 228);
font-family: "Inter", sans-serif;
font-size: 1rem;
font-weight: 100;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding-left: 4rem;
padding-right: 4rem;
  border-left: 2px solid #333;
 border-right: none;
  margin: 2rem;
  margin-left: 4rem;

}
.specs:nth-of-type(odd){
  border-right: 2px solid #333;
 border-left: none;
 margin-right: 6rem;
 margin-left: 0;

}
ul{
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}
.title {
  font-weight: 900;
  font-size: 2rem;
  line-height: 2rem;
  font-family: "Inter", sans-serif;
  width: fit-content;
}
#prebtn{
  margin-top: 1rem;
  outline: none;
  border: none;
  color: white;
  text-align: center;
  font-family: "Inter", sans-serif;
  padding: 0.4rem 1rem;
  border-radius: 3px;
 background: var(--bg-color);
 border: 2px solid rgb(115, 38, 202);
 transition: 0.4s all ease-in-out;

}
#prebtn:hover{
transform: scale(1.02);
    box-shadow: -1px 0px 25px 1px #7e00e1;
}
#prebtn:focus{
  transform: scale(0.97);
}
.text p{
  color: rgb(185, 185, 185);
}
.pricing{
  display: flex;
  flex-direction: column;
  padding-top:1rem;
}
.before{
  text-decoration: line-through;
  text-decoration-color: #7e00e1;
  color: rgb(175, 175, 175);
}
.now{
  font-size: 2rem;
  color: white;
}

</style>
