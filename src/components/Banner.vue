<template>
    <div class="banner">
        <div class="banner-filter">
            <NeonWrite />
        </div>
    </div>
</template>

<script>
import NeonWrite from './../components/NeonWrite.vue';

    export default {
        name: "Banner",
        components: {
            NeonWrite
        }
    }
</script>

<style lang="scss" scoped>
    .banner {
        height: 400px;
        background-image: url(./../images/landing-background7.jpg);
        background-color: #030418;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        .banner-filter {
            height: 100%;
            background-color: #a04b9482;
            background-color: #4f60606b;
            border-bottom: 4px solid black;
        }
    }
</style>