<template>
<section id="section">
 
 <div class="container">
 <div id="account">
    <div class="wrapper">
    <img src="../assets/webdev2.png" alt="" id="profilepic">
    <div>
    <h1>Joshua Steed</h1>
    <p>User ID: 5</p>
    <p>User Type: Admin</p>
    </div>
    </div>
    
    <div class="details">
     <label for="address"> <span>ADDRESS</span>
     <p name="address">62 3rd Avenue, Milnerton, WC 7238</p></label>
     
     <label for="email"> <span>EMAIL</span>
     <p name="email">joshuasteed123@Gmail.com</p></label>
     
     <label for="phonenumber"> <span>PHONE NUMBER</span>
     <p>+27 62 459 7048</p></label>

     <label for="joindate"> <span>JOIN DATE</span>
     <p name="joindate">2022-08-15</p></label>
    </div>
 </div>
 <div id="orders">
    <h1>Recent Order</h1>
    <table id="customers">
  <tr>
    <th>ID</th>
    <th>Preview</th>
    <th>Title</th>
    <th>Category</th>
    <th>Price</th>
  </tr>
  <tr v-for="product in products" v-bind:key="product.id">
  <td>{{product.id}}</td>
  <td> <img v-bind:src="product.image" alt="" id="image"></td>
  <td>{{product.title}}</td>
  <td>{{product.category}}</td>
  <td>{{product.price}}</td>
  </tr>
</table>
 </div>
 </div>
</section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #section{
        height: 80vh;
        width: 100%;
        color:white;
        font-family: 'Poppins';
    }
        .container{
        height: 80vh;
        width: 100%;
        display: flex;
        align-content: center;
        justify-content: space-evenly;
        column-gap: 3rem;
    }
#profilepic{
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border: 4px solid var(--dpurple);
}
.details{
    background:#1b1b1b;
    display:flex;
    flex-direction: column;
    row-gap: 0.6rem;
    width: 31rem;
    padding: 1rem;
    border-radius: 15px;
}
#account{
    background: #131313;
    height: fit-content;
    padding: 1rem;
    border-radius: 15px;
}
label span{
    color: grey;
    font-weight: 500;
    font-size: 0.8rem;
}
.wrapper{
    display: flex;
    flex-direction: row;
    padding-bottom: 1rem;
    justify-content: space-between;
    padding-right: 2rem;
}
.wrapper h1{
    width: fit-content;
    margin: 0 auto;
}
h1 span{
    color: #7c7c7c5b;
}

/* table */
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
  background-color: #1212123a;
  color: white;
  font-family: 'Poppins';
  border: none;font-weight: 500;
}
#orders{
    background: #17171771;
    padding: 2rem;
    height: fit-content;
    border-radius: 15px;
    width: 50rem;
}
#orders h1{
    margin: 0 auto;
    width: fit-content;
    padding-bottom: 1rem;
}
</style>