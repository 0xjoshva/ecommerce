<template>
  <nav class="sticky-top">
    
    <div>
    <router-link to="/" id="logo"
      ><img src="../assets/Logo.svg" alt="logo" id="logo"
    /></router-link>
    </div>

    <div id="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/marketplace">Marketplace</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/login" id="login">Login</router-link>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
#logo {
  width: 130px;
  height: auto;
}
nav a {
  text-decoration: none;
  color: inherit;
  padding: 0.3rem;
padding-left: 0.8rem;
padding-right: 0.8rem;
}
nav a:focus{
  color: white;
}
nav {
  background: var(--bg-color);
  color: rgba(255, 255, 255, 0.404);
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 20px;
  border-bottom: 1px solid var(--dgrey);
  width: 100%;
}
#nav-links {
  display: flex;
  column-gap: 20px;
  
}
#login{
border:2px solid rgb(94, 33, 192);
background: rgba(255, 255, 255, 0);
color:rgb(182, 107, 243);
padding: 0.3rem;
padding-left: 0.8rem;
padding-right: 0.8rem;
border-radius: 20px;
transition: all 0.2s ease-in-out;
margin-right: 2rem;
}
#login:focus{
 box-shadow: 0 0 0 2px #c281da00, 0 0 5px 5px #7701a1;
}
</style>
