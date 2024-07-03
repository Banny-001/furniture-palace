

<template>
      <v-parallax
        src="/public/Images/sofa1.jpg"
      >
        <div class="d-flex flex-column fill-height justify-center align-center ">
          <div class="main-container">
          <h1 class="text-h4 font-weight-thin mb-4">
            Modern Interior Design Studio
          </h1>
          <h3 class="subheading" align-center>
            Furniture Designs Ideas
          </h3>
          <p>
            Choosing the right furniture for your home online will 
          add elegance and functionality to your interior 
          while also being cost effective and long lasting.
          </p>
          <v-btn class="home-btn" >Shop Now</v-btn>
          <a href="www.instagram.com">Follow Instagram</a>
          </div>
        </div>
        <div class="bottom">
          <ul>
           <li>
             2500+ <br>
             Unique Styles
           </li>
           <li>
             5000+<br>
             Happy Customers
           </li>
           <li>
             300+<br>
             Certified Outlets
           </li>
         </ul>
        </div>
      
      </v-parallax>
  
</template>
<script>

</script>
<style>

.main-container{
    text-align:center;
    padding: 5rem;

}
h3{
  color:rgb(125, 17, 17)
}


button:hover{
  background-color: crimson;
}
a{
  color:rgb(100, 24, 28);
  margin-left: 2rem;
}
ul{
  display:flex;
  flex-wrap:nowrap;
  list-style: none;
  color:white;
  padding: 2rem;
   margin-top:7rem ;
   margin-left: 2rem;
}
li{
  padding:2rem;
}




</style>
