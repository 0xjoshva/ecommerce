<template>
<Carousel/>
<Market/>
<Footer/>
</template>
<script>
import Market from "../components/Market.vue"
import Carousel from "@/components/Carousel.vue"
import Footer from "../components/Footer.vue"
export default {
    components: {
    Market,
        Carousel,
    Footer
}
}
</script>
<style>
    
</style>