<template>

    <div class="authlogin">
        <h3 class="login-title">ثبت نام کاربر</h3>
    <div class="sec-login">
        <img class="vector-login" src="/image/Checklist.jpg">
    <form class="form-login">
        <label class="label-login">ایمیل</label><br/>
        <input v-model="loginEmail" class="input-login" type="email" ><br/>
        
        <label class="label-login">رمز عبور</label><br/>
       
           <inputWeb v-model="loginpass" />
           
        <label class="label-login">تکرار رمز عبور</label><br/>
        
        <inputRetype v-model="loginrepass" />
        
        <button @click.prevent="submitSignup" class="btn-login btn btn-outline-dark">ثبت نام </button>
    </form>
    </div>
    </div>
</template>

<script>
import inputWeb from '../inputWeb.vue'
import inputRetype from '../inputRetype.vue'
import {reactive } from 'vue';
import Swal from 'sweetalert2'
export default{
    components:{
        inputWeb,
        inputRetype
},
setup(){
    
    
const formData = reactive({
    loginEmail : "",
    loginpass : "",
    loginrepass : ""
})

function submitSignup(){
        if(formData.loginEmail || formData.loginpass || formData.loginrepass === ""){
            Swal.fire({
  title: 'خطا',
  text: 'مقدار فیلد نمیتواند خالی باشد',
  icon: 'error',
  confirmButtonText: 'ادامه بده'
})
}
}
return {formData ,submitSignup  }
}}

</script>