<template>
    <div :id="id" class="card" style="width: 14rem;">
        <div class="overlay">Read More</div>
        <img :src="image" class="card-img-top" :alt="name + ' image'">
        <div class="card-body">
            <span class="cocktail-name">{{name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["image", "name", "id"],
}
</script>

<style lang="scss" scoped>

    .card-img, .card-img-top {
        border-top-left-radius: calc(1.25rem - 1px);
        border-top-right-radius: calc(1.25rem - 1px);
    }

    .card {
        background-color: transparent;
        border-radius: 1.25rem;
        border: 1px solid rgb(200 86 86 / 52%);
        margin: 10px;
        position: relative;
        -webkit-transition: color 500ms;
        transition: color 500ms;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);

        &:hover {
            cursor: pointer;
        }
        
        .card-body {
            height: 88px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &:before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            z-index: 2;
            background: rgba(95, 130, 130, 0.56);
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
            -webkit-transition: 300ms ease-out;
            transition: 300ms ease-out;
            border-radius: 1.25rem;
        }

        &:hover:before {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            border-radius: 1.25rem;
        }

        .overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-transform: uppercase;
            transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            opacity: 0;
            font-size: 24px;
            z-index: 2;

        }

        &:hover .overlay {
            opacity: 1;
            display: block;
            color: #ffffff;
        }
    }

</style>