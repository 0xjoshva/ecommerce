<template>
<section id="products">
    <div id="container">
<img class="product" src="../assets/cooler.png" alt="">
<div class="text">
<router-link to="/marketplace"><a href=""><p><i class="bi bi-arrow-left"></i> Go back</p></a></router-link>
<h2 class="category">CPU COOLER</h2>
<h2 class="title">NZXT Z2Fi</h2>
<p class="descrip">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam excepturi quod voluptas? Labore ipsa dolor sed consequatur sint numquam! Quam non itaque aperiam commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta perferendis laborum, possimus beatae odio!</p>

<div class="buttons">
<label for="quantity" class="qlabel">
            Quantity  
            <input type="number" name="quantity" class="quantity"
                min="1" max="10" step="1" value="1">
        </label>
<button>Add to Cart</button>
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
    
}
</script>
<style scoped>
    #products{
        background: var(--bg-color);
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Inter';
        color: white;
    }
    #container{
        background: rgb(34, 34, 34);
        border-radius:20px;
    box-shadow: 0px 0px 0px 4px #5e5e5e;
    min-height: 30rem;
width: 90rem;
display: flex;
flex-direction: row;
height:40rem;
    }
    .text{
        padding: 1rem 2rem;
        text-align: left;
    }
    .product{
        width: 40rem;
        height: 40rem;
        object-fit: contain;
        object-position: center;
        padding: 2rem;
        border-radius:20px;
        transition: ease-in 0.1s all;
        background: transparent;
        filter: drop-shadow(0px 0px 2.3rem #7e00e1);
       /* box-shadow: 20px 19px 200px 0px #7e00e1; */
    }
    .product:hover{
        transform: scale(1.04);
    }
    .category{
        font-family: 'Poppins';
        font-weight:500;
        font-size: 2rem;
    }
    .title{
        font-family: 'Poppins';
        font-weight:500;
        font-size: 3rem;
    }
            .specs > div{
         color: #8a8a8a;
        }
    .specs{
        display: flex;
        justify-content: space-between;
        width: 100%;
        text-align: start;
        margin-top: 4rem;
    }
    .int{
        font-family: 'Poppins';
        font-weight:500;
        font-size: 2rem;
        color: white;
        line-height: 2rem;
        }
.descrip{
    color: rgb(165, 165, 165);
    width: 35rem;
}
.qlabel{
display: flex;
flex-direction: column;
margin-top: 1rem;
}
.quantity{
    width: 3rem;
    background:rgb(34, 34, 34);
    outline: none;
    border: none;
    color: white;
    border: 1px solid #8a8a8a;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button {  
   
   opacity: 1;

}
a{
    color: rgb(162, 1, 255);
    text-decoration: none;
    font-weight: 400;
}
a:hover{
    color: rgb(174, 44, 250);
}
.buttons{
    display: flex;
}
button{
   width: fit-content; 
   height: fit-content;
   justify-self: center;
   align-self: flex-end;
   margin-left: 2rem;
   padding: 0.4rem 1rem;
   border-radius: 4px;
   outline: none;
   border: none;
   color: white;
   background: rgb(162, 1, 255);
}
</style>