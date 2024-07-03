<template>
    <div class="main" width="auto">
        <h3 class="available ">Available Products</h3>
        <v-row>
            <v-col cols="10"  md="2" v-for="product in stock" :key=product>
  
   <v-card class="bg-surface-light pt-4"
    max-width="300"
    >
    
    <img height="250"
    width="300"
    :src=product.itemImage
    cover>
    </img>
    <div class="product-card">
    <v-card-title class="title">
        {{ product.itemName }}
    </v-card-title>
    <v-card-text>
        <div class="my- text-subtitle-1" width="100%">{{ product.itemPrice  }}</div>
        <div>{{product.description}} 
    
        </div>
    </v-card-text>
    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-actions>
     <v-btn
       text="Direct Import"
       border 
       block
      
        class="card-btn" @click="addToCart(product)" >Add To Cart</v-btn>
    </v-card-actions>
   </div>
    </v-card>
    
    </v-col>
    </v-row>
   </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'       
 export default{
    data(){
        return{
            products:[1,2,3,4],
           total: 0,
            stockDetails:[
        {
            itemNumber:1,
            itemName:"Arm Chair",
            itemPrice:500,
            itemImage:"/public/images/arm chair.jpg",
            description:'Comfortable white arm chair'
        },
        {
            itemNumber:2,
            itemName:" Chair 1",
            itemPrice:300,
            itemImage: '/public/images/chair 1.jpg',
            description:'Comfortable white arm chair'
        },
        {
            itemNumber:3,
            itemName:"comfy chair",
            itemPrice:300,
            itemImage:'/public/images/chair 3.jpg',
            description:'Comfortable white arm chair'
        },
        {
            itemNumber:4,
            itemName:"chair 2",
            itemPrice:300,
            itemImage:'/public/images/chair 2.jpg',
            description:'Comfortable white arm chair'
        },
        {
            itemNumber:4,
            itemName:"White comfy chair",
            itemPrice:300,
            itemImage:'/public/images/comfy chair.jpg',
            description:'Comfortable white arm chair'
        },
        {
            itemNumber:4,
            itemName:"Mordern lounge chair",
            itemPrice:300,
            itemImage:'/public/images/mordern lounge chair.jpg',
            description:'Comfortable white arm chair'
        },
        {
            itemNumber:4,
            itemName:"Vitra panton chair",
            itemPrice:300,
            itemImage:'/public/images/vitra panton chair.jpg',
            description:'Comfortable white arm chair'
        },
        {
            itemNumber:4,
            itemName:"Sofa",
            itemPrice:300,
            itemImage:'/public/images/sofa2.jpg',
            description:'Comfortable white arm chair'
        },
        {
            itemNumber:5,
            itemName:"Butterfly pink coach.jpg",
            itemPrice:1000,
            itemImage:'/public/images/Butterfly pink coach.jp',
            description:'Comfortable white arm chair'
        },
        {
            itemNumber:6,
            itemName:"casen white",
            itemPrice:800,
            itemImage:'/public/images/casen white Acent chair.jpg',
            description:'Casen white  pure cotton chair '
        },
        {
            itemNumber:7,
            itemName:"Gondola cute chair",
            itemPrice:1000,
            itemImage:'/public/images/Gondola cute chair.jpg',
            description:'Exortic Gondola chair'
        },
        {
            itemNumber:8,
            itemName:"White cloud couch",
            itemPrice:1000,
            itemImage:'/public/images/White cloud couch.jpg',
            description:'Cozy white cloud couch'
        },












    ],
    cartItems:[]
           
        }
    },

       methods:{
        ...mapActions([
            "addToCart"
        ]),
    },
    computed:{
        ...mapGetters({
            stock:'stock'
        })
    },
 }
</script>
<style>
.card-btn{
    background-color: rgb(206, 26, 26);
}
.product-card{
    background-color: bisque;
}
.available{
    display: flex;
    align-items: center;
    margin-left: 30%;
    
}

</style>