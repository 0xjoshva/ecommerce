<template>
  <section>
    <h1>TEAM</h1>
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
            <a href="https://joshuasteed.com/#/" target="_blank" alt="portfolio"
              ><i class="bi bi-person-circle"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="image">
          <img src="../assets/webdev.png" alt="" />
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
            <a href="https://github.com/ASHTONMDB9" target="_blank" alt="github"
              ><i class="bi bi-github"></i
            ></a>
            <a href="" target="_blank" alt="linkedin"
              ><i class="bi bi-linkedin"></i
            ></a>
            <a href="" target="_blank" alt="portfolio"
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
section {
  width: 100%;
  height: fit-content;
  padding-bottom: 10rem;
}
h1 {
  font-family: "Clash Display";
  color: var(--white);
  font-weight: 500;
  font-size: 6.5rem;
  text-align: center;
  margin: 3rem;
  z-index: -10;

}

.team {
  display: flex;
  flex-direction: row;
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
    rgb(72, 1, 119) 10.9%,
    rgb(49, 33, 56) 87.1%
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
    rgb(72, 1, 119) 10.9%,
    rgb(49, 33, 56) 87.1%
  );
}
.bi-github {
    margin-left: .6rem;
}
</style>
