<template>
  
                <div class="container">
                    <div class="row d-flex justify-content-center ">
                        <div class="col-md-6">
                            <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">{{name.title}}</h5>
                        <hr>
                        <img class="image " :src="src + name.poster_path"/>
                        <hr>
    <p class="card-text text-right">{{ name.overview }}</p>
    <hr>
    <p class="card-text">{{ name.release_date }}</p>
    <p class="card-text">{{ name.vote_average }}</p>
    <p class="card-text">{{ name.vote_count }}</p>
    <p class="card-text">{{ name.genre_ids }}</p>
    <p class="card-text">{{ name.original_language }}</p>
  
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
            
</template>
<script>
  
   
export default{
    props:{
        name : Object
    },
    
  data(){
    return{
        src: 'https://image.tmdb.org/t/p/original/'
    }
  }
   
}
</script>