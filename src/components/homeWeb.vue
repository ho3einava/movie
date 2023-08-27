<template>
  <div class="container mt-5">
    <div class="row g-4 align-items-center">
      
      <div class="col-md-12 " v-for="(post , index) in posts" :key="index">
        <Card :name = "post" />
        
    
  
      </div>
    </div>
  
  </div>
    
</template>

<script>
import axios from 'axios';
import {ref} from 'vue';
import Card from '@/components/CardsWeb.vue'

export default{
components:{
  Card,
  
},
    setup(){
    const posts = ref([]);
function getData(){
    axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1')
  .then(function (response) {
    // handle success
    posts.value = response.data.results;
  
  })
  .catch(function (error) {
    // handle error
    console.log(error);
})

}  
getData()
return{posts}
}

}


</script>