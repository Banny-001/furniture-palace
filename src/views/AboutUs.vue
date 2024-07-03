<template>
  <v-card>
  <div class="about">
    <h3>Discover Furniture Palace-Where Innovation Meets Design </h3>
    <img  class="about-img" src="/public/Images/people sofa.jpg" width="700" height="300" border-radius="10px">
    <div class="about-card">
      <div class="card-2">
      <h4>Our Journey Story</h4>
      <p>Transform spaces with innovative design.Explore our story 
        of craftsmanship and style,creating furniture that inspiresand enhances
         modern living.
      </p>
      </div>
      <div class="card-1">
        <img src="/public/Images/furniture guy.jpg" width="400" height="400">
        <div class="card-message">
        <h5>From Humble beginnings </h5>
        <p>Our story began in 2010 in a small beautiful workshop,driven by a passion for creating beautiful
          and comfortable furniture.What started as a modest operation has grown into a beloved 
          brand known for its quality and design.
        </p>
        </div>
      </div>
      <div class="card-1">
        <img src="/public/Images/furniture guy 2.jpg" width="400" height="400">
        <div class="card-message">
          <h5>Innovation and Growth</h5>
          <p>Innovation has always been the heart of what we do.In 2018,
            we introduced our first line of eco-friendly furniture,crafted from 
            sustainable materials.This commitment to the environment has not only 
            won us accolades but also the trust and loyalty of our customers.
          </p>
        </div>
      </div>
      <div class="card-1">
        <img src="/public/Images/lady furniture.jpg" width="400" height="400">
        <div class="card-message">
        <h5>Looking Ahead</h5>
        <p>As we look ahead to the future,our goal remainsthe same:to 
          createfurniture that combines style,comfort and sustainability.
          We're excited about the new designs and innovations we have in store,
          and we're committed to making your home a beutiful,comfortable,and happy place.
        </p>
       </div>
      </div>

    </div>

  </div>
    
  </v-card>
  </template>


<style>
  .about {
    min-height: 100vh;
    width:1400px;
    align-items: center;
    padding: 2px;
    h3{
      margin-left: 30%;
    }
  }
  .about-img{
          margin-left:20% ;
        border-radius: 2rem;
  }
  .about-card{
    display: flex;
    flex-direction: column;
  }
  .card-2{
    padding: 2px;
    margin-top: none;
    margin-bottom: 5px;
    h4{
      margin-top: none;
      display: flex;
      align-items: center;
      margin-left: 30%;
    }
    p{
   padding-left:5rem ;
   align-items: center;
   width:100%
}
  }
  .card-1{
    display: flex;
     align-items: center;
     margin:1rem;
     background-color: antiquewhite;
     border-radius: 2rem;
    
  }
  .card-message{
    padding:2rem;
    width:50%;
    h5{
      margin-left: 20%;
      color: brown;
      margin-top: none;
    }
  }

</style>
