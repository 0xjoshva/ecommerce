<template>
<section>
    <div class="panel">
        <div id="image">
         <img src="../assets/ram2.png" alt="" id="image1">
          <img src="../assets/ram2.png" alt="" class="image2">
        </div>
        <div id="text">
        <h1>SUBSCRIBE </h1>
        <p>Receive alerts whenever a new listing is added and get updates on special deals!</p>
        </div>
        <div id="inputs">
        <input type="email" id="emailInput" placeholder="example@email.com">
        <button id="sendbtn">Subscribe</button>
        </div>
    </div>
</section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#image{
    width: auto;
    padding-left: 3rem;
}
#image1{
height: 100%;
width: 10rem;
}
.image2{
    height: 100%;
    padding-top: 3.5rem;
    width: 8rem;
    margin-left: -1.5rem;
}
#text h1{
    font-family: 'ClashDisplay-Light';
    font-size: 4rem;
     background: linear-gradient(to left,rgb(209, 209, 209),rgb(163, 162, 162), #8a26db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
}
#text p{
    color: rgb(173, 170, 170);
    font-family: 'Montserrat';
    font-weight: 400;
    width: 21vw;
}
#inputs{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 4rem;

}
#text{
    margin-left: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 1.6rem;
}
#emailInput{
    width: 20rem;
    height: 2.5rem;
    border: 1px solid white;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    background:transparent;
    border-right: none;
    padding-left: 1rem;
    color: white;
    outline: none;
    font-family: 'Montserrat';
    font-weight: 500;
    margin-left: 20rem;
}
#emailInput:focus{
    outline: none;
}
#sendbtn{
    outline: none;
    border: none;
    border:1px solid white;
    background:  #8a26db;
    height: 2.5rem;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    color: var(--bg-color);
    padding-right: 2rem;
    padding-left: 2rem;
 font-size: 1rem;
    color: var(--bg-color);
    font-weight: 500;
}
#sendbtn:focus{
    background:  #9138da;
}
 .panel{
    width: 89vw;
    height: 11rem;
    margin: 0 auto;
    border-radius: 26px;
    display: flex;
    flex-direction: row;
    font-family: "Poppins";
    color: rgb(211, 211, 211);
    background: #1c012c;
    background-image: linear-gradient( 0deg, rgb(28, 1, 44) 10.9%, var(--bg-color) 87.1% );
    margin-bottom: 4rem;
 }
 ::placeholder{
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.39);
    font-weight: 300;
 }
</style>