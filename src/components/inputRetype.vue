<template>

         
        <input id="pass2" class="input-login" type="password" >
        <div class="show-hide2">
            <i id="show-eye2" class="bi bi-eye-fill"></i>
            
            
        </div>
    
</template>

<script>
  import {onMounted} from 'vue';
export default{
    setup(){
        onMounted(() =>{
const passFeild2 = document.getElementById('pass2')
const showBtn2 = document.getElementById('show-eye2')


showBtn2.addEventListener("click" , () =>{
    if(passFeild2.type === 'password'){
        passFeild2.type = 'text'
        showBtn2.classList.add('hide')
    }else{
        passFeild2.type = 'password'
        showBtn2.classList.remove('hide')
    }
})


        })


           
}

}
</script>