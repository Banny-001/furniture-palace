<template>
   <!-- <div class="navbar"> -->
    <v-app-bar :elevation="2" color="#F7D4BC"  >
  <template v-slot:prepend>
    <v-app-bar-nav-icon ></v-app-bar-nav-icon> 
  </template>
  
  <v-app-bar-title class="title">Furniture Palace 🪑</v-app-bar-title>
  <v-btn style="background-color:#fff"  to="/" >Home</v-btn>
  
  <v-btn style="background-color:#fff" to="/Products">Products</v-btn>
  <v-btn style="background-color:#fff"  to="/AboutUs">About us</v-btn>
 
  <v-btn style="background-color:#fff" to="/Cart">
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
 
  .title{
    color: rgb(101, 10, 10);
    font-size: larger;
    font-family: 'Times New Roman', Times, serif;
    font-weight:bolder
  }
  button:hover{
       background-color: brown;
  }
  
</style>