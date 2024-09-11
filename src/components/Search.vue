<template>
    <div class="search-container">
        <div class="search-component">
            <input
                class="search-input"
                type="text"
                v-model="query"
                placeholder="Search ..."
                @keyup.enter="handleSearch"
            />
            <button @click="handleSearch" class="search-button">
                <img :src="searchicon" alt="Search Icon" />
            </button>
        </div>
        <span class="required-field" v-if="showError"
            >* This field is required</span
        >
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import searchicon from "@assets/icons/search-icon.svg";

const query = ref("");
const showError = ref(false);

const emit = defineEmits(["search"]);

const handleSearch = () => {
    if (!query.value.trim()) {
        showError.value = true;
    } else {
        emit("search", query.value.trim());
        query.value = "";
        showError.value = false;
    }
};
</script>

<style scoped lang="scss">
@import "@scss/imports/variables.scss";

.search-container {
    margin: 0.2em 0;
    .search-component {
        display: flex;
        align-items: center;
        width: 100%;
        border: 2px solid darken($primary-color, 10px);
        background-color: #ffffff;
        border-radius: 99px;

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

    .required-field {
        color: $error-color;
        font-size: 0.7em;
    }
}
</style>
