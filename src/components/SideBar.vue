<template>
    <div class="sidebar-container">
        <h4 class="sidebar-title">Filtra per ingredienti</h4>
        <form>
            <!-- <div class="typeOfDrink">
                <div v-for="(type, index) in types" :key="index" class="">
                    <input  type="checkbox" :id="type" :value="type" v-model="searchType" 
                    @change="getTypeValue">
                    <label for="type">{{type}}</label>
                </div>
            </div> -->
            <div v-for="(ingredient, index) in ingredientsSort" :key="index" class="">
                <input  type="checkbox" :id="ingredient" :name="ingredient" :value="ingredient" v-model="searchIngredient" @change="getInputValue">
                <label :for="ingredient"> {{ingredient}}</label>
            </div>
        </form>
    </div>
</template>

<script>
// import RandCocktails from "./../pages/RandCocktails.vue";

    export default {
        name: "SideBar",
        components: {
            // RandCocktails
        },
        props: ["nome",],
        data() {
            return {
                searchIngredient: [],
                ingredients: ["Vodka", "Gin", "Brandy", "Beer", "Tequila", "Carrot", "Lime", "Lemon", "Ginger", "Cinnamon", "Orange juice", "Malibu", "Rum", "Bourbon", "Coca-Cola", "Jagermeister", "Champagne"],
                types: ["Alcoholic", "Non_Alcoholic"],
                searchType: [],
                ingredientsSort: [],

            }
        },
        methods: {
          getInputValue () {
            console.log(this.searchIngredient);
            this.$emit('searchIngredient', this.searchIngredient);
          },
          getTypeValue () {
            console.log(this.searchType);
            this.$emit('searchType', this.searchType);
          },
        },
        mounted() {
            this.ingredientsSort = this.ingredients.sort();

        }
    }
</script>

<style lang="scss" scoped>

    .sidebar-container {
        text-align: left;
        padding: 20px;
        // height: 600px;
        max-width: 200px;
        /* margin-left: 20px; */
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: rgba(79, 96, 96,0.82);
        border: 1px solid #fff;

        .sidebar-title {
            color: #111;
            font-weight: bold;
        }
        label {
            margin-left: 5px;
        }

        .typeOfDrink {
            border-bottom: 1px solid #fff;
        }

    }
</style>
