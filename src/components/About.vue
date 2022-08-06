<template>
  <section id="about">
    <div class="wrapper">
      <div class="container">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3"></div>
      </div>
      <div class="text">
        <h1>INNOVATIVE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          voluptates quas commodi repellendus voluptate nobis iste et minima.
          Cumque, laboriosam. Cum eaque maxime, veniam, modi aliquid iure odio
          laborum ipsa nisi facere, voluptas nobis magni eius veritatis debitis
          dignissimos enim.
        </p>
      </div>
      <div class="text2">
        <h1>FUNCTIONAL</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          voluptates quas commodi repellendus voluptate nobis iste et minima.
          Cumque, laboriosam. Cum eaque maxime, veniam, modi aliquid iure odio
          laborum ipsa nisi facere, voluptas nobis magni eius veritatis debitis
          dignissimos enim.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
#about {
  background-image: url(../assets/back.png);
  background-repeat: no-repeat;
  background-color: var(--bg-color);
  width: 100%;
  height: 130vh;
  color: white;
  font-family: "Poppins", sans-serif;
}
.wrapper {
}
.container {
  padding-left: 10rem;
  padding-top: 8rem;
  float: left;
  width: fit-content;
  height: 35rem;
}


.item1 {
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 3px solid rgb(128, 44, 207);
  background-image: url(../assets/cpu.jpg);
  background-position: center;
  background-size: contain;
}

.item2 {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 3px solid rgb(171, 83, 212);
  transform: translate(1rem, -4rem);
  background-image: url(../assets/gpu2.png);
  background-position: center;
  background-size: cover;
}
.item3 {
  width: 420px;
  height: 420px;
  border-radius: 50%;
  border: 3px solid rgb(142, 3, 255);
  transform: translate(21rem, -34rem);
  background-image: url(../assets/ram.jpg);
  background-position: center;
  background-size: cover;
  margin-right: 0;
}
.text {
  padding-left: 3rem;
  padding-top: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.text h1 {
  font-family: "Clash Display", sans-serif;
  font-weight: 500;
  font-size: 3rem;
}
.text p {
  font-family: "Inter", sans-serif;
  color: var(--lgrey);
  width: 80%;
}

.text2{
  padding-top: 3rem;
  display:flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;
}
.text2 h1 {
  font-family: "Clash Display", sans-serif;
  font-weight: 500;
  font-size: 3rem;
  width:fit-content;
  padding-right: 18rem;
}
.text2 p {
  font-family: "Inter", sans-serif;
  color: var(--lgrey);
  text-align: left;
  width:70%;
}
</style>
2