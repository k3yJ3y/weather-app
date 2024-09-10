<template>
    <div class="search-component">
        <input
            class="search-input"
            type="text"
            v-model="searchQuery"
            @input="handleInput"
            placeholder="Search ..."
        />
        <button @click="handleSearch" class="search-button">
            <img :src="searchicon" alt="Search Icon" />
        </button>
    </div>
</template>

<script setup lang="ts">
import searchicon from "@assets/icons/search-icon.svg";
</script>

<style scoped lang="scss">
@import "@scss/imports/variables.scss";

.search-component {
    display: flex;
    align-items: center;
    width: 100%;
    border: 2px solid darken($primary-color, 10px);
    background-color: #ffffff;
    border-radius: 99px;
    margin: .5em 0;

    .search-input {
        background-color: transparent;
        border: none;
        flex-grow: 1;
        margin-right: 8px;
        padding: 10px;
    }

    .search-button {
        background: $primary-color;
        border: none;
        padding: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 99px;
        margin: 2px;
        
        img {
            height: 25px;
            width: 25px;
            padding: 1px;
            
        }
    }
}
</style>
