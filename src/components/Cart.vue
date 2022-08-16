<template>
  <body>
    <div class="wrapper">
      <h1>Cart</h1>
      <div class="project">
        <div class="shop">
          <div class="box">
            <div class="content">
              <div v-for="product in cartProducts" :key="product.id">
                <img :src="product.image">
                <h3>{{ product.title }}</h3>
                <p class="color-secondary">{{ product.category }}</p>
                <button @click="deleteFromCart(product.id)" class="btn-area">
                  <i class="fa fa-trash"></i>
                  <span class="btn2">Remove</span>
                </button>
                <div class="right-bar">
                  <p class="d-flex justify-content- gap-3">
                    <span>Subtotal: R{{ product.price }}</span>
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <router-link to="/checkout">Checkout</router-link>
    </div>
  </body>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: montserrat;
  background: var(--bg-color);
}
.wrapper {
  max-width: 1000px;
  margin: 0 auto;
}
.wrapper h1 {
  padding: 30px 0;
  text-align: center;
  text-transform: uppercase;
}
h1{
font-family: 'ClashDisplay-Extralight';
font-weight: 500;
font-size: 4rem;
}
.project {
  display: flex;
}
.shop {
  flex: 75%;
}
.box {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-bottom: 20px;
  background: var(--bg-color);
  box-shadow: 0px 0px 0px 4px #4b0085;
}
.box img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
.content {
  padding: 20px;
  position: relative;
  width: 100%;
}
.btn-area {
  position: absolute;
  /* bottom: 20px; */
  right: 20px;
  border: 2px solid rgb(81, 2, 134);
  padding: 10px 15px;
  background-color: var(--bg-color);
  color: white;
  border-radius: 10px;
}
.unit input {
  width: 50px;
  padding: 8px;
  text-align: center;
}
.btn-area i {
  margin-right: 5px;
}
.right-bar {
  flex: 25%;
  margin-left: 20px;
  padding: 20px;
  height: 100px;
  background: var(--bg-color);
  box-shadow: #42b983 (100, 100, 111, 0.2) 0.7px 29px 0;
}
.right-bar hr {
  margin-bottom: 25px;
}
.right-bar p {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 20px;
}
.right-bar a {
  background-color: #42b983;
  color: var(--bg-color);
  text-decoration: none;
  display: block;
  text-align: center;
  height: 40px;
  font-weight: 900;
}
.right-bar i {
  margin-right: 15px;
}
.right-bar a:hover {
  background-color: #42b983;
}

span {
  font-size: 25px;
}

a {
  font-size: 20px;
}

@media screen and (max-width: 700px) {
  .content h3 {
    margin-bottom: 15px;
  }
  .content h4 {
    margin-bottom: 20px;
  }
  .btn2 {
    display: none;
  }
  .box {
    height: 150px;
  }
  .box img {
    height: 150px;
    width: 200px;
  }
}
@media screen and (max-width: 900px) {
  .project {
    flex-direction: column;
  }
  .right-bar {
    margin-left: 0;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 125px) {
  .wrapper {
    max-width: 95%;
  }
}
</style>
