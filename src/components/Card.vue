<template>
    <div class="card" style="width: 14rem;">
        <img :src="image" class="card-img-top" :alt="name + ' image'">
        <div class="card-body">
            <span class="cocktail-name">{{name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["image", "name"],
}
</script>

<style lang="scss" scoped>
    .card {
        margin: 10px;
        .card-body {
            height: 88px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>