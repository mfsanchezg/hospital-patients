import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue';
import App from './App.vue';
import HeaderMenu from './components/HeaderMenu.vue';
import InsertUpdatePatient from './components/InsertUpdatePatient.vue';

const app = createApp(App);

app.component('insert-update-patient', InsertUpdatePatient);
app.component('header-menu', HeaderMenu);

app.mount('#app');

import "bootstrap/dist/js/bootstrap.js"
