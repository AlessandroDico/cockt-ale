<template>
    <div class="">
        <form @submit.prevent="getInputValue" class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="searchedText">
            <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SearchForm",
        data() {
            return {
                searchedText: '',
            }
        },
        methods: {
            getInputValue () {
                console.log(this.searchedText);
                this.$emit('searchCocktail', this.searchedText);
                //lo andiamo a leggere nel componente che ci serve con @searchCocktail
            }
        }
    }
</script>