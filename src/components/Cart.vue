<template>
<section class="cart">
<div class="pleft">
              <div v-for="product in cartProducts" :key="product.id">
                <img :src="product.image" class="pimage">
                <h3 class="ptitle">{{ product.title }}</h3>
                <p class="pcategory">{{ product.category }}</p>
                <button @click="deleteFromCart(product.id)" class="btnremove">
                  <i class="fa fa-trash"></i>
                  <span class="btn2">Remove</span>
                </button>
                <div class="price">
                  <p class="subtotal">
                    <span>Subtotal: R{{ product.price }}</span>
                  </p>
                  <hr />
                </div>
              </div>
</div>

<div class="pright">
<div class="cardwrapper">
<h2>Card Details</h2>
<img src="../assets/bankcard.png" alt="" id="card">
</div>
<div class="total">
<h2>Order Summary</h2>
<table>
  <tr>
    <td>Subtotal:</td>
    <td>Number</td>
  </tr>
    <tr>
    <td>Shipping:</td>
    <td>R 0</td>
  </tr>
    <tr>
    <td><strong>Total:</strong></td>
    <td>Number</td>
  </tr>
</table>
<button class="btncheckout">Checkout</button>
</div>
</div>
</section>
</template>
<script>
export default {
  data() {
    return {
      total: "",
    };
  },
  methods: {
    deleteFromCart(id) {
      return this.$store.dispatch("deleteFromCart", id);
    },
  },

  computed: {
    cartProducts() {
      return this.$store.state.cart;
    },
    product() {
      return this.$store.state.product;
    },
  },
};
</script>
<style scoped>
.cart{
  height: 86vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10rem;
}

.pleft{
width: 35rem;
height: 90%;
padding: 1rem;
background: linear-gradient(to right, rgb(51, 22, 73),rgb(33, 14, 48), #101010);
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
}
.pright{
height: 80%;
width: fit-content;
display: flex;
flex-direction: column;
margin-right: 5rem;
background: linear-gradient(to left, rgb(51, 22, 73),rgb(33, 14, 48), #101010);
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
}
.total{
width: 100%;
height: 20rem;
padding: 1rem;
color:rgba(255, 255, 255, 0.658);
}
.total h2{
  color: rgb(230, 230, 230);
  font-family: 'Montserrat';
  padding-bottom: 1rem;
  font-weight: 500;
  font-size: 1.3rem;
  width: fit-content;
  
}
.cardwrapper{
width: 100%;
height: 20rem;
background: none;
padding: 1rem;
display: flex;
  align-content: flex-end;
  flex-direction: column;
  border-bottom: 1px solid rgba(255, 255, 255, 0.137);
}

.cardwrapper h2{
  color: rgb(230, 230, 230);
  font-family: 'Montserrat';
  padding-bottom: 1rem;
  font-weight: 500;
  font-size: 1.3rem;
  width: fit-content;
  
}
#card{
height: 15rem;
width: 25rem;

}
tr{
  border-bottom: 1px solid rgba(255, 255, 255, 0.11);
}
td{
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
    padding: 0.75rem;
    outline: none;
        display: table-cell;
    vertical-align: inherit;
}
td:nth-child(odd){
  padding-right: 5rem;
}
.pimage{

}
.ptitle{

}
.pcategory{

}
.btnremove{

}
.price{

}
.subtotal{

}
.btncheckout{
  
}
</style> 
