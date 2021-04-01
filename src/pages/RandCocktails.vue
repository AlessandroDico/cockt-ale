<template>
    <div>
        <SearchForm @searchCocktail="getSingleCocktail"/>
        <div class="cocktail-container">
            <button v-if="isSearched || isFiltred" @click="backToAllCocktails" class="btn-lg btn-after-search text-uppercase">back to popular cocktails</button>
            <div v-if="openSingleDrink" id="singleCocktail">
                <ClickedCocktail :category="currentDrinkCategory" :glass="currentDrinkGlass" :Instructions="currentDrinkInstructions" :ITInstructions="currentDrinkITInstructions" :image="currentDrinkImage" :name="currentDrinkName" :ingredient1="currentDrinkIngredient1 ? currentDrinkIngredient1 : ''"  :ingredient2="currentDrinkIngredient2 ? ' - ' + currentDrinkIngredient2 : ''" :ingredient3="currentDrinkIngredient3 ? ' - ' + currentDrinkIngredient3 : ''" :ingredient4="currentDrinkIngredient4 ? ' - ' + currentDrinkIngredient4 : ''" :ingredient5="currentDrinkIngredient5 ? ' - ' + currentDrinkIngredient5 : ''" :ingredient6="currentDrinkIngredient6 ? ' - ' + currentDrinkIngredient6 : ''" :ingredient7="currentDrinkIngredient7 ? ' - ' + currentDrinkIngredient7 : ''" :ingredient8="currentDrinkIngredient8 ? ' - ' + currentDrinkIngredient8 : ''" :ingredient9="currentDrinkIngredient9 ? ' - ' + currentDrinkIngredient9 : ''" :ingredient10="currentDrinkIngredient10 ? ' - ' + currentDrinkIngredient10 : ''" :ingredient11="currentDrinkIngredient11 ? ' - ' + currentDrinkIngredient11 : ''" :ingredient12="currentDrinkIngredient12 ? ' - ' + currentDrinkIngredient12 : ''"/>
                <span @click="closeCard">&#10060;</span>
            </div>
            <div v-if="noResoluts" class="no-results d-flex justify-content-center flex-wrap">
                <h1>Ops! Non ci sono risultati per la ricerca</h1>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2">
                        <div v-for="(ingredient, index) in ingredients" :key="index" class="">
                            <SideBar @searchIngredient="getCocktailByIngredient" @searchType="getCocktailByType" />
                        </div>
                    </div>
                    <div class="col-9">
                        <div v-if="!isSearched && !isFiltred" class="">
                            <h2 class="text-left">Popular Cocktails</h2>
                            <div class="cocktail-card d-flex justify-content-center flex-wrap">
                                <div v-for="(drink, index) in allDrinks" :key="index">
                                    <div @click="openSingleCard(drink.strDrink)" class="">
                                        <Card :id="drink.strDrink" :image="drink.strDrinkThumb" :name="drink.strDrink" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isSearched && !isFiltred" class="">
                            <!-- <div v-for="(ingredient, index) in ingredients" :key="index" class="">
                            <SideBar @searchIngredient="getCocktailByIngredient" @searchType="getCocktailByType"/>
                            </div> -->
                            <div class="cocktail-card d-flex justify-content-center flex-wrap">
                                <div v-for="(drink, index) in searchedDrinks" :key="index">
                                    <div @click="openSingleCardFromSearched(drink.strDrink)" class="">
                                        <Card :image="drink.strDrinkThumb" :name="drink.strDrink" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isFiltred" class="">
                            <h2 class="text-left">{{currentMessage}}</h2>
                            <div class="cocktail-card d-flex justify-content-center flex-wrap">
                                <div v-for="(drink, index) in filtredByIngredients" :key="index">
                                    <div @click="openSingleCardFromCheched(drink.strDrink)" class="">
                                        <Card :image="drink.strDrinkThumb" :name="drink.strDrink" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "./../components/Card.vue";
import SearchForm from "./../components/SearchForm.vue";
import ClickedCocktail from "./ClickedCocktail.vue";
import SideBar from "./../components/SideBar.vue";

    export default {
        components: {
            Card,
            SearchForm,
            ClickedCocktail,
            SideBar
        },
        name: "RandCocktails",
        props: ["name"],
        data () {
            return {
                drinksName: [],
                allDrinks: [],
                searchedDrinks: [],
                filtredByIngredients: [],
                ingredients: ["Vodka", "Gin", "brandy", "Beer", "Tequila"],
                isSearched: false,
                noResoluts: false,
                openSingleDrink: false,
                isFiltred: false,
                currentDrinkName: '',
                currentDrinkImage: '',
                currentDrinkCategory: '',
                currentDrinkGlass: '',
                currentDrinkIngredients: '',
                currentDrinkInstructions: '',
                currentDrinkITInstructions: '',
                currentDrinkIngredient1: '', 
                currentDrinkIngredient2: '', 
                currentDrinkIngredient3: '', 
                currentDrinkIngredient4: '', 
                currentDrinkIngredient5: '', 
                currentDrinkIngredient6: '', 
                currentDrinkIngredient7: '', 
                currentDrinkIngredient8: '', 
                currentDrinkIngredient9: '', 
                currentDrinkIngredient10: '',
                currentDrinkIngredient11: '',
                currentDrinkIngredient12: '',
                currentMessage: '',
            }
        },
        methods: {
            getSingleCocktail (searchedCocktail) {
                // console.log(searchedCocktail.length);
                if (searchedCocktail.length > 0) {
                    // this.isFiltred = false;
                    // this.$emit('falseCheck', this.isFiltred);
                    this.axios.get(this.base_url + 'search.php?s=' + searchedCocktail)
                    .then(response => {
                        this.noResoluts = false;
                        if (response.data.drinks == null) {
                            this.noResoluts = true;
                        } else {
                            // console.log(response);
                            this.searchedDrinks = response.data.drinks;
                            // console.log(this.searchedDrinks);
                            searchedCocktail = '';
                            if (this.searchedDrinks.length) {
                                this.isSearched = true;
                            }
                        }
                    })
                }
            },
            openSingleCard(item){
                console.log(item);
                for (let i = 0; i < this.allDrinks.length; i++) {
                    let currentDrink = this.allDrinks[i].strDrink;
                    let currentDrinkImage = this.allDrinks[i].strDrinkThumb;
                    let currentDrinkCategory = this.allDrinks[i].strCategory;
                    let currentDrinkGlass = this.allDrinks[i].strGlass;
                    let currentDrinkInstructions = this.allDrinks[i].strInstructions;
                    let currentDrinkITInstructions = this.allDrinks[i].strInstructionsIT;

                    if (item == currentDrink) {
                        // console.log(currentDrink);
                        // console.log(this.allDrinks[i].strIngredient1);
                        this.openSingleDrink = true;
                        this.currentDrinkName = currentDrink;
                        this.currentDrinkImage = currentDrinkImage;
                        this.currentDrinkCategory = currentDrinkCategory;
                        this.currentDrinkGlass = currentDrinkGlass;
                        this.currentDrinkInstructions = currentDrinkInstructions;
                        this.currentDrinkITInstructions = currentDrinkITInstructions;
                        this.currentDrinkIngredient1 = this.allDrinks[i].strIngredient1;
                        this.currentDrinkIngredient2 = this.allDrinks[i].strIngredient2;
                        this.currentDrinkIngredient3 = this.allDrinks[i].strIngredient3;
                        this.currentDrinkIngredient4 = this.allDrinks[i].strIngredient4;
                        this.currentDrinkIngredient5 = this.allDrinks[i].strIngredient5;
                        this.currentDrinkIngredient6 = this.allDrinks[i].strIngredient6;
                        this.currentDrinkIngredient7 = this.allDrinks[i].strIngredient7;
                        this.currentDrinkIngredient8 = this.allDrinks[i].strIngredient8;
                        this.currentDrinkIngredient9 = this.allDrinks[i].strIngredient9;
                        this.currentDrinkIngredient10 = this.allDrinks[i].strIngredient10;
                        this.currentDrinkIngredient11 = this.allDrinks[i].strIngredient11;
                        this.currentDrinkIngredient12 = this.allDrinks[i].strIngredient12; 
                    }
                }
            },
            openSingleCardFromSearched(item){
                console.log(item);
                for (let i = 0; i < this.searchedDrinks.length; i++) {
                    let currentDrink = this.searchedDrinks[i].strDrink;
                    let currentDrinkImage = this.searchedDrinks[i].strDrinkThumb;
                    let currentDrinkCategory = this.searchedDrinks[i].strCategory;
                    let currentDrinkGlass = this.searchedDrinks[i].strGlass;
                    // let currentDrinkIngredients = this.searchedDrinks[i].str;
                    let currentDrinkInstructions = this.searchedDrinks[i].strInstructions;
                    let currentDrinkITInstructions = this.searchedDrinks[i].strInstructionsIT;
                    if (item == currentDrink) {
                        console.log(currentDrink);
                        console.log(this.searchedDrinks[i]);
                        this.openSingleDrink = true;
                        this.currentDrinkName = currentDrink;
                        this.currentDrinkImage = currentDrinkImage;
                        this.currentDrinkCategory = currentDrinkCategory;
                        this.currentDrinkGlass = currentDrinkGlass;
                        this.currentDrinkInstructions = currentDrinkInstructions;
                        this.currentDrinkITInstructions = currentDrinkITInstructions;
                        this.currentDrinkIngredient1 = this.searchedDrinks[i].strIngredient1;
                        this.currentDrinkIngredient2 = this.searchedDrinks[i].strIngredient2;
                        this.currentDrinkIngredient3 = this.searchedDrinks[i].strIngredient3;
                        this.currentDrinkIngredient4 = this.searchedDrinks[i].strIngredient4;
                        this.currentDrinkIngredient5 = this.searchedDrinks[i].strIngredient5;
                        this.currentDrinkIngredient6 = this.searchedDrinks[i].strIngredient6;
                        this.currentDrinkIngredient7 = this.searchedDrinks[i].strIngredient7;
                        this.currentDrinkIngredient8 = this.searchedDrinks[i].strIngredient8;
                        this.currentDrinkIngredient9 = this.searchedDrinks[i].strIngredient9;
                        this.currentDrinkIngredient10 = this.searchedDrinks[i].strIngredient10;
                        this.currentDrinkIngredient11 = this.searchedDrinks[i].strIngredient11;
                        this.currentDrinkIngredient12 = this.searchedDrinks[i].strIngredient12; 
                    }
                }
            },
            openSingleCardFromCheched(item){
                console.log(item);
                for (let i = 0; i < this.filtredByIngredients.length; i++) {
                    let currentDrink = this.filtredByIngredients[i].strDrink;
                    let currentDrinkImage = this.filtredByIngredients[i].strDrinkThumb;
                    let currentDrinkCategory = this.filtredByIngredients[i].strCategory;
                    let currentDrinkGlass = this.filtredByIngredients[i].strGlass;
                    // let currentDrinkIngredients = this.filtredByIngredients[i].str;
                    let currentDrinkInstructions = this.filtredByIngredients[i].strInstructions;
                    let currentDrinkITInstructions = this.filtredByIngredients[i].strInstructionsIT;
                    if (item == currentDrink) {
                        console.log(currentDrink);
                        console.log(this.filtredByIngredients[i]);
                        this.openSingleDrink = true;
                        this.currentDrinkName = currentDrink;
                        this.currentDrinkImage = currentDrinkImage;
                        this.currentDrinkCategory = currentDrinkCategory;
                        this.currentDrinkGlass = currentDrinkGlass;
                        this.currentDrinkInstructions = currentDrinkInstructions;
                        this.currentDrinkITInstructions = currentDrinkITInstructions;
                    }
                }
            },
            closeCard() {
                this.openSingleDrink = false;
            },
            backToAllCocktails() {
                this.isSearched = false;
                this.isFiltred = false;
                this.filtredByIngredients = [];
            },
            getCocktailByIngredient (searchIngredient) {
                if (searchIngredient.length > 0 ) {
                    this.currentMessage = '';
                    this.filtredByIngredients = [];
                    this.isFiltred = true;
                    console.log(searchIngredient);
                    for (let i = 0; i < searchIngredient.length; i++) {
                        this.axios.get(this.base_url + 'filter.php?i=' + searchIngredient[i])
                        .then(response => {
                            console.log(response.data.drinks);
                            // var results = response.data.drinks;
                            for (let j = 0; j < response.data.drinks.length; j++) {
                                this.filtredByIngredients.push(response.data.drinks[j]);                                
                            }
                            this.currentMessage = this.filtredByIngredients.length + ' results';
                        })                        
                    }
                } else {
                    this.isFiltred = false;
                }
            },
            getCocktailByType (searchType) {
                if (searchType.length > 0 ) {
                    this.currentMessage = '';
                    this.filtredByIngredients = [];
                    this.isFiltred = true;
                    console.log(searchType);
                    for (let i = 0; i < searchType.length; i++) {
                        this.axios.get(this.base_url + 'filter.php?a=' + searchType[i])
                        .then(response => {
                            console.log(response.data.drinks);
                            // var results = response.data.drinks;
                            for (let j = 0; j < response.data.drinks.length; j++) {
                                this.filtredByIngredients.push(response.data.drinks[j]);                                
                            }
                            this.currentMessage = this.filtredByIngredients.length + ' results';
                        })                        
                    }
                } else {
                    this.isFiltred = false;
                }
            },
            containsKey(obj, key ) {
                return Object.keys(obj).includes(key);
            },
        },
        mounted() {
            console.log(this.base_url);
            var counter = 20;
            for (let i = 0; i < counter; i++) {
                // console.log(counter);
                this.axios.get(this.base_url + 'random.php')
                .then(response => {
                    const cocktail = response.data.drinks[0];
                    const cocktailName = response.data.drinks[0].strDrink;
                    if (!this.drinksName.includes(cocktailName)) {
                        this.drinksName.push(cocktailName);

                        this.allDrinks.push(cocktail)
                        console.log(this.allDrinks);
                        // const hasName = this.containsKey(response.data.drinks[0], 'strIngredient1');
                        // console.log(hasName);
                    } 
                })                
            }

        }
    }
</script>

<style lang="scss" scoped>

    button.btn-after-search {
        background-color: #2c2631;
        color: #fff;
        border: 1px solid #fff;
        margin: 10px;
    }
    button.btn-after-search:hover {
        background-color: #76707a;
    }

    .cocktail-container {        
        min-height: 100vh;
        background: rgba(139,119,174, 0.75);
        background: linear-gradient(211deg, rgba(100,81,110,0.7455357142857143) 0%, rgba(131,113,152,0.8183648459383753) 10%, rgba(42,56,53,0.87718837535014) 97%);
        padding: 100px 0 50px 0;
        position: relative;

        .no-results {
            background-color: transparent;
        }

        .cocktail-card {
            padding: 50px 0;
            background-color: #0000009c;
            position: relative;
            z-index: 0;
        }

        #singleCocktail {
            position: fixed;
            max-height: 850px;
            overflow-y: auto;
            left: 50%;
            top: 50px;
            transform: translateX(-50%);
            z-index: 10;
            padding: 20px;
            background-color: #2b2530;
            border-radius: 50px;
            border: 2px solid #fff;

            span {
                position: absolute;
                top: 20px;
                right: 20px;
                color: red;
                font-weight: bold;
                font-size: 25px;
                cursor: pointer;
            }
            
            &::-webkit-scrollbar-track
            {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                border-radius: 10px;
                background-color: transparent;
                // height: 20px;
                padding: 40px;
                margin: 40px;
            }

            &::-webkit-scrollbar
            {
                width: 12px;
                background-color: transparent;
                // height: 40px;
                padding: 40px;
                margin: 40px;
            }

            &::-webkit-scrollbar-thumb
            {
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
                background-color: #555;
                // height: 40px;
                padding: 40px;
                margin: 40px;

            }
        }
    }
</style>