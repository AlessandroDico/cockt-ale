<template>
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <SearchForm @searchCocktail="getSingleCocktail"/>
            </div>
        </nav>
    </div>
</template>

<script>
import SearchForm from "./SearchForm.vue";

    export default {
        name: "Header",
        components: {
            SearchForm
        },
        data() {
            return {
                searchedCocktailArray: [],
            }
        },
        methods: {
            getSingleCocktail (searchedCocktail) {
                console.log(searchedCocktail);
                this.axios.get(this.base_url + 'search.php?s=' + searchedCocktail)
                .then(response => {
                    console.log(response);
                    console.log(response.data.drinks);
                    this.searchedCocktailArray = response.data.drinks;
                    console.log(this.searchedCocktailArray);
                    this.$emit('searchedCocktails', this.searchedCocktailArray);
                })
            }
        },
    }
</script>