<template>
    <div class="error-message" v-if="error">
        <span>{{error}}</span><img src="@assets/icons/error.svg"/>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['error'])

</script>

<style scoped lang="scss">
@import "@scss/imports/variables.scss";

.error-message{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: lighten($error-color, 30%);
    color: $error-color;
    border: $error-color;
    padding: .5em 1em;
    margin-top: .2em;
    border-radius: 5px;


    img{
        height: 25px;
    }
}
</style>
