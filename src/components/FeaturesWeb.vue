<template>
    <div class="container">
        <div class="row d-flex mt-5 mb-5 text-center" >
            <div class="col-md-3">
                <div class="card feacture-card mb-5">
                   <div  class="card-title feature-title">Soulcatcher</div>
                <div class="card-body">
                  
                    <img class="feature-img" :src="src + `/l1f9JSPjCfNftigEii1SDK1g2b3.jpg`"/>
                </div>
               </div>
            </div>
            <div class="col-md-3">
                <div class="card feacture-card  mb-5">
                   <div  class="card-title feature-title">The Little Mermaid</div>
                <div class="card-body">
                  
                    <img class="feature-img" :src="src + `/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg`"/>
                </div>
               </div>
            </div>
            <div class="col-md-3">
                <div class="card feacture-card  mb-5">
                   <div  class="card-title feature-title">Hidden Strike</div>
                <div class="card-body">
                  
                    <img class="feature-img" :src="src + `/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg`"/>
                </div>
               </div>
            </div>
            <div class="col-md-3">
                <div class="card feacture-card  mb-5">
                   <div  class="card-title feature-title">Fast X</div>
                <div class="card-body">
                  
                    <img class="feature-img" :src="src + `/fiVW06jE7z9YnO4trhaMEdclSiC.jpg`"/>
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