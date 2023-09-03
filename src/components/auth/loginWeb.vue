<template>

    <div class="authlogin">
        <h3 class="login-title">ورود کاربر</h3>
    <div class="sec-login">
        <img class="vector-login" src="/image/3094352.jpg">
    <form class="form-login">
        
        <label class="label-login">نام کاربری</label><br/>
        
        <input v-model="loginName" class="input-login" type="email" ><br/>
        
        
        <label  class="label-login">رمز عبور</label><br/>
        <inputWeb v-model="loginpass"/>
        
       
        
        <br/>
       <div class="remmber">
        <input  class="input-remeber" type="checkbox" >
        <label class="label-remember">
رمز عبور را به خاطر بسپار</label><br/>
        

       </div>
        <button @click.prevent="submitlogin" class="btn-login btn btn-outline-dark">ورود </button>
    </form>
    </div>
    </div>
</template>


<script>
import inputWeb from '../inputWeb.vue'
import {reactive } from 'vue';
import Swal from 'sweetalert2'
export default{
    components:{
        inputWeb
},
setup(){
    
    
const formData = reactive({
    loginName : "",
    loginpass : ""
})

function submitlogin(){
        if(formData.loginName || formData.loginpass === ""){
            Swal.fire({
  title: 'خطا',
  text: 'مقدار فیلد نمیتواند خالی باشد',
  icon: 'error',
  confirmButtonText: 'ادامه بده'
})
}
}
return {formData ,submitlogin  }
}}

</script>