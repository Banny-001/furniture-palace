const state={
    stockDetails:[
        {
            itemNumber:1,
            itemName:"Arm Chair",
            itemPrice: 500,
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
            itemNumber:4,
            itemName:"Grey sofa",
            itemPrice:300,
            itemImage:'/public/images/sofa3.jpg',
            description:'Comfortable grey sofa 7-sitter'
        },
        {
            itemNumber:5,
            itemName:"Butterfly pink coach",
            itemPrice:1000,
            itemImage:'/public/images/Butterfly pink coach.jpg',
            description:'Luxurious unique butterfly  chair'
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
}
const getters={
    stock:(state)=>state.stockDetails
}
const actions={

}
const mutations={

}
export default{
    state,
    getters,
    actions,
    mutations
}