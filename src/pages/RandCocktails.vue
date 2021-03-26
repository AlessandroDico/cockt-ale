<template>
    <div class="cocktail-container">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="cocktail-card d-flex justify-content-center flex-wrap">
                        <div v-for="(drink, index) in allDrinks" :key="index">
                            <Card :image="drink.strDrinkThumb" :name="drink.strDrink" />
                        </div>
                    </div>
                    <!-- <SearchForm @searchCocktail="getSingleCocktail"/> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "./../components/Card.vue";
// import SearchForm from "./../components/SearchForm.vue";

    export default {
        components: {
            Card,
            // SearchForm
        },
        name: "RandCocktails",
        props: ["name"],
        data () {
            return {
                drinksName: [],
                allDrinks: []
            }
        },
        // methods: {
        //     getSingleCocktail (searchedCocktail) {
        //         console.log(searchedCocktail);
        //     }
        // },
        mounted() {
            console.log(this.base_url);
            for (let i = 0; i < 20; i++) {
                this.axios.get(this.base_url + 'random.php')
                .then(response => {
                    const cocktail = response.data.drinks[0];
                    if (!this.allDrinks.includes(cocktail)) {
                        this.allDrinks.push(response.data.drinks[0])
                        console.log(this.allDrinks);
                    }
                })                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cocktail-container {
        min-height: 100vh;
        background: rgb(43,1,106);
        background: linear-gradient(211deg, rgba(43,1,106,0.7455357142857143) 0%, rgba(23,0,85,0.8183648459383753) 10%, rgba(0,0,0,0.87718837535014) 97%);
        padding: 50px 0;

        .cocktail-card {
            padding: 50px 0;
            background-color: #0000009c;
        }
    }
</style>