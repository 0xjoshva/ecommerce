<template>
  <section id="about">
    <div class="wrapper">
      <div class="container">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3"></div>
      </div>
      <div class="para">
      <div class="text text1">
        <h1>INNOVATIVE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          voluptates quas commodi repellendus voluptate nobis iste et minima.
          Cumque, laboriosam. Cum eaque maxime, veniam, modi aliquid iure odio
          laborum ipsa nisi facere, voluptas nobis magni eius veritatis debitis
          dignissimos enim.
        </p>
      </div>
      <div class="text text2">
        <h1>EFFICIENT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          voluptates quas commodi repellendus voluptate nobis iste et minima.
          Cumque, laboriosam. Cum eaque maxime, veniam, modi aliquid iure odio
          laborum ipsa nisi facere, voluptas nobis magni eius veritatis debitis
          dignissimos enim.
        </p>
      </div>
      <div class="text text3">
        <h1>ROBUST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          voluptates quas commodi repellendus voluptate nobis iste et minima.
          Cumque, laboriosam. Cum eaque maxime, veniam, modi aliquid iure odio
          laborum ipsa nisi facere, voluptas nobis magni eius veritatis debitis
          dignissimos enim.
        </p>
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
  height: 105vh;
  color: white;
  font-family: "Poppins", sans-serif;
}
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.container {
  padding-left: 4rem;
  padding-top: 8rem;
  width: 50rem;
  height: 35rem;
}


.item1 {
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 5px solid rgb(128, 44, 207);
  background-image: url(../assets/cpu.png);
  background-position: center;
  background-size: cover;
background-repeat: no-repeat;
  box-shadow: 20px 19px 200px 0px #7e00e1;
}

.item2 {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 5px solid rgb(142, 3, 255);
  transform: translate(1rem, -4rem);
  background-image: url(../assets/dpad2.jpg);
  background-position: center;
  background-size: cover;
      box-shadow: -19px 20px 400px 2px #7e00e1;

}
.item3 {
  width: 420px;
  height: 420px;
  border-radius: 50%;
  border: 5px solid rgb(142, 3, 255);
  transform: translate(21rem, -34rem);
  background-image: url(../assets/rtx3090.png);
  background-position: center;
  background-size: cover;
  margin-right: 0;
  box-shadow: 20px 20px 400px 2px #7e00e1;
}
.text {
  padding-left: 3rem;
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
  width: 60rem;
  padding-right: 8rem;

}

.text1{
  padding-top: 18rem;

}

</style>
2