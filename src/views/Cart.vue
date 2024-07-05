<template>
<v-card class="mx-auto" width="auto" >
    <v-card-text class="bg-surface-light pt-4">
        <v-card-title 
         >cart{{ total }}
            <v-btn 
            background-color="red"
            text="Checkout"
            ></v-btn>
        </v-card-title>
        <v-row >
            <v-col cols="10" md="2" v-for="product in cartItems" :key=product>
            <v-card class="mx-auto my-10"
               max-width="300" >
            <img height="250"
            width="300"
            :src=product.itemImage
            cover>
            </img>
            <div class="product-card">
            <v-card-item>{{product.itemName}}</v-card-item>
            <v-card-item>{{product.itemPrice}}</v-card-item>
            <v-card-text>{{product.description}}</v-card-text>
            <v-divider class="mx-4 mb-1"></v-divider>
            <v-card-actions>
                <v-btn class="card-btn"
                color="red"
                text="Remove"
                block
                border 
                @click="removeFromCart(product)">
            </v-btn>
            </v-card-actions>
            </div>
        </v-card>
    </v-col>
        </v-row>

    </v-card-text>

</v-card>


</template>
<script>
import {mapActions,mapGetters} from 'vuex';

export default{

    data(){
        return{

        }
    },
    methods:{
        ...mapActions([
            'removeFromCart'
        ])

    },
    computed:{
        ...mapGetters({
            cartItems:'cart',
            total:'totalCartAmount'
        })
    }
}
</script>
<style>
.card-btn{
    background-color: rgb(206, 26, 26);
}
.product-card{
    background-color: bisque;
}
</style>