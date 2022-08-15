<template>
 <section id="products">
 <div class="panel">
    <div class="heading"> 
        <h1>Products</h1>
        <button type="submit" id="addbtn"><i class="bi bi-plus"></i> New Product</button>
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
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
</style>
