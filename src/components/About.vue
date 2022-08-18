<!-- <template>
  <section id="about">
    <div class="container">
      <div class="team">
        <div class="item">
          <div class="image">
            <img src="../assets/webdev2.png" alt="" />
          </div>
          <div>
            <h4>Joshua Steed</h4>
            <p class="title">Co-founder <span>/</span> Front-end developer</p>
            <p class="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              doloremque commodi quasi sapiente dolorum repellendus, ipsam
              dignissimos perspiciatis ullam quos veritatis iste, laudantium
              magnam voluptatum dolorem.
            </p>
            <div class="icons">
              <a href="https://github.com/0xjoshva" target="_blank" alt="github"
                ><i class="bi bi-github"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/joshua-steed-1526b6238/"
                target="_blank"
                alt="linkedin"
                ><i class="bi bi-linkedin"></i
              ></a>
              <a
                href="https://joshuasteed.com/#/"
                target="_blank"
                alt="portfolio"
                ><i class="bi bi-person-circle"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="image">
            <img src="../assets/ashton.png" alt="" />
          </div>
          <div>
            <h4>Ashton Abrahams</h4>
            <p class="title">Founder <span>/</span> Back-end developer</p>
            <p class="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              doloremque commodi quasi sapiente dolorum repellendus, ipsam
              dignissimos perspiciatis ullam quos veritatis iste, laudantium
              magnam voluptatum dolorem.
            </p>
            <div class="icons">
              <a
                href="https://github.com/ASHTONMDB9"
                target="_blank"
                alt="github"
                ><i class="bi bi-github"></i
              ></a>
              <a href="https://www.linkedin.com/in/ashton-abrahams-0bb921237/" target="_blank" alt="linkedin"
                ><i class="bi bi-linkedin"></i
              ></a>
              <a href="https://portfolio-8d7d2.web.app/#/" target="_blank" alt="portfolio"
                ><i class="bi bi-person-circle"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div  id="text1">
        <h1>ABOUT</h1>
        <p>
          At VTEXtech we sell a wide range of high performance computer
          components, hardware and gaming systems. From the latest graphics card
          through to a custom built watercooled gaming systems, rest assured we
          have it all. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos, ullam ipsum! Nihil impedit dicta dolore molestiae eos, voluptatem
          id natus assumenda ad dolorum. Maiores, eaque. Nihil quas, labore hic
          ad dolore quasi. At voluptatem veniam eligendi eum doloremque
          veritatis harum ea commodi enim, vero corrupti.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
#about {
  width: 100%;
  height: fit-content;
  /* global 92%+ browsers support
    angrytools.com */
  background: radial-gradient(
    ellipse at 0% 55%,
    rgb(28, 1, 44) 0%,
    rgba(16, 16, 16, 1) 63%
  );
  padding-top: 10rem;
  padding-block: 10rem;
}

.container {
  width: 100%;
  color: white;
  border-radius: 26px;
  display: flex;

}


.team {
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  justify-content: space-around;
}
img {
      border-radius: 50%;
    width: 42rem;
    height: auto;
    filter: grayscale(1);
    margin-right: 14rem;
    padding-right: 1rem;
}
.image {
  display: flex;
  align-self: center;
  justify-self: center;
}
h4 {
  color: var(--white);
  font-family: "Poppins";
  font-weight: 600;
  font-size: 2rem;
}
.text {
  color: var(--lgrey);
  font-family: "Poppins";
  font-size: 1rem;
}
.icons {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  background: #8f8f8f50;
  width: fit-content;
  padding: 0.3rem;
  border-radius: 4px;
}
.icons > a {
  color: white;
  letter-spacing: 0.8rem;
  font-size: 1.3rem;
}
.title {
  color: var(--lpurple);
  font-family: "Poppins";
  font-size: 1.2rem;
  font-weight: 500;
  white-space: nowrap;
}
.title > span {
  color: var(--lgrey);
}
.item {
  display: flex;
      margin-right: 6.8rem;
    margin-left: 6.8rem;
  border-radius: 13px;
  padding: 2rem;
  background-image: linear-gradient(
    94.3deg,


    rgba(72, 1, 119, 0.377) 10.9%,

    
    rgba(49, 33, 56, 0.205) 87.1%
  );
  transition: 0.4s all ease-in-out;
  position: relative;
}
.item:hover {
  transform: scale(1.1);
}
.item:nth-child(2) {
  background-image: linear-gradient(
    230.3deg,

    rgba(72, 1, 119, 0.377) 10.9%,

    
    rgba(49, 33, 56, 0.205) 87.1%
  );
}
.bi-github {
    margin-left: .6rem;
}
#text1{
    font-family: 'Poppins';
    display: flex;
    flex-direction: column;
    align-self: center;
}
#text1 h1{
    font-family: 'ClashDisplay-Medium';
    font-size: 4rem;
    letter-spacing: 3px;
}
</style> -->

<template>
  <section id="about">
    <div class="panel">
      <div class="who">
        <h1>XYZtech</h1>
        <p>
          At VTEXtech we sell a wide range of high performance computer
          components, hardware and gaming systems.
        </p>
      </div>
      <div class="text3">
        <h2>Why should we choose you?</h2>
        <p>
          We stock everything from the latest graphics cards to custom built
          watercooled gaming systems, rest assured we have it all. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eos, ullam ipsum! Nihil
          impedit dicta dolore molestiae eos, voluptatem id natus assumenda ad
          dolorum
        </p>
      </div>
      <div >
        <img src="../assets/pc.png" alt="" class="image2">
      </div>
    </div>
    

      <div class="team">
        <div class="item">
          <div class="image">
            <img src="../assets/webdev2.png" alt="" class="image"/>
          </div>
          <div>
            <h4>Joshua Steed</h4>
            <p class="title">Co-founder <span>/</span> Front-end developer</p>
            <p class="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              doloremque commodi quasi sapiente dolorum repellendus, ipsam
              dignissimos perspiciatis ullam quos veritatis iste, laudantium
              magnam voluptatum dolorem.
            </p>
            <div class="icons">
              <a href="https://github.com/0xjoshva" target="_blank" alt="github"
                ><i class="bi bi-github"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/joshua-steed-1526b6238/"
                target="_blank"
                alt="linkedin"
                ><i class="bi bi-linkedin"></i
              ></a>
              <a
                href="https://joshuasteed.com/#/"
                target="_blank"
                alt="portfolio"
                ><i class="bi bi-person-circle"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="image">
            <img src="../assets/ashton.png" alt="" class="image"/>
          </div>
          <div>
            <h4>Ashton Abrahams</h4>
            <p class="title">Founder <span>/</span> Back-end developer</p>
            <p class="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              doloremque commodi quasi sapiente dolorum repellendus, ipsam
              dignissimos perspiciatis ullam quos veritatis iste, laudantium
              magnam voluptatum dolorem.
            </p>
            <div class="icons">
              <a
                href="https://github.com/ASHTONMDB9"
                target="_blank"
                alt="github"
                ><i class="bi bi-github"></i
              ></a>
              <a href="https://www.linkedin.com/in/ashton-abrahams-0bb921237/" target="_blank" alt="linkedin"
                ><i class="bi bi-linkedin"></i
              ></a>
              <a href="https://portfolio-8d7d2.web.app/#/" target="_blank" alt="portfolio"
                ><i class="bi bi-person-circle"></i
              ></a>
            </div>
          </div>
        </div>
      </div>


  </section>
</template>
<script>
export default {};
</script>
<style scoped>
#about {
  width: 100%;
  height: fit-content;
  background: var(--bg-color);

  display: flex;
  justify-content: center;
  color:white; 
  flex-direction: column;
  align-items: center;
}
.panel {
  width: 89vw;
  height: 20rem;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background: linear-gradient(
    to bottom,
    rgb(51, 22, 73),
    rgb(33, 14, 48),
    #101010
  );
  display:flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
}
.text3{
  width:25rem

}
.text3 h2{
  color: #a8a8a8;
  font-family: 'Montserrat';
  white-space: nowrap;
  font-size: 1.8rem;
  font-weight: 300;
}
.image2{
  height: 20rem;
  width:auto;
  
}
.who h1{
    font-family: 'ClashDisplay-Light';
    font-size: 4rem;
     background: linear-gradient(to left,rgb(209, 209, 209),rgb(163, 162, 162), #8a26db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
}
.who{
  width: 20rem;
}
.team {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap:1rem;
  padding-bottom: 6rem;
  padding-top: 6rem;
}
.image{
      border-radius: 50%;
    height: auto;
    filter: grayscale(1);
 width: 40rem; 
 margin-right: 2rem;
}
.image {
  display: flex;
  align-self: center;
  justify-self: center;
}
h4 {
  color: var(--white);
  font-family: "Poppins";
  font-weight: 600;
  font-size: 2rem;
}
.text {
  color: var(--lgrey);
  font-family: "Poppins";
  font-size: 1rem;
}
.icons {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  background: #8f8f8f50;
  width: fit-content;
  padding: 0.3rem;
  border-radius: 4px;
}
.icons > a {
  color: white;
  letter-spacing: 0.8rem;
  font-size: 1.3rem;
}
.title {
  color: var(--lpurple);
  font-family: "Poppins";
  font-size: 1.2rem;
  font-weight: 500;
  white-space: nowrap;

}
.title > span {
  color: var(--lgrey);
}
.item {
  display: flex;
  border-radius: 13px;
  padding: 2rem;
  background:rgb(49, 33, 56);
  transition: 0.4s all ease-in-out;
  position: relative;
  width: 40%;
}
.item:hover {
  transform: scale(1.1);
}
.item:nth-child(2) {
background:rgb(49, 33, 56);}
.bi-github {
    margin-left: .6rem;
}
</style>
