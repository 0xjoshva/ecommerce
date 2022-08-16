<template>
    <Cart />
    <Footer/>
</template>
<script>
import Cart from "@/components/Cart.vue";
import Footer from "@/components/Footer.vue"
export default {
  name: "CartView",
  components: {
    Cart, Footer,
  },
};
</script>