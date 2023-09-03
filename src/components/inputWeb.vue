<template>

<div class="show-hide">
            <i id="show-eye" class="bi bi-eye-fill show"></i>
            
            
        </div>
        <input id="pass" class="input-login" type="password" >
</template>

<script>
  import {onMounted} from 'vue';
export default{
    setup(){
        onMounted(() =>{
const passFeild = document.getElementById('pass')
const showBtn = document.getElementById('show-eye')


showBtn.addEventListener("click" , () =>{
    if(passFeild.type === 'password'){
        passFeild.type = 'text'
        showBtn.classList.add('hide')
    }else{
        passFeild.type = 'password'
        showBtn.classList.remove('hide')
    }
})


        })


           
}

}
</script>