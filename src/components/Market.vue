<template>
  <section id="market">
    <div id="filterss">
      <label for="filter" id="filterlbl"
        >sort by:
        <select name="filter" id="">
          <option value="" selected>Relevance</option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </label>
      <label for="search" id="search-lbl"
        ><button id="searchbtn">
          <img src="../assets/search.svg" alt="" id="ico" />
        </button>
        <input name="search" type="search" id="search" placeholder="search"
      /></label>
    </div>
    <div class="container">
      <!-- item -->
      <div v-for="product in products" v-bind:key="product.id" class="item">
        <router-link :to="{ name: 'ProductView', params: { id: product.id }}" id="router">
        <img v-bind:src="product.image" alt="" class="image" />
        <div class="type">
            <div>
            <p id="category">{{product.category.toUpperCase()}}</p>
          <p id="title">{{ product.title }}</p></div>
          <div><button class="cartbtn"><i class="bi bi-cart2"></i></button></div>
        </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
export default {
    data() {
    return {
      products: null,
    };
  },
  mounted() {
    fetch("https://eomp.herokuapp.com/products", {
    })
      .then((res) => res.json())
      .then((data) => (this.products = data), console.log(this.products));
  },
};
</script>
<style scoped>

#market {
  background-color: var(--bg-color);
  width: 100%;
  height: fit-content;
  padding-bottom: 5rem;
}
#filterlbl {
  color: white;
  padding: 0.3rem;
  border-radius: 3px;
}
select {
  background-color: var(--bg-color);
  outline: none;
  border: none;
  color: white;
}
#top {
  display: flex;
  flex-direction: row;
}
#search-lbl {
  border-radius: 20px;
  outline: none;
  border: none;
  height: auto;
  background: #4a4a4a;
  padding-left: 1rem;
  padding-right: 0.8rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
}
#search {
  background: #4a4a4a;
  border: none;
  outline: none;
  width: 9rem;
  height: 2rem;
  color: white;
}
::placeholder {
  color: white;
}
#ico {
  width: 20px;
  height: auto;
  margin-right: 0.6rem;
}
#searchbtn {
  background: inherit;
  border: none;
  outline: none;
  width: 2rem;
}
#filterss {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 12rem;
  margin-right: 12.5rem;
  margin-top: 2rem;
}
.container {
  margin-top: 4rem;
  padding: 0 auto;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  flex-direction: row;
  width: 100%;
  row-gap: 5rem;
  column-gap: 5rem;
  justify-content: center;
}

.item {
  flex-basis: 25%;
  width: 300px;
  height: fit-content;
  background: #242424;
  color: white;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 20px;
}
.item:hover {
  transform: scale(1.1); /*70%*/
}
.image {
  width:100%;
  height: 15.62em;
  object-fit: contain;
  object-position: center;
  margin-bottom: -4rem;
}
.item {
  /* box-shadow: 0 0 0 4px #333; */
  border-radius: 5px;
  min-height: 17rem;
  height: fit-content;
  width: fit-content;
  flex-direction: column-reverse;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom-left-radius:25px;
    border-bottom-right-radius:25px;
        background: rgb(19 19 19);
         border-top-right-radius: 25px;
    border-top-left-radius: 25px;
}

#image {
  min-height: 16rem;
  height: 21rem;
  width: auto;
  transform: scaleX(1);
}
#image:nth-of-type() {
  transform: scaleX(-1);
}

.text {
  width: 20rem;
  color: rgb(228, 228, 228);
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 100;
  padding: 1rem;
}
.specs {
  width: 20rem;
  height: fit-content;
  color: rgb(228, 228, 228);
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 100;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-left: 4rem;
  padding-right: 4rem;
  border-left: 2px solid #333;
  border-right: none;
  margin: 2rem;
  margin-left: 4rem;
}
.specs:nth-of-type(odd) {
  border-right: 2px solid #333;
  border-left: none;
  margin-right: 6rem;
  margin-left: 0;
}
ul {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}
.title {
  font-weight: 900;
  font-size: 2rem;
  line-height: 2rem;
  font-family: "Inter", sans-serif;
  width: fit-content;
}
#prebtn {
  margin-top: 1rem;
  outline: none;
  border: none;
  color: white;
  text-align: center;
  font-family: "Inter", sans-serif;
  padding: 0.4rem 1rem;
  border-radius: 3px;
  background: var(--bg-color);
  border: 2px solid var(--lpurple);
  transition: 0.4s all ease-in-out;
  background: var(--lpurple);
}
#prebtn:hover {
  transform: scale(1.02);
  box-shadow: -1px 0px 25px 1px var(--lpurple);
}
#prebtn:focus {
  transform: scale(0.97);
}
.text p {
  color: rgb(185, 185, 185);
}
.pricing {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
}
.before {
  text-decoration: line-through;
  text-decoration-color: #7e00e1;
  color: rgb(175, 175, 175);
}
.now {
  font-size: 2rem;
  color: white;
}
a {
  color: white;
  text-decoration: none;
  margin-left: 0.1rem;
  padding: 0.65rem 1rem;
}
a:hover {
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.1);
}

.content {
}
.type{
    width: 100%;
    height: 4rem;
    border-radius: 15px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding-left: 1rem;
    padding-top: 0.5rem;
    display: flex;
    margin-top: 3rem;
    /* transform: scale(1.05); */
    /* box-shadow: 0px 0px 7px 1px rgb(0 0 0 / 20%); */
    align-items: flex-start;
    justify-content: space-between;

}
.type #heading{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 1.2rem;
    width: fit-content;
}
#category{
    width:fit-content;
    font-size:0.7rem;
    color: var(--lpurple);
    font-family: 'Inter';
}
.cartbtn {
  border-radius: 50%;
  border: none;
  font-size: 1.2rem;
  color: var(--white);
  padding-top: 0.6rem;
  transition: all 0.3s ease-in-out;
  /* border: 10px solid #242424; */
  display: flex;
  align-self: flex-start;
  margin-right: 1rem;
 background: rgb(19 19 19);

}
.cartbtn:focus {
  transform: scale(0.9);
}
#router:hover{
text-decoration: none;
}
</style>