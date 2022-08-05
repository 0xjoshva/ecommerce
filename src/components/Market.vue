<template>
<section id="market">
    <div id="filterss">
    <label for="filter" id="filterlbl">sort by:
    <select name="filter" id="">
        <option value="" selected>Relevance</option>
        <option value=""></option>
        <option value=""></option>
    </select>
    </label>
<label for="search" id="search-lbl"><button id="searchbtn"><img src="../assets/search.svg" alt="" id="ico"></button>
<input name="search" type="search" id="search" placeholder="search"></label>
    </div>

    <div class="container">
     <div class="item"></div>
     <div class="item"></div>
     <div class="item"></div>
     <div class="item"></div>
     <div class="item"></div>
     <div class="item"></div>
    </div>
</section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#market{
background-color: var(--bg-color);
width: 100%;
height: 100vh;
}
#filterlbl{
    color: white;
    padding: 0.3rem;
    border-radius: 3px;
}
select{
    background-color: var(--bg-color);
    outline: none;
    border: none;
    color: white;
}
#top{
    display: flex;
    flex-direction: row;
}
#search-lbl{
    border-radius: 20px;
    outline: none;
    border: none;
    height: auto;
    background: #4A4A4A;
    padding-left: 1rem;
    padding-right: 0.8rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
}
#search{
       background: #4A4A4A;
       border: none;
       outline: none;
       width: 9rem;
       height: 2rem;
       color: white;
}
::placeholder { 
  color: white;

}
#ico{
    width: 20px;
    height: auto;
    margin-right: 0.6rem;
}
#searchbtn{
    background: inherit;
    border: none;
    outline: none;
    width: 2rem;
}
.container{
    margin-top: 4rem;
    padding: 0 auto;
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    flex-direction: row;
    width: 100%;
    gap: 5rem;
}
.item{
    flex-basis: 25%;
    width: 300px;
    height: 250px;
    background: #242424;
    color: white;
    border-radius: 13px;
    transition: all 0.2s ease-in-out;

}
.item:hover{
    transform: scale(1.1); /*70%*/
}
</style>