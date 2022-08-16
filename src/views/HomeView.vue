<template>
  <Home />
  <About/>
  <Subscribe/>
  <Footer/>
</template>

<script>
import Home from "../components/Home.vue";
import Footer from "../components/Footer.vue";
import Preview from "@/components/Preview.vue";
import Team from "@/components/Team.vue";
import About from "@/components/About.vue";
import Subscribe from "@/components/Subscribe.vue"
export default {
  name: "HomeView",
  components: { Home, About, Footer, Preview, Team, Subscribe },
};
</script>

<style scoped>
</style>
