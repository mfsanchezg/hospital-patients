import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HeaderMenu from './components/HeaderMenu.vue';
import InsertPatient from './components/InsertPatient.vue';
import UpdatePatient from './components/UpdatePatient.vue';
import SearchBed from './components/SearchBed.vue';
import md5 from "md5";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/insertpatient', component: InsertPatient },
        { path: '/updatepatient', component: UpdatePatient },
        { path: '/searchbed', component: SearchBed }
    ]
});

const app = createApp(App);
app.use(router);
app.component('header-menu', HeaderMenu);
app.provide('md5',md5);
app.mount('#app');