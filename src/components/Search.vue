<template>
    <div class="search-container">
      <input class="search-input" type="text" v-model="searchQuery" @input="handleInput" placeholder="Search ..." />
      <button @click="handleSearch" class="search-button"><img :src="searchicon" alt="Search Icon"/></button> 
    </div>
  </template>
  
  <script setup lang="ts">
  import searchicon from "@assets/icons/search-icon.svg";
  
  </script>
  
  <style scoped lang="scss">
  
  </style>
  