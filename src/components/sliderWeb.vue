<template>
   
   <div class="section ">
    <div class="container">
        <div class="row">
      <div class="col-md-12 offset-0 ">
        
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="true">
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
        
            <div class="carousel-inner blackfade">
            <div class="carousel-item active">
                <img class="movie-slider" :src="src + `/tTfnd2VrlaZJSBD9HUbtSF3CqPJ.jpg`"/>

            </div>
            <div class="carousel-item">
                <img class="movie-slider" :src="src + `/fiVW06jE7z9YnO4trhaMEdclSiC.jpg`"/>

            </div>
            <div class="carousel-item">
                <img class="movie-slider" :src="src + `/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg`"/>

            </div>
            <div class="carousel-item">
                <img class="movie-slider" :src="src + `/gPbM0MK8CP8A174rmUwGsADNYKD.jpg`"/>

            </div>
            <div class="carousel-item">
                <img class="movie-slider" :src="src + `/4XLZS2xvdv5rxizzTUVREtRyw95.jpg`"/>

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