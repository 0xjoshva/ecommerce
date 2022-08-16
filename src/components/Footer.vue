<template>
<section id="footer">
<div class="container">
  <div class="wrapper">
    <img src="../assets/Logo3.svg" alt="" id="logo">
  </div>
  <div class="wrapper">
    <ul>
      <li><a href="">Privacy Policy</a></li>
      <li><a href="">Terms & Conditions</a></li>
    </ul>
  </div>
  <div class="wrapper">
    <ul>
      <li>Marketplace</li>
      <li>About</li>
      <li>Team</li>
    </ul>
  </div>
  <div class="wrapper">
    <p>Follow our socials:</p>
    <div class="icons">
      <a href=""><img src="../assets/fb.png" alt="" class="icon"></a>
      <a href=""><img src="../assets/tw.png" alt="" class="icon"></a>
      <a href=""><img src="../assets/ig.png" alt="" class="icon"></a>
    </div>
  </div>
</div>
<div id="rightsdiv">
<p id="rights">Copyright. All Rights Reserved - 2022</p>
</div>
</section>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  #footer{
    background: #101010;
  width: 100%;
font-family: 'Poppins', sans-serif;
    color: white;
    
    padding-top: 4rem;
  }
  .container{
    margin: 0 auto;
    width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
  }
  #rights{
    color: #868585;
  font-weight: 500;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 1rem;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  .icons{
    padding-top: 0.4rem;
  }
  .icon{
    width: 2rem;
    height: auto;
  }
    .icon:hover{
      filter: brightness(80%);
    }
    li{
      padding: 0.3rem;
    }
    .wrapper p {
      padding: 0.3rem;
    }
    #logo{
      height: 2.5rem;
      width: 8rem;
    }
</style>