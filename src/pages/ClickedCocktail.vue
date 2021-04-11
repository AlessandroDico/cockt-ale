<template>
    <div class="single-card">
        <div class="image-container">
            <img :src="image" class="card-img-top" :alt="name + ' image'">
        </div>
        <div class="single-card-body text-left">
            <h1 class="cocktail-info text-center">{{name}}</h1>
            <p class="cocktail-info"><span>Category:</span> {{category}}</p>
            <p class="cocktail-info"><span>Best glass:</span> {{glass}}</p>
            <p class="cocktail-info"><span>Ingredients:</span>
                {{ingredient1}}
                {{ingredient2}}
                {{ingredient3}}
                {{ingredient4}}
                {{ingredient5}}
                {{ingredient6}}
                {{ingredient7}}
                {{ingredient8}}
                {{ingredient9}}
                {{ingredient10}}
                {{ingredient11}}
                {{ingredient12}}
            </p>
            <p class="cocktail-info"><span>Instructions EN:</span> {{Instructions}}</p>
            <p class="cocktail-info"><span>Instructions IT:</span> {{ITInstructions}}</p>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ClickedCocktail",
		props: ["image", "name", "category", "glass", "ingredient1", "ingredient2", "ingredient3", "ingredient4", "ingredient5", "ingredient6", "ingredient7", "ingredient8", "ingredient9", "ingredient10", "ingredient11", "ingredient12", "Instructions", "ITInstructions" ],
	}
</script>

<style lang="scss" scoped>
    .single-card {
        width: 90%;
        margin: 0 auto;
        
        .image-container {
            margin: 0 auto;
            width: 50%;
            border: 1px solid black;
            img {
                width: 100%;
            }
        }

        .single-card-body {

            p {
                font-size: 18px;

                span {
                    font-size: 22px;
                    margin-right: 10px;
                    color: #36b097;
                }
            }
        }
    }
</style>