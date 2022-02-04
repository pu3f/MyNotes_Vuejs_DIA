import { createApp } from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import Header from './components/Header.vue';

import mixins from './mixins';
import router from './router';
import store from './store';

import moshaToast from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

const app = createApp(App);

//global component use for many page
app.component('header-component', Header);
app.mixin(mixins);
app.use(router); //call router
app.use(store);

//Library
axios.defaults.baseURL = 'https://api.steinhq.com/v1/storages/61fa3ab88d29ba2379183488';
app.use(VueAxios, axios);
app.use(moshaToast);
app.mount('#app');
