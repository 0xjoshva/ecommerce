<template>
  <section class="home">
    <div class="content">
      <div class="text">
        <h1>RTX <span>3080</span></h1>
        <p id="subheading">play with an unfair advantage</p>
        <router-link to="/marketplace" id="btnmarket"
          >Browse Marketplace</router-link
        >
      </div>
      <div class="rtxdiv">
        <img src="../assets/rtx101.png" alt="" id="rtx" />
      </div>

      <div class="scrolldown" style="--color: skyblue">
        <div class="chevrons">
          <div class="chevrondown"></div>
          <div class="chevrondown"></div>
        </div>
      </div>
      <div id="products">
        <div class="product1 product">
          <div class="type">
            <h6 class="title">NVIDIA RTX 3090</h6>
            <p class="desc">
              Corporis repudiandae dignissimos aperiam reiciendis quidem
              nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <router-link to="/product/2" id="btn123">View more</router-link>
          </div>
          <img src="../assets/rtx3090.png" alt="" id="image1" />
        </div>
        <div class="product2 product">
          <div class="type">
            <h6 class="title">NZXT CPU COOLER</h6>
            <p class="desc">
              Corporis repudiandae dignissimos aperiam reiciendis quidem
              nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <router-link to="/product/1" id="btn123">View more</router-link>
          </div>
          <img src="../assets/coolerresized.png" alt="" id="image2" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.home {
  width: 100%;
  height: fit-content;
  background: radial-gradient(
    ellipse at 0% 55%,
    rgb(28, 1, 44) 0%,
    rgba(16, 16, 16, 1) 63%
  );
  /* background-attachment: fixed; */
  padding-bottom: 5rem;
  background-attachment: fixed;
}
.text {
      padding-top: 1rem;
  margin: 0 auto;
  width: fit-content;
  text-align: center;
}
h1 {
  color: rgb(241, 241, 241);
  font-family: "ClashDisplay-Light";
  font-size: 6em;
  line-height: 5rem;
  vertical-align: middle;
}
#subheading {
  color: white;
  font-family: "ClashDisplay-ExtraLight";
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 1rem;
}
#products {
  width: 80vw;
  height: 15rem;
  margin: 0 auto;
  border-radius: 26px;
  display: flex;
  flex-direction: row;
  font-family: "Poppins";
  color: rgb(211, 211, 211);
  /* Created with https://www.css-gradient.com */
  background: #1c012c;

  background: linear-gradient(to bottom, #250238, #101010be);
}
h6 {
  font-size: large;
  font-family: "Inter";
  font-weight: 500;
  line-height: 2rem;
}
.product p {
  color: var(--lgrey);
  font-size: 0.87rem;
  font-weight: 400;
  font-family: "Poppins";
  width: 100%;
  margin-bottom: 1rem;
  text-align: left;
  padding-right: 2rem;
}
.product {
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
}
#btn123 {
  border: 2px solid rgba(99, 2, 155, 0.534);
  outline: none;
  border-radius: 26px;
  background: transparent;
  color: white;
  padding: 0.35rem 1rem;
  font-size: 0.9rem;

  text-decoration: none;
}
.type {
  padding-left: 2rem;
}
.product2 {
  border-left: 1px solid rgba(255, 255, 255, 0.048);
}
#image2 {
  padding-left: 3rem;
}
#image1 {
  padding-left: 2rem;
}
#btnmarket {
  margin: 0 auto;
  text-decoration: none;
  color: white;
  background: linear-gradient(#10101000, #101010) padding-box,
    linear-gradient(to right, rgb(60, 8, 83), rgb(17, 17, 17)) border-box;
  border-radius: 50em;
  border: 2px solid transparent;
  padding: 0.4rem 1rem;
  transition: all 2s ease-in-out;
  font-family: 'Poppins';
}
#rtx {
  width: 70vw;
  margin: 0 auto;
  padding-top: 1rem;
}
.rtxdiv {
  display: flex;
  padding-bottom: 3rem;
}

/* not made by me */
.scrolldown {
  --color: white;
  --sizeX: 30px;
  --sizeY: 50px;
  position: relative;
  width: var(--sizeX);
  height: var(--sizeY);
  margin-left: var(sizeX / 2);
  border: calc(var(--sizeX) / 10) solid var(--color);
  border-radius: 50px;
  box-sizing: border-box;
  margin-bottom: 16px;
  cursor: pointer;
  --color: rgba(255, 255, 255, 0.5) !important;
  margin: 0 auto;
  margin-bottom: 10rem;
  cursor: default;
}

.scrolldown::before {
  content: "";
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: var(--color);
  border-radius: 100%;
  animation: scrolldown-anim 2s infinite;
  box-sizing: border-box;
  box-shadow: 0px -5px 3px 1px #2a547066;
}

@keyframes scrolldown-anim {
  0% {
    opacity: 0;
    height: 6px;
  }

  40% {
    opacity: 1;
    height: 10px;
  }

  80% {
    transform: translate(0, 20px);
    height: 10px;
    opacity: 0;
  }

  100% {
    height: 3px;
    opacity: 0;
  }
}

.chevrons {
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chevrondown {
  margin-top: -6px;
  position: relative;
  border: solid var(--color);
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
}

.chevrondown:nth-child(odd) {
  animation: pulse54012 500ms ease infinite alternate;
}

.chevrondown:nth-child(even) {
  animation: pulse54012 500ms ease infinite alternate 250ms;
}

@keyframes pulse54012 {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
}
</style>
