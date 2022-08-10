<template>
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
  height: 105vh;
  color: var(--white);
  font-family: "Poppins", sans-serif;
}
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 2rem;
  height: fit-content;
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
  border-radius: 50%;
  border: 5px solid var(--dpurple);
  background-image: url(../assets/cpu.png);
  background-position: center;
  background-size: cover;
background-repeat: no-repeat;
  box-shadow: 20px 19px 200px 0px var(--dpurple);
}

.item2 {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 5px solid var(--dpurple);
  transform: translate(1rem, -4rem);
  background-image: url(../assets/dpad2.jpg);
  background-position: center;
  background-size: cover;
      box-shadow: -19px 20px 400px 2px var(--dpurple);

}
.item3 {
  width: 420px;
  height: 420px;
  border-radius: 50%;
  border: 5px solid var(--dpurple);
  transform: translate(21rem, -34rem);
  background-image: url(../assets/rtx3090.png);
  background-position: center;
  background-size: cover;
  box-shadow: 20px 20px 400px 2px var(--dpurple);
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
</style>
