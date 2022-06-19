import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HeaderMenu from './components/HeaderMenu.vue';
import InsertUpdatePatient from './components/InsertUpdatePatient.vue';
import SearchBed from './components/SearchBed.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/insertpatient', component: InsertUpdatePatient },
        { path: '/searchbed', component: SearchBed }
    ]
});

const app = createApp(App);
app.use(router);
app.component('header-menu', HeaderMenu);
app.mount('#app');