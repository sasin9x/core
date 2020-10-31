require('./bootstrap');
window.Vue = require('vue');
import router from './route';
import App from './components/App';
import Vuetify from '../plugins/vuetify';
import VueAuth from '@websanova/vue-auth'; 
import axios from 'axios';
import VueAxios from 'vue-axios';
import auth from './auth';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(VueAxios, axios);
Vue.router = router;
App.router = Vue.router;
Vue.use(VueRouter);
Vue.use(VueAuth, auth);
Vue.use(Vuex);
    
axios.defaults.baseURL = 'http://localhost:8000/';
// Khai báo layouts
import Default from './layouts/Default'
Vue.component('default-layout', Default);

//Khai báo dùng router này
new Vue({
    vuetify: Vuetify,
    el: '#app',
    render: h => h(App),
    router
});
