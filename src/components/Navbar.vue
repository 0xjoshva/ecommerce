<template id="divdiv">
  <nav class="sticky-top">
    <div>
      <router-link to="/" id="logo"
        ><img src="../assets/Logo3.svg" alt="logo" id="logo"
      /></router-link>
    </div>

    <div id="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/marketplace">Marketplace</router-link>
      <router-link to="/cart">Cart</router-link>
      <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Admin
  </a>

  <ul class="dropdown-menu dropdown-menu-dark">
    <li><router-link to="/admin/users" class="dropdown-item">Users</router-link></li>
    <li><router-link to="/admin/products" class="dropdown-item">Products</router-link></li>
  </ul>
</div>
      <router-link to="/contact">Contact</router-link>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" id="signup">Sign Up</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="login1">Login</button>
      
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <input type="email" v-model="email" class="email" placeholder="example@email.com" required>
          <div>
          <input type="password" v-model="password" placeholder="password">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button id="login" type="submit" @click.prevent="login()" class="btn btn-primary">Sign In</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
           <input type="name" v-model="full_name" class="name" placeholder="John Doe" required>
          <input type="email" v-model="email" class="email" placeholder="example@email.com" required>
          <div>
          <input type="password" v-model="password" placeholder="password" required>
          </div>
          <div>
            <input type="phone_number" v-model="phone_number" class="phone_number" placeholder="+2712345679">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="submit" @click.prevent="signUp()" class="btn btn-primary">Sign up</button>
      </div>
    </div>
  </div>
</div>


</div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      full_name: "",
      email: "",
      password: "",
      phone_number: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
    signUp() {
      this.$store.dispatch("signUp", {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
        phone_number: this.phone_number,
      });
    },
  },
};
</script>
<style scoped>
#logo {
  width: 8.5rem;
  height: auto;
  margin-left: 1.3rem;
}
nav a {
  text-decoration: none;
  color: inherit;
  padding: 0.3rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
}
nav a:active {
  color: white;
}
.router-link-active {
  color: white;
}
nav {
  background: transparent;
  color: rgba(255, 255, 255, 0.404);
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 3rem;

  width: 100%;
}
#nav-links {
  display: flex;
  column-gap: 20px;
}
#login1 {
  border: 2px solid rgb(81, 2, 134);
  background: rgba(255, 255, 255, 0);
  color: white;
  padding: 0.3rem;
  padding-left: 1.4rem;
  padding-right: 1.4rem;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  margin-right: 3rem;
  font-weight: 500;
}
#login1:focus {
  box-shadow: 0 0 0 2px #c281da00, 0 0 19px 1px var(--dpurple);
  transition: all 0.2s ease-in-out;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.modal-backdrop {
  position: relative !important;
  z-index: 0 !important;
}
.modal-content {
  background: #101010;
  color: white;
  border: none;
  border-radius: 25px;
}
.modal-header {
  border-bottom: none;
  padding: 0;
}
.modal-footer {
  border-top: none;
}
.btn-primary {
  background: var(--dpurple);
  border: none;
  outline: none;
  display: flex;
  align-self: center;
  justify-self: center;
  justify-content: space-evenly;
  width: fit-content;
  padding: .6rem 4rem;
}
.btn-primary:focus {
  box-shadow: none;
}
form {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.active {
  color: white;
}
input {
  background: #303030;
  outline: none;
  border: none;
  height: 3rem;
  border-radius: 5px;
  color: white;
  font-family: "Inter";
  padding-left: 1rem;
  width: 100%;
  border: 1px solid #303030;
}
.btn-secondary {
  background: transparent;
  outline: none;
  border: 1px solid var(--dpurple);
}
.modal-footer {
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-items: flex-end;
  justify-content: space-evenly;
  padding: 0.75rem;
}
#forgotpassword {
  font-family: 0;
  padding: 0;
  font-size: 0.8rem;
  line-height: 1.2rem;
  justify-self: flex-end;
  align-self: flex-end;
  display: flex;
}
input:focus {
  border: 1px solid var(--dpurple);
}
#contact {
  border-right: 2px solid rgba(255, 255, 255, 0.062);
  padding-right: 1.7rem;
}
#signup {
  white-space: nowrap;
  background: transparent;
  text-decoration: none;
  color: inherit;
  padding: 0.3rem;

  padding-right: 0.8rem;
  color: white;
  border-radius: 0;
  font-weight: 500;
}
#signup:hover {
  text-decoration: underline;
}
#profilepic {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  border-radius: 50%;
}
#account {
  white-space: nowrap;
  background: rgba(71, 71, 71, 0.215);
  border-radius: 5px;
  padding: 0.3rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  width: fit-content;
  transition: 0.2s all ease-in-out;
  display: none;
}
#account:hover {
  background: rgba(71, 71, 71, 0.329);
}
#account:focus {
  transform: scale(1.05);
}
.btn-primary {
  width: fit-content;
}

.dropdown-toggle{
  border: none !important;
    text-decoration: none;
  color: inherit;
  padding: 0.3rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
   font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
}
.dropdown-toggle:focus{
  border: none;
  box-shadow: none;
  outline: none;
}
</style>
