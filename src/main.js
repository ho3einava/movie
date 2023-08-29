import { createApp } from 'vue'
import App from './App.vue';

import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/style.css';
import router from '../router'
const app = createApp(App)
app.use(router)

  
app.mount('#app')
