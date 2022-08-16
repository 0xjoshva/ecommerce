<template>
  <section id="wrapper">
      <div v-for="product in product" v-bind:key="product.id" class="item">
        <img class="image" :src="product.image" alt="" />
        <div class="text">
          <h2 class="category">
            <router-link to="/marketplace" id="backbtn"
              ><a href="/"
                ><p><i class="bi bi-arrow-left"></i></p></a></router-link
            >{{ product.category.toUpperCase() }}
          </h2>
          <h2 class="title">{{ product.title }}</h2>
          <p class="descrip">
            {{ product.description }} lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eaque laboriosam earum doloribus consequuntur
            suscipit, porro aperiam cumque necessitatibus corporis eos magni
            recusandae quae, dolorum fugiat?
          </p>

          <div class="buttons">
            <button>Add to Cart</button>
=======
            
            <button @click="addToCart(product)">Add to Cart</button>
>>>>>>> origin/ash
            <p class="title price">R{{ product.price }}</p>
          </div>
          <div class="specs">
            <div class="one">
              <p>Up to</p>
              <div class="intone int">2400 RPMs</div>
            </div>
            <div class="two">
              <p>Warranty</p>
              <div class="inttwo int">3 Years</div>
            </div>
            <div class="three">
              <p>Free Delivery</p>
              <div class="intthree int"><span>3</span> Days</div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    item() {
      return this.$store.state.item;
    },
  },
  data() {
    return {
      product: null,
    };
  },
   methods: {
    addToCart(item) {
      this.$store.commit("updateCart", item);
    },
  },
  mounted() {
    fetch("https://eomp.herokuapp.com/products/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => (this.product = data));

    console.log(this.product);
  },
};
</script>
<style scoped>
#wrapper {
  width: 100%;
  height: 89vh;
  background: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  height: fit-content;
  width: 90rem;
  display: flex;
  border-radius: 20px;
  box-shadow: 0px 0px 0px 4px #4b0085;
}
.image {
  width: 40rem;
  height: 40rem;
  object-fit: contain;
  object-position: center;
  padding: 2rem;
  border-radius: 20px;
  transition: ease-in 0.3s all;
  background: transparent;
  filter: drop-shadow(0px 0px 2.3rem #7e00e1);
  /* box-shadow: 20px 19px 200px 0px #7e00e1; */
}
.image:hover {
  transform: scale(1.04);
}
#container {
  display: flex;
  justify-content: center;
  height: 84vh;
  width: 100%;
  align-items: center;
}
.category {
  font-family: "Poppins";
  font-weight: 500;
  font-size: 3rem;
  line-height: 3rem;
  margin-top: 1rem;
  color: var(--white);
}
.title {
  font-family: "Poppins";
  font-weight: 200;
  font-size: 3rem;
  line-height: 3rem;
  color: var(--white);
}
.specs > div {
  color: #8a8a8a;
}
.specs {
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: start;
  margin-top: 4rem;
}
.int {
  font-family: "Poppins";
  font-weight: 500;
  font-size: 2rem;
  color: white;
  line-height: 2rem;
}
.descrip {
  color: rgb(165, 165, 165);
  width: 35rem;
  padding-top: 0.5rem;
}
.qlabel {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}
.quantity {
  width: 3rem;
  background: rgb(34, 34, 34);
  outline: none;
  border: none;
  color: white;
  border: 1px solid #8a8a8a;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}
a {
  color: rgb(162, 1, 255);
  text-decoration: none;
  font-weight: 400;
}
a:hover {
  color: rgb(174, 44, 250);
  text-decoration: underline;
}
.buttons {
  display: flex;
}
button {
  width: fit-content;
  height: fit-content;
  justify-self: center;
  align-self: flex-end;
  margin-right: 2rem;
  padding: 0.6rem 1rem;
  border-radius: 25px;
  outline: none;
  border: none;
  color: white;
  border: 2px solid rgb(162, 1, 255);
  background: transparent;
  transition: ease-in-out 0.2s all;
}
button:hover {
  transform: scale(1.05);
}
button:focus {
  transform: scale(1);
}
#backbtn {
  font-size: 2rem;
}
.price {
  padding-top: 2rem;
}
</style>
