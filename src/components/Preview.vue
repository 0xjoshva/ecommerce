<template>
<section id="featured">

      <div class="vr">
    <img src="../assets/remote1.png" alt="" class="remote1 remote">
   <img src="../assets/headset.png" alt="" class="headset">
   <img src="../assets/remote2.png" alt="" class="remote2 remote">
  </div>
      <h1>UNREAL <span id="price">PRICING</span></h1>
      <div class="center">
      <button class="panel"><h4>UP TO 50% OFF</h4></button>
      <a href="" id="terms">Terms & Conditions Apply</a>
      </div>

    <!-- categorie filters -->
      <div class="container">
        <div class="item cat1" alt="systems">
            <div>
            <h2>GLACIER</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cupiditate error possimus?</p>
            <button>Add to Cart</button></div>
            <div>
                <h4>Specifications</h4>
                <ul>
                    <li>CPU:placeholer</li>
                    <li>GPU:placeholder</li>
                    <li>RAM: placeholder</li>
                </ul>
            </div>
            <img src="../assets/pc5.png" alt="" id="prebuilt1">
        </div>
        <div class="item cat2" alt="components">
            <img src="../assets/pcred.png" alt="" id="prebuilt2">
                                   <div>
                <h4>Specifications</h4>
                <ul>
                    <li>CPU:placeholer</li>
                    <li>GPU:placeholder</li>
                    <li>RAM: placeholder</li>
                </ul>
            </div>
            <div>
            <h2>CRIMSON</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, adipisci. Molestias, illum!</p>
            <button>Add to Cart</button></div>

        </div>
        <div class="item cat3" alt="peripherals">
            <div><h2>COBALT</h2>
            
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eos rem perferendis?</p>
            <button> Add to Cart</button></div>
                       <div>
                <h4>Specifications</h4>
                <ul>
                    <li>CPU:placeholer</li>
                    <li>GPU:placeholder</li>
                    <li>RAM: placeholder</li>
                </ul>
            </div>
            <img src="../assets/pcblue.png" alt="" id="prebuilt3">
        </div>
      </div>
</section>
</template>
<script scoped>
export default {
    
}
</script>
<style scoped>
#featured{
    background-color: var(--bg-color);
  background-image: url(../assets/curves2.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
}
#featured h1{
      background: -webkit-linear-gradient(180deg, rgb(183, 92, 243), rgb(153, 0, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  font-size: 6rem;
  line-height: 9rem;
    font-family: 'Clash Display', sans-serif;
    text-align: center;
    -webkit-text-fill-color: white;
}
#price{
    color: white !important;
    font-weight: 300;
    font-family: 'Clash Display', sans-serif;
      -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    
}

.vr{
   padding-right: 2rem;
  padding-top: 2.5rem;
  padding-left: 14rem;

}
.remote1{
     margin-top: 14rem;
  transform: translate(-1rem,12rem);
  width: 13rem;
  height: auto;
   animation: infinite 5.7s floating;
}
.remote2{
    margin-top: 5rem;
  transform: translate(-5rem, 10rem);
    width: 16rem;
  height: auto;
  animation: infinite 6.4s floating3;
}
.headset{
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
.center{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
}
.panel{
   background: rgb(153, 0, 255);
    width: 50rem;
    height: 5rem;
    border-radius: 5px;
     box-shadow: 0 4px 8px 0 rgba(22, 22, 22, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
     display: flex;
     justify-content: center;
     align-items: center;
     transition: box-shadow 0.3s ease-in-out;
}
.panel:hover{
    box-shadow: 0 4px 1rem 0 rgba(138, 18, 218, 0.2), 0 6px 20px 0 rgba(132, 25, 204, 0.19);
    cursor: pointer;
              -webkit-mask-image: linear-gradient(
    -200deg,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 0.85) 50%,
    rgba(0, 0, 0, 1) 75%
  );
  -webkit-mask-size: 200%;
  animation: shine 1s linear infinite;
}

.panel h4{
    color: white;
    font-family: 'Inter', sans-serif;
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
  #terms{
    font-family: 'Inter', sans-serif;
    color: rgba(255, 255, 255, 0.568);
    transition: 0.2s ease-in all;
  }
    #terms:hover{
    font-family: 'Inter', sans-serif;
    color: white;
  }
  .container{
    padding-top: 3rem;
    padding-bottom: 5rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   row-gap: 3rem;
  }
  .item{
  box-shadow: 0 0 0 4px #333;
  border-radius: 5px;
  height: 17rem;
  width: 75rem;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  }
   .item:nth-child(2) {
  display: flex;
  justify-content: flex-start;
  align-items: center;

}
  #prebuilt1{
    height: 25rem;
    width: auto;
  }
  #prebuilt2{
    height: 22rem;
    width: auto;
    transform: scaleX(-1);
  }
   #prebuilt3{
    height: 23rem;
    width: auto;
  }
</style>