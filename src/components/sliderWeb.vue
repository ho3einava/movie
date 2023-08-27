<template>
   
   <div class="section">
    <div class="container">
        <div class="row">
      <div class="col-md-12 offset-0 mt-5">
        
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="true">
       
        
            <div class="carousel-inner blackfade">
            <div class="carousel-item active">
                <img class="movie-slider" :src="src + `8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg`"/>

            </div>
            <div class="carousel-item">
                <img class="movie-slider" :src="src + `/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg`"/>

            </div>
            <div class="carousel-item">
                <img class="movie-slider" :src="src + `/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg`"/>

            </div>
            <div class="carousel-item">
                <img class="movie-slider" :src="src + `8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg`"/>

            </div>
            <div class="carousel-item">
                <img class="movie-slider" :src="src + `/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg`"/>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
        </div>
        </div>
    </div>
      </div>
   
            </div>
        </div>
    
   
 </template>

 <script>

   export default{
    
     props:{
         movie : Object
     },
     
   data(){
     return{
         src: 'https://image.tmdb.org/t/p/original/'
     }
   }
    
 }
 
 
 
 
 </script>