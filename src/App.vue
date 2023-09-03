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

<br/>
<footerWeb />
</template>

<script>

import headerWeb from './components/header/headerWeb';
import footerWeb from './components/footerWeb.vue'
export default {
  name: 'App',
 components:{
  headerWeb,
  footerWeb
 }
}
</script>

<style>

</style>
