<template>
 <section id="products">
 <div class="panel">
    <div class="heading"> 
        <h1>Products</h1>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3" id="addbtn"><i class="bi bi-plus" ></i> New Product</button>

 <!-- Modal -->
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <input type="text" v-model="title" class="email" placeholder="title" required>
          <div>
          <input type="number" v-model="price" placeholder="price" required>
          </div>
          <div>
          <input type="text" v-model="description" placeholder="description" required>
          </div>
          <div>
          <input type="text" v-model="image" placeholder="image" required>
          </div>
          <div>
          <input type="text" v-model="category" placeholder="category" required>
          </div>
          <div>
          <input type="text" v-model="created_by" placeholder="created_by" required>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button id="addProduct" type="submit" @click.prevent="addProduct()" class="btn btn-primary">Add Product</button>
      </div>
    </div>
  </div>
</div>

    </div><table id="customers">
  <tr>
    <th>ID</th>
    <th>Preview</th>
    <th>Title</th>
    <th>Category</th>
    <th>Created by</th>
    <th>Action</th>
  </tr>
  <tr v-for="product in products" v-bind:key="product.id">
  <td>{{product.id}}</td>
  <td> <img v-bind:src="product.image" alt="" id="image"></td>
  <td>{{product.title}}</td>
  <td>{{product.category}}</td>
  <td>User ID: {{product.created_by}}</td>
  <td>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
      products: null,
    };
  },
  mounted() {
    fetch("https://eomp.herokuapp.com/products", {
    })
      .then((res) => res.json())
      .then((data) => (this.products = data), console.log(this.products));
  },
};
</script>
<style scoped>
#products{
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
#image{
    width: 4rem;
    height: 4rem;
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
</style>
