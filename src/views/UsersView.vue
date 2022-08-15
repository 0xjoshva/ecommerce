<template>
 <section id="users">
 <div class="panel">
    <div class="heading"> 
        <h1>Users</h1>
        <button type="submit" id="addbtn" data-bs-toggle="modal" data-bs-target="#exampleModal2"><i class="bi bi-plus"></i> New Customers</button>

    </div><table id="customers">
  <tr>
    <th>ID</th>
    <th>Username</th>
    <th>Email</th>
    <th>Contact</th>
    <th>Address</th>
    <th>Joining Date</th>
    <th>Action</th>
  </tr>
  <tr v-for="user in users" v-bind:key="user.id">
     <td>{{user.id}}</td>
    <td>{{user.full_name}}</td>
    <td>{{user.email}}</td>
    <td>{{user.phone_number}}</td>
    <td>{{user.address}}</td>
    <td>{{user.join_date}}</td>
    <td>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
    <i class="bi bi-three-dots"></i>
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Edit</a></li>
    <li><a class="dropdown-item" href="#">Delete</a></li>
  </ul>
</div></td>
  </tr>

</table>
 </div>
 </section>
</template>
<script>
export default {
    data() {
    return {
      users: null,
      full_name: "",
      email: "",
      password: "",
    };
  },
  methods: {signUp() {
      this.$store.dispatch("signUp", {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
      });
    }},
  mounted() {
    fetch("https://eomp.herokuapp.com/users", {
    })
      .then((res) => res.json())
      .then((data) => (this.users = data), console.log(this.users));
  },
};
</script>
<style scoped>
#users{
    width: 100%;
    height: 100vh;
}
.panel{
    height: fit-content;
    width: 80rem;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 8px;
    background: #1b1a1a5e;
}
#addbtn{
    outline:none;
    border: none;
    border-radius: 26px;
    background: purple;
    color: white;
    width:fit-content;
    height: fit-content;
    padding: 0.5rem 1rem;
    background-image: linear-gradient(to right, #510286, #480176, #3e0067, #350058, #2c0049);
}
.heading{
    display:flex;
    justify-content: space-between;
      padding-bottom: 2rem;
}
.heading h1{
    font-family: 'Poppins';
    color: white;
}

#customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border-top: 1px solid #353535;
  padding: 8px;
}

#customers tr{background-color:#1717173a;
color: white;
font-family: 'Poppins';
font-size: 1rem;}

#customers tr:hover {background-color: #17171771}

#customers th {
  text-align: left;
  background-color: #1717173a;
  color: white;
  font-family: 'Poppins';
  border: none;font-weight: 500;
}
.btn{
    background: transparent;
    border: none;
}
.btn:focus{
    outline: none;
    border: none;
    box-shadow: none;
}
.bi-three-dots:hover{
    color: var(--dpurple);
}
.dropdown-toggle::after{
    display: none;
}
</style>
