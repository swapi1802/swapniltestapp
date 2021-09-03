require('./bootstrap');
import vue from 'vue'
window.Vue = vue;

import App from './components/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
 
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
 
const routes = [
    {
      name: 'Create',
      path: '/create',
      component: Create
    },
    {
      name: 'Edit',
      path: '/edit',
      component: Edit
    },
  ];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
 
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});