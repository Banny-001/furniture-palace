<template>
   <!-- <div class="navbar"> -->
    <v-app-bar :elevation="2" color="red"  >
  <template v-slot:prepend>
    <v-app-bar-nav-icon ></v-app-bar-nav-icon> 
  </template>
  
  <v-app-bar-title class="title">Furniture Palace 🪑</v-app-bar-title>
  <v-btn to="/">Home</v-btn>
  
  <v-btn  color="white"to="/Products">Products</v-btn>
  <v-btn to="/AboutUs">About us</v-btn>
 
  <v-btn to="/Cart">
  Cart
  <v-badge  color="red" :content="cart.length">
    <v-icon>mdi-store-outline</v-icon>
  </v-badge>
  </v-btn>
   </v-app-bar>
   <!-- </div> -->
  </template>
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
  computed: {
    ...mapGetters({
      cart: 'cart'
    })
  },
  }
  </script>
  <style>
  .navbar{
    background-color: rgb(194, 17, 158);
  }
  .title{
    color: rgb(101, 10, 10);
    font-size: larger;
    font-family: 'Times New Roman', Times, serif;
    font-weight:bolder
  }
  
</style>