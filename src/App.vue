<template>
  <div id="app">
    <div v-if="landingPage" id="landing-app">
      <LandingPage @isLanding="isLanding" />
    </div>
    <div v-else id="main-app">
      <div class="" v-if="!isSearched">
        <Banner />
        <RandCocktails />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import RandCocktails from "./pages/RandCocktails.vue";
import LandingPage from "./pages/LandingPage.vue";
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: {
      RandCocktails,
      LandingPage,
      Banner,
      Footer
    },
    data() {
      return {
        isSearched: false,
        landingPage: true
      }
    },
    methods: {
      isLanding(boolean) {
        this.landingPage = boolean;
      }
    },
  };
</script>

<style lang="scss">
  @import './assets/scss/app.scss';
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  #app {
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
  }

  #main-app {
    background-image: url(./images/background.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #landing-app {
    height: 100vh;
    // background-image: url(./images/landing-background1.jpg);
    background-image: url(./images/landing-background5.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
