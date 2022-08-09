<template>
<section id="contact">
<form action="POST" class="form">
  <input type="text" class="name" placeholder="John Doe" required>
  <input type="email" class="email" placeholder="example@email.com" required>
  <textarea name="" id="" cols="30" rows="10" required></textarea>
  <button>Send Message <i class="fa-solid fa-paper-plane"></i></button>
</form>
</section>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  #contact{
    width: 100%;
    height: 100vh;
    background: var(--bg-color);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }
  
  .form{
    margin: 2rem;
    padding: 3rem;
        height: 30rem;
    width: 30rem;
    display: flex;
    flex-direction: column;
box-shadow: 0 0 0 4px #333;
    border-radius: 5px;
    row-gap: 1rem;
  }

textarea{
   resize: none;
   border-radius: 5px;
   background: #303030;
   border: none;
   padding: 1rem;
   color: white;
  font-family: 'Inter';
}

input{
  background: #303030;
  outline: none;
  border: none;
  height: 3rem;
  border-radius: 5px;
  color: white;
  font-family: 'Inter';
  padding-left: 1rem;
}
.name{
  width: 12rem;
}
.email{
  width: 20rem;
}
textarea:focus{
  border: none;
  outline: none;
}
input:focus{
  outline: none;
    border: none;
  outline: none;
}
  button{
    align-self: flex-start;
    outline: none;
    border: none;
    color: white;
    border: 3px;
    background: blueviolet;
    margin-top: 1rem;
    width: fit-content;
    padding: 0.4rem 1rem;
    font-weight: 500;
    font-family: 'Poppins';
    border-radius: 4px;
  }
  .fa-paper-plane{
    margin-left: 0.5rem;
  }
  ::placeholder{
    color: rgb(75, 74, 74);
  }
</style>