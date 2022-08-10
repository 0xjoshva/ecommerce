<template>
  <Home />
  <Preview/>
  <About />
  <Footer/>
</template>

<script>``
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";
import Preview from "@/components/Preview.vue";
export default {
  name: "HomeView",
  components: { Home, About, Footer, Preview},
};
</script>

<style>
</style>
