<template>
<Product/>
=======
  <section id="wrapper">
    <div v-if="product" id="container">
      <div v-for="product in product" v-bind:key="product.id" class="item">
        <img class="image" :src="product.image" alt="" />
        <div class="text">
          
          <h2 class="category"><router-link to="/marketplace" id="backbtn"
            ><a href="/"
              ><p><i class="bi bi-arrow-left"></i></p></a
            ></router-link
          >{{ product.category.toUpperCase() }}</h2>
          <h2 class="title">{{ product.title }}</h2>
          <p class="descrip">
            {{ product.description }}
          </p>
      
          <div class="buttons">
            
            <button>Add to Cart</button>
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
    </div>
  </section>
>>>>>>> 9a45afdd3add8b2ed1dfc03ed0310c12ad37a88b
</template>
<script>
import Product from "../components/Product.vue"
export default {
  components: {
    Product
  }
}
</script>
<style scoped>
  
</style>