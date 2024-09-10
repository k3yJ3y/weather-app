<template>
    <nav>
        <div class="navbar-logo">
            <img :src="logo" alt="Web App logo" />
            <span class="app-title">WeatherApp</span>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from "@assets/logo.svg";

export default defineComponent({
    setup() {
        return { logo };
    },
});
</script>

<style scoped lang="scss">
@import "@scss/imports/variables.scss";

nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-bottom: 1px solid white;
    box-shadow: 1px 1px 2px white;
    background-color: $primary-color;

    .navbar-logo {
        display: flex;
        align-items: center; 
    }

    .navbar-logo img {
        height: 50px; 
        margin-right: .4em; 
    }

    .app-title {
        font-size: 1.5em; 
        font-weight: bold;
    }
}
</style>
