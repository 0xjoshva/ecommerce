<template>
  <Home />
</template>

<script>
import Home from "../components/Home.vue";
import About from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";
import Preview from "@/components/Preview.vue";
import Team from "@/components/Team.vue";
import Carousel2 from "../components/Carousel2.vue"
export default {
  name: "HomeView",
  components: { Home, About, Footer, Preview, Team, Carousel2 },
};
</script>

<style scoped>
</style>
