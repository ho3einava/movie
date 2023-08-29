<template>
<headerWeb />
<br/> 
      <br/> 
      <br/> 
      <br/> 
      <br/> 
      <br/> 
      <br/> 
<router-view></router-view>

<!-- <slider />
<Home /> -->

</template>

<script>

import headerWeb from './components/header/headerWeb';
// import Home from './components/homeWeb'
// import slider from './components/sliderWeb.vue'
export default {
  name: 'App',
 components:{
  headerWeb,
//   Home,
//  slider
 }
}
</script>

<style>

</style>
