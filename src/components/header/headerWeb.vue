<template>
    
   <nav>
    <img class="logo" src="/image/fa-filimo-dark-logo.webp">
    <ul class="list">
        <router-link to="/" class="items">صفحه اصلی</router-link>
        <li class="items">فیلم</li>
        <li  class="items">سریال</li>
        <li class="items">ایرانی</li>
        <li class="items">خارجی</li>
    </ul>
    
    <ul class="auth">
    <router-link to="/login" class="login">ورود</router-link>
    <router-link to="/signup" class="signup">ثبت نام</router-link>
   </ul>
        <div class="menu" id="nav-btn" ><i class="bi bi-list"></i></div>
   </nav>
   <div class="shownav" id="navbar">
    <div class="close-menu" id="nav-close" > <i class="bi bi-x-lg"></i></div>  
    <router-link to="/" class="items">صفحه اصلی</router-link>

        <li class="items">فیلم</li>
        <li  class="items">سریال</li>
        <li class="items">ایرانی</li>
        <li class="items">خارجی</li>
    </div>

   
</template>

<script>
    import {onMounted} from 'vue';
export default{
    setup(){
        onMounted(() =>{
const navbtn = document.getElementById('nav-btn')
const navbar = document.getElementById('navbar')
const navclose = document.getElementById('nav-close')

navbtn.addEventListener("click" , () =>{
    navbar.classList.add("shownavbar");
})

navclose.addEventListener("click" , () =>{
    navbar.classList.remove("shownavbar")
})
return{navbar , navbtn , navclose}
        })


           
}

}

</script>