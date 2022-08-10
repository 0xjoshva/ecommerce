<template>
  <Home />
  <Preview/>
  <Team/>
  <Footer/>
</template>

<script>``
import Home from "../components/Home.vue";
import About from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";
import Preview from "@/components/Preview.vue";
import Team from "@/components/Team.vue";
export default {
  name: "HomeView",
  components: { Home, About, Footer, Preview, Team },
};
</script>

<style scoped>
</style>
