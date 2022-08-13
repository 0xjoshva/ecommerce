<template>
  <Navbar />
  <router-view />
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>
<style>

@font-face {
  font-family: 'ClashDisplay-Variable';
  src: url('./assets/fonts/ClashDisplay-Variable.woff2') format('woff2'),
       url('./assets/fonts/ClashDisplay-Variable.woff') format('woff'),
       url('./assets/fonts/ClashDisplay-Variable.ttf') format('truetype');
       font-weight: 200 700;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'ClashDisplay-Extralight';
  src: url('./assets/fonts/ClashDisplay-Extralight.woff2') format('woff2'),
       url('./assets/fonts/ClashDisplay-Extralight.woff') format('woff'),
       url('./assets/fonts/ClashDisplay-Extralight.ttf') format('truetype');
       font-weight: 200;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'ClashDisplay-Light';
  src: url('./assets/fonts/ClashDisplay-Light.woff2') format('woff2'),
       url('./assets/fonts/ClashDisplay-Light.woff') format('woff'),
       url('./assets/fonts/ClashDisplay-Light.ttf') format('truetype');
       font-weight: 300;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'ClashDisplay-Regular';
  src: url('./assets/fonts/ClashDisplay-Regular.woff2') format('woff2'),
       url('./assets/fonts/ClashDisplay-Regular.woff') format('woff'),
       url('./assets/fonts/ClashDisplay-Regular.ttf') format('truetype');
       font-weight: 400;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'ClashDisplay-Medium';
  src: url('./assets/fonts/ClashDisplay-Medium.woff2') format('woff2'),
       url('./assets/fonts/ClashDisplay-Medium.woff') format('woff'),
       url('./assets/fonts/ClashDisplay-Medium.ttf') format('truetype');
       font-weight: 500;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'ClashDisplay-Semibold';
  src: url('./assets/fonts/ClashDisplay-Semibold.woff2') format('woff2'),
       url('./assets/fonts/ClashDisplay-Semibold.woff') format('woff'),
       url('./assets/fonts/ClashDisplay-Semibold.ttf') format('truetype');
       font-weight: 600;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'ClashDisplay-Bold';
  src: url('./assets/fonts/ClashDisplay-Bold.woff2') format('woff2'),
       url('./assets/fonts/ClashDisplay-Bold.woff') format('woff'),
       url('./assets/fonts/ClashDisplay-Bold.ttf') format('truetype');
       font-weight: 700;
       font-display: swap;
       font-style: normal;
}
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
/* FONTS */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@200;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
/* font-family: 'Inter', sans-serif;
font-family: 'Poppins', sans-serif; */
/* CSS RESET */
html {
  box-sizing: border-box;
  font-size: 16px;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* COLOR SCHEME */
:root {
  /* backgrounds */
  --bg-color: #1D1D1D;
  --dgrey: #1d1d1d;
  /* highlights */
  --lpurple: rgb(153, 0, 255);
  --dpurple: rgb(118, 17, 212);
  /* for text */
  --lgrey: #8f8f8f;
  --white: #f1f1f1;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px var(--bg-color);
  box-shadow: inset 0 0 6px var(--bg-color);
  border-radius: 10px;
  background-color: var(--bg-color);
}

::-webkit-scrollbar {
  width: 12px;
  background-color: var(--bg-color);
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--lgrey);
}

nav a :active {
  color: var(--lgreen);
}

::-moz-selection { 
background-color: rgb(153, 0, 255);
color: #ffffff;
}
::selection {
background-color: rgb(153, 0, 255);
color: #ffffff;
}

.modal-backdrop {
   z-index: 0 !important;
}
body{
  background: #101010;

}
</style>
