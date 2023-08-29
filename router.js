import { createRouter , createWebHistory } from 'vue-router';

import Home from './src/components/homeWeb.vue';
import login from './src/components/auth/loginWeb.vue';
import signup from './src/components/auth/signupWeb.vue';
const routes = [
    {path: '/' , name :'Home' , component :Home},
    {path: '/login' , name :'login' , component :login},
    {path: '/signup' , name :'signup' , component :signup},
]
const router = createRouter({
  history  : createWebHistory(),
  routes
})


export default router;