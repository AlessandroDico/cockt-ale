<template>
  <div id="app">
    <Header  @searchedCocktails="getSearchedCocktail"/>
    <div class="" v-if="!isSearched">
      <RandCocktails  />
    </div>
  </div>
</template>

<script>
import RandCocktails from "./pages/RandCocktails.vue";
import Header from "./components/Header.vue";

export default {
    name: "App",
    components: {
      Header,
      RandCocktails,
    },
    data() {
      return {
        isSearched: false,
      }
    },
    methods: {
      getSearchedCocktail (searchedCocktail) {
        console.log(searchedCocktail);
      }
    },
  };
</script>

<style lang="scss">
@import './assets/scss/app.scss';
#app {
  background-image: url(./images/background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
